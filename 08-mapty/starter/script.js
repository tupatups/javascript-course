'use strict';

console.log('=== MAPTY: WORKOUT TRACKING APPLICATION ===');

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = Date.now() + ''.slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}
const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout date:', testWorkout.date);

testWorkout.click();
testWorkout.click();
console.log('Click count:', testWorkout.clicks);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// Create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// Test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// Check if geolocation is supported
console.log('=== TESTING GEOLOCATION API ===');

console.log('=== TESTING LEAFLET MAPS ===');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('🚀 App starting...');
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener(
      'keydown',
      function (e) {
        if (e.key === 'Escape' && !form.classList.contains('hidden')) {
          this._hideForm();
        }
      }.bind(this)
    );
  }

  _getPosition() {
    console.log('🔍 Requesting user location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message +=
          'Location information is unavailable. Using default location.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out. Using default location.';
        break;
      default:
        message += 'An unknown error occurred. Using default location.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('📍 Loading default map location (London)');
    const defaultCoords = [51.5074, -0.1278];

    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
    console.log('🗺️ Default map loaded successfully');
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`📍 User location: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
    console.log('Map loaded successfully!');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    const { lat, lng } = mapE.latlng;
    form.classList.remove('hidden');
    inputDistance.focus();
    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        `Workout location
Lat: ${lat.toFixed(4)}
Lng: ${lng.toFixed(4)}`
      )
      .openPopup();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // validation with specific error messages
    const showValidationError = message => {
      alert(`❌ Validation Error: ${message}`);
      inputDistance.focus();
    };

    // for empty inputs
    if (!distance || !duration) {
      return showValidationError('Distance and duration are required!');
    }

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      if (!cadence) {
        return showValidationError('Cadence is required for running workouts!');
      }

      if (!validInputs(distance, duration, cadence)) {
        return showValidationError('All inputs must be valid numbers!');
      }

      if (!allPositive(distance, duration, cadence)) {
        return showValidationError('All values must be positive numbers!');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (!validInputs(distance, duration, elevation)) {
        return showValidationError(
          'Distance, duration, and elevation must be valid numbers!'
        );
      }

      if (!allPositive(distance, duration)) {
        return showValidationError(
          'Distance and duration must be positive numbers!'
        );
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();

    // For now, just log the form submission
    console.log('Form submitted!');

    // Hide form after submission
    this._hideForm();

    this._setLocalStorage();
  }

  _setLocalStorage() {
    try {
      localStorage.setItem('workouts', JSON.stringify(this.#workouts));
      console.log(`Saved ${this.#workouts.length} workouts to localStorage`);
    } catch (error) {
      console.error('Error saving workouts to localStorage:', error);
      alert('Could not save workout data. Storage might be full.');
    }
  }

  _getLocalStorage() {
    try {
      const data = localStorage.getItem('workouts');

      if (!data) {
        console.log('No saved workouts found');
        return;
      }

      console.log('Loading saved workouts from localStorage');
      this.#workouts = JSON.parse(data);

      // Restore object prototypes
      this.#workouts = this.#workouts.map(work => {
        if (work.type === 'running') {
          return new Running(
            work.coords,
            work.distance,
            work.duration,
            work.cadence
          );
        }
        if (work.type === 'cycling') {
          return new Cycling(
            work.coords,
            work.distance,
            work.duration,
            work.elevationGain
          );
        }
      });

      this.#workouts.forEach(work => {
        this._renderWorkout(work);
      });

      console.log(`Loaded ${this.#workouts.length} workouts from storage`);
    } catch (error) {
      console.error('Error loading workouts from localStorage:', error);
      // Clear corrupted data
      localStorage.removeItem('workouts');
      this.#workouts = [];
    }
  }

  _getLocalStorage() {
    const data = localStorage.getItem('workouts');

    if (!data) return;

    this.#workouts = JSON.parse(data);

    // Restore object prototypes
    this.#workouts = this.#workouts.map(work => {
      if (work.type === 'running') {
        return new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );
      }
      if (work.type === 'cycling') {
        return new Cycling(
          work.coords,
          work.distance,
          work.duration,
          work.elevationGain
        );
      }
    });

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  _showAllWorkouts() {
    console.log('All workouts:', this.#workouts);
    return this.#workouts;
  }

  _clearAllData() {
    if (confirm('⚠️ This will delete all workout data. Are you sure?')) {
      localStorage.removeItem('workouts');
      location.reload();
    }
  }

  _exportWorkouts() {
    const dataStr = JSON.stringify(this.#workouts, null, 2);
    console.log('Workout data (copy this to backup):');
    console.log(dataStr);
    return dataStr;
  }

  _importWorkouts(workoutData) {
    try {
      const workouts = JSON.parse(workoutData);
      localStorage.setItem('workouts', workoutData);
      location.reload();
      console.log('✅ Workouts imported successfully');
    } catch (error) {
      console.error('❌ Error importing workouts:', error);
      alert('Invalid workout data format');
    }
  }

  // Add these to global scope for easy console access
  _getAppHelpers() {
    return {
      showWorkouts: this._showAllWorkouts.bind(this),
      clearData: this._clearAllData.bind(this),
      exportData: this._exportWorkouts.bind(this),
      importData: this._importWorkouts.bind(this),
    };
  }

  // NEW METHOD: Render markers for restored workouts
  _renderWorkoutMarkersFromStorage() {
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
    });
  }

  _testLocalStorage() {
    console.log('Workouts in localStorage:', localStorage.getItem('workouts'));
    console.log(
      'Parsed workouts:',
      JSON.parse(localStorage.getItem('workouts') || '[]')
    );
    console.log('App workouts array:', this.#workouts);
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  // NEW METHOD: Handle clicks on workout list
  _moveToPopup(e) {
    // Match only the workout element
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.type === 'running')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

    if (workout.type === 'cycling')
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }
}

const app = new App();
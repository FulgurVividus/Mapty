"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

//# Implementing geo-location API
// accepts 2 parameters: success and error functions
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (parameter) {
      // success
      const { latitude } = parameter.coords;
      const { longitude } = parameter.coords;
      console.log(
        `https://www.google.com/maps/@${latitude},${longitude},15.5z?entry=ttu`
      );
    },
    function () {
      // error
      alert(`Could not get the current location 🗺️`);
    }
  );
}

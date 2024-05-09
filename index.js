// Select the elements with the classes '.hour', '.minute', and '.second'
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// Function to update the clock hands position
function setDate() {
  // Create a new Date object to get the current time
  const now = new Date();

  // Get the current seconds, minutes, and hours
  const getSecond = now.getSeconds();
  const getMinute = now.getMinutes();
  const getHour = now.getHours();

  // Calculate the degree of rotation for the second hand (0-360 degrees)
  const secondDegree = (getSecond / 60) * 360;
  // Calculate the degree of rotation for the minute hand (0-360 degrees)
  const minuteDegree = (getMinute / 60) * 360;
  // Calculate the degree of rotation for the hour hand (0-360 degrees, based on 12-hour format)
  const hourDegree = (getHour / 12) * 360;

  // Apply the CSS transform property to rotate the second hand
  second.style.transform = `rotate(${secondDegree}deg)`;
  // Apply the CSS transform property to rotate the minute hand
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  // Apply the CSS transform property to rotate the hour hand
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

// Call the setDate function every second (1000 milliseconds) using setInterval
setInterval(setDate, 1000);

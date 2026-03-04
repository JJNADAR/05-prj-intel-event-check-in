// Get da DOM elements
const form = document.getElementById("checkInForm"); // me fixed form id
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// we track the attendance
let count = 0;
const maxCount = 50;

// do the form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text; // me fix this one

  console.log(name, teamName);

  // the total count
  count++;
  console.log("Total check-ins:", count);

  // then update the total attendee count on the page
  const attendeeCounter = document.getElementById("attendeeCount");
  attendeeCounter.textContent = count;

  // we need to update the progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;

  //  team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //  the welcome message
  const greeting = document.getElementById("greeting");
  const message = `Welcome, ${name} from ${teamName}!`;
  greeting.textContent = message;
  greeting.style.display = "block";
  greeting.classList.add("success-message");

  console.log(message);

  form.reset();
});
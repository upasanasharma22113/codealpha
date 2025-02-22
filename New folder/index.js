function calculateAge() {
  // Get user inputs
  const day = parseInt(document.getElementById("dob").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Get current date
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  // Validate inputs
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    displayMessage("Please enter a valid date.", "red");
    return;
  }

  // Check if the date is in the future
  const birthDate = new Date(year, month - 1, day);
  if (birthDate > today) {
    displayMessage("Birth date cannot be in the future.", "red");
    return;
  }

  // Check if the date is valid (e.g., not February 30)
  if (
    birthDate.getDate() !== day ||
    birthDate.getMonth() + 1 !== month ||
    birthDate.getFullYear() !== year
  ) {
    displayMessage("Invalid date. Please enter a correct date.", "red");
    return;
  }

  // Calculate age
  let age = currentYear - year;
  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age--; // Adjust if the birthday hasn't occurred yet this year
  }

  // Display result
  displayMessage(`Your age is ${age} years.`, "green");
}

// Function to display messages
function displayMessage(message, color) {
  const ageResult = document.getElementById("ageResult");
  ageResult.textContent = message;
  ageResult.style.color = color;
}

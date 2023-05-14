const ratingScreen = document.getElementById("ratingScreen");
const resultScreen = document.getElementById("resultScreen");

const result = document.getElementById("result");

const rating1 = document.getElementById("one");
const rating2 = document.getElementById("two");
const rating3 = document.getElementById("three");
const rating4 = document.getElementById("four");
const rating5 = document.getElementById("five");

const errorMessage = document.getElementById("errorMessage");

const submit = document.getElementById("submit");

let selectedRating = null; // Variable to store the currently selected rating

submit.addEventListener("click", function () {
  // Check if no rating is selected
  if (!selectedRating) {
    // Show the error message
    errorMessage.innerHTML = "No rating selected!";
  } else {
    // Clear the error message
    errorMessage.innerHTML = "";
    //show result
    result.innerHTML = `You selected ${selectedRating.value} out of 5`;
    //remove rating screen
    ratingScreen.style.display = "none";
    //show result screen
    resultScreen.style.display = "block";
  }
});

// Add click event listeners to each rating element
rating1.addEventListener("click", function () {
  selectedRating = rating1;
  clearErrorMessage();
});
rating2.addEventListener("click", function () {
  selectedRating = rating2;
  clearErrorMessage();
});
rating3.addEventListener("click", function () {
  selectedRating = rating3;
  clearErrorMessage();
});
rating4.addEventListener("click", function () {
  selectedRating = rating4;
  clearErrorMessage();
});
rating5.addEventListener("click", function () {
  selectedRating = rating5;
  clearErrorMessage();
});

function clearErrorMessage() {
  // Clear the error message
  errorMessage.innerHTML = "";
}

// Variables to keep track of the stages
let currentStage = 1;

// Function to move to the next stage
function nextStage() {
  // Hide the current stage
  document.getElementById(`stage${currentStage}`).style.display = "none";

  // Increment the stage number
  currentStage++;

  // Check if the stage is valid, if not, reset to Stage 1
  if (currentStage > 3) {
    currentStage = 1;
  }

  // Show the next stage
  document.getElementById(`stage${currentStage}`).style.display = "block";
}

// Add event listener to the "Next Stage" button for the current stage
document.querySelectorAll(".nextStageBtn").forEach((button) => {
  button.addEventListener("click", nextStage);
});

// Initialize the first stage to be visible
document.getElementById(`stage${currentStage}`).style.display = "block";

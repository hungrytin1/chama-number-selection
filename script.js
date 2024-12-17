// Array of 20 different colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#FF9B33", "#33FFE5", "#F2FF33", "#FF5733", "#33FF98",
    "#8D33FF", "#FF3333", "#33FF57", "#A133FF", "#FF5733",
    "#FF5733", "#33B5FF", "#8D33FF", "#F2FF33", "#FF5733"
  ];
  
  // Array of secret numbers behind the colors
  const secretNumbers = [
    4,2,5,9,12,13,19,20,16,17,7,8,3,1,15,14,10,11,18,6
  ];
  
  // Generate the grid
  const gridContainer = document.querySelector('.grid-container');
  
  // Flag to check if a box has been clicked
  let gridLocked = false;
  
  // Function to create the grid
  function createGrid() {
    for (let i = 0; i < 20; i++) {
      const box = document.createElement('div');
      box.classList.add('grid-box');
      box.style.backgroundColor = colors[i];
  
      // Add a click event to each box
      box.addEventListener('click', () => revealNumber(box, i));
  
      gridContainer.appendChild(box);
    }
  }
  
  // Function to reveal the secret number
  function revealNumber(box, index) {
    // Check if the grid is locked, i.e., if a box has already been clicked
    if (gridLocked) return;
  
    // Create a div element to display the secret number
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = secretNumbers[index];
  
    // Append the number to the clicked box
    box.appendChild(numberElement);
  
    // Disable further clicks on this box
    box.classList.add('clicked');
  
    // Lock the entire grid after the first click
    gridLocked = true;
  
    // Disable clicking on any other box
    const allBoxes = document.querySelectorAll('.grid-box');
    allBoxes.forEach(box => box.classList.add('clicked'));
  }
  
  // Initialize the grid
  createGrid();
  
  
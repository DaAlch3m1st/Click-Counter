// Get the button element from the DOM
const button = document.getElementById('buttonCounter');

// Function to count the clicks of the user
function counterEvent(event) {
    // Get the current count from the counter element and convert it to an integer
    const currentCount = parseInt(document.getElementById('counter').textContent);
    
    // Increment the count by 1
    const sum = currentCount + 1;
    
    // Update the counter element with the new count
    document.getElementById('counter').textContent = sum;

    // Save the new count to local storage
    localStorage.setItem('count', sum);

    // Retrieve the count from local storage (for demonstration purposes)
    const items = localStorage.getItem('count');
    console.log('clicks:', items);
};

// Add an event listener to the button to trigger the counterEvent function on click
button.addEventListener('click', counterEvent);

// Function to initialize the counter from local storage when the page loads
function initializeCounter() {
    // Get the count from local storage
    const storedCount = localStorage.getItem('count');
    
    // If there is a stored count, update the counter element with it
    if (storedCount !== null) {
        document.getElementById('counter').textContent = storedCount;
    }
};

// Initialize the counter when the page loads
initializeCounter();
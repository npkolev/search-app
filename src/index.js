import fetchResults from './api/laureatesApi';
import './components/result-list';
import './components/search-box';
import './components/check-box';

// Prevent loading the initial render by JavaScript. Static asets to be loaded first.
window.addEventListener('load', () => {
  initUI();
});

// Function to be executed after load
function initUI() {
  // Select the search-box custom component
  const customInput = document.querySelector('search-box');
  const checkbox = document.querySelector('check-box')

  // Listen for checkbox state changes and update wild card value
  let checkedState = true;
  checkbox.addEventListener( 'click', e => {
    checkedState = e.target.value;
  });
 
  // Add event listener for user input event and pass the value to the fetch function
  customInput.addEventListener('input', e => {
    // Delete all list items if there is not user input
  if(!customInput.value) {
    const allListItems = document.querySelectorAll('result-list')
    allListItems.forEach(item => {
      item.parentNode.removeChild(item);
    })
  }
    fetchResults(customInput.value, checkedState);
  })
}

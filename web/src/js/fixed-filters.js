// Select the element you want to make sticky
const filter = document.querySelector('.all-filters-container');

// Get the vertical position of the element you want to make sticky
const offsetTop = filter.offsetTop;

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', () => {
// Get the current vertical scroll position of the user
const scrollPosition = window.scrollY;

// Check if the user's scroll position is greater than or equal to the vertical position of the element you want to make sticky
if (scrollPosition >= offsetTop - 110) {
// Add the class that makes the element sticky
filter.classList.add('fixed-filters');
} else {
// If the user's scroll position is less than the vertical position of the element you want to make sticky, remove the class
filter.classList.remove('fixed-filters');
}
});

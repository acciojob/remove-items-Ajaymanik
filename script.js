const select = document.getElementById('colorSelect');
const buttonL = document.querySelector('input[type="button"]');

buttonL.addEventListener('click', () => {
    const selectedIndex = select.selectedIndex; // Corrected typo
    if (selectedIndex !== -1) { // Check if an option is selected
        select.remove(selectedIndex);
    } else {
        alert("Please select a color to remove."); // Optional: alert if nothing is selected
    }
});
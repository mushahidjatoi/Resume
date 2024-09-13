const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsList = document.querySelector('#skills ul') as HTMLElement;

toggleButton.addEventListener('click', () => {
  if (skillsList.style.display === 'none') {
    skillsList.style.display = 'block';
  } else {
    skillsList.style.display = 'none';
  }
});

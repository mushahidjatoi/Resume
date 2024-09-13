var toggleButton = document.getElementById('toggle-skills');
var skillsList = document.querySelector('#skills ul');
toggleButton.addEventListener('click', function () {
    if (skillsList.style.display === 'none') {
        skillsList.style.display = 'block';
    }
    else {
        skillsList.style.display = 'none';
    }
});

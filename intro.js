const features = document.getElementById('featuresWrapper');
const arrowClose = document.getElementById('arrow-up');
const arrowOpen = document.getElementById('arrow-down');
const featuresDropDown = document.getElementById('')
const company = document.getElementById('');
const companyDropDown = document.getElementById('');
features.addEventListener('mouseenter', () => {
    arrowOpen.classList.remove('hide');
    arrowClose.classList.add('hide');
})
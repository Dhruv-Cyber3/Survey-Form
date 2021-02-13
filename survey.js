const form = document.querySelector('#form-box');
const submit = document.querySelector('#submit');
const thank = document.querySelector('#thank-you');

submit.addEventListener('click', function (e) {
    form.style.display = 'none';
    thank.style.display = 'block';
})
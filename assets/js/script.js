const emailInput = document.querySelector('#emailInput');
const resultMessage = document.querySelector('#resultMessage');
const emailForm = document.querySelector('#emailForm');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const email = emailInput.value;
    const isValid = validateEmail(email);
        if(isValid){
            resultMessage.textContent = 'E-mail válido!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'E-mail inválido!';
            resultMessage.style.color = 'red';
        }
});

const validateEmail = (email) => {
    const regEx = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regEx.test(email);
};
let emailSubmit = document.getElementById('email-submit');

emailSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let validEmail = document.getElementById('email-form');
    let errorMessage = document.getElementById('error-message');
    const emailInput = document.getElementById('email-input').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailInput.trim() === "") {
        errorMessage.textContent = "Please provide a valid email address"
        validEmail.setAttribute("aria-invalid", "true")
        errorMessage.setAttribute("data-showup", "true")
        
        emailInput.appendChild(errorMessage);
    }
    else if (!emailInput.match(emailRegex)) {
        errorMessage.textContent = "Please provide a valid email address"
        validEmail.setAttribute("aria-invalid", "true")
    } else {
        errorMessage.textContent = ""
        validEmail.setAttribute("aria-invalid", "false")
    }
})
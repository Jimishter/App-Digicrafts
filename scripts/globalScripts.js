(function () {
      'use strict'

      const forms = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          const emailInput = form.querySelector('#email');
          const emailValue = emailInput.value;

          // Optional: You can add a custom regex pattern if desired
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!form.checkValidity() || !emailPattern.test(emailValue)) {
            event.preventDefault();
            event.stopPropagation();

            if (!emailPattern.test(emailValue)) {
              emailInput.setCustomValidity("Invalid email format");
            } else {
              emailInput.setCustomValidity("");
            }
          } else {
            emailInput.setCustomValidity("");
          }

          form.classList.add('was-validated');
        }, false)
      })
    })()
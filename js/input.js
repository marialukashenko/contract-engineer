document.addEventListener("DOMContentLoaded", function() {
    Inputmask("99.99.9999").mask("#date-of-birth");
    Inputmask("+7 (999) 999-99-99").mask("#phone-number");
  });
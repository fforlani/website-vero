// sending email
var data = {
  service_id: 'service_96kijqs',
  template_id: 'template_2ew50ac',
  user_id: '9lC9BARc7nT00q2fL',
  template_params: {}
};

function sendEmail() {
  let contactForm = $('#contactForm')[0];
  if (!contactForm.checkValidity()) {
    contactForm.classList.add('was-validated');
    return;
  }
  data.template_params = Object.fromEntries(new FormData(contactForm));
  $('#sendMailSpinner').show();
  $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    type: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json'
  }).done(function() {
    $('#sendMailSpinner').hide();
    $('#mailSuccess').show();
  }).fail(function(error) {
    $('#sendMailSpinner').hide();
    $('#mailError').show();
  });
}


function showSpinner(){
  $('#spinnerDiv').show();
}

function hideSpinner(){
  $('#spinnerDiv').hide();
}

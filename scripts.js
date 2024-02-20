$(document).ready(function() {
    $('.appointment-form-fields').submit(function(e) {
      e.preventDefault(); 
      
      var isEmpty = false;
      $(this).find('input').each(function() {
        if ($(this).val().trim() === '') {
          isEmpty = true;
          return false; 
        }
      });


      if (isEmpty) {
        alert('Please fill in all fields before submitting.');
        return;
      }


      $('#appointmentModal').modal('show');
    });
  });
$(document).ready(function() { 
  $('form').on('submit', function(e) {
    e.preventDefault();
  
    const valueInput = $('input').val();
    $('ul').append('<li>'+ valueInput +'</li>'); 

    $('#campo').val('');
    $('');

    $('ul').on('click', function() {
      $('li').toggleClass('completed');
    });
  });
  });

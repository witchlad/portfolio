$('#hamburger').on('click', function () {
  $('#list').addClass('open');
});

$( '#list a' ).on("click", function(){
  $('#list').removeClass('open');
});
$('#hamburger').on('click', function () {
  $('#list').toggleClass('open');
});

$( '#list a' ).on("click", function(){
  $('#list').removeClass('open');
});
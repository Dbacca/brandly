$(function() {
    console.log( "ready!" );
    $('.pagination__button').on('click', function () {
      console.log($(this));
      if (true) {

      }
      $(this).toggleClass('pagination__button--active')

      console.log('menu button clicked');
    })
});

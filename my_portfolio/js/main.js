$(document).ready(function(){

    $('ul a').on('click', function(e) {
        var id = $(this).attr('href'); 

         // remove 'bg-secondary' from all spans
         $('ul span').removeClass('bg-secondary');
         $(this).find('span').addClass('bg-secondary'); //highlight selected tab
    });
})
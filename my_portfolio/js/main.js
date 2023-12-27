$(document).ready(function(){

    $('ul a').on('click', function(e) {
        var id = $(this).attr('href'); 
        
        // hide everything
        $('main .tabs').each(function(){
            $(this).addClass('hidden')
        })

         // remove 'bg-secondary' from all spans
         $('ul span').removeClass('bg-secondary');
         // open the selected tab
         $(id).removeClass('hidden');
         console.log(id)
         $(this).find('span').addClass('bg-secondary'); //highlight selected tab
    });
})
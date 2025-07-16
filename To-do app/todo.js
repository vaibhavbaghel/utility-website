
$(document).ready(function(){

    $('#input').change(function(){

        var input = $(this).val();
        $('ul').append('<li>' + input + '<i class="fa-regular fa-circle-check"></i> <i class="fa-regular fa-trash-can"></i> </li>');
        $(this).val("");

        $('ul').on('click','.fa-circle-check', function(){
            $(this).parent('li').toggleClass('done');
        }) 

        $('ul').on('click','.fa-trash-can', function(){
            $(this).parent('li').fadeOut(200);
        })

    });

});

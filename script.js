$(document).ready(function(){
    $('input').focus();
    $('input').on("keyup",function(e){
        var value = $('input').val()
        if(e.keyCode === 13 ){
            $('input').after('<div class="tasks">' + value + '<div class="icons"><i class="fa fa-check" aria-hidden="true"></i> <i class="fa fa-trash" aria-hidden="true"></i></div> </div>')
            $('input').val('')
        }
    })


    $('body').on('click','.fa-check',function(){
        $(this).parents(".tasks").toggleClass('check')
    })

    $('body').on('click','.fa-trash',function(){
        $(this).parents(".tasks").fadeOut(300)
    })
})

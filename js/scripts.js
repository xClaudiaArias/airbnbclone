$(".nav-item").on('click', function(e){
    $(".nav-item").removeClass("active")
    $(e.target).addClass("active")
})
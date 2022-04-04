$(".nav-item").on('click', function(e){
    $(".nav-item").removeClass("active")
    $(e.target).addClass("active")
})

$(".getaways-links").on('click', function(e){
    $(".getaways-links").removeClass("active-link")
    $(e.target).addClass("active-link")
})
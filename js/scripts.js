$(".nav-item").on('click', function(e){
    $(".nav-item").removeClass("active")
    $(e.target).addClass("active")
})

$(".getaway-container").hide()

$(".getaways-links").on('click', function(e){
    $(".getaways-links").removeClass("active-link")
    $(e.target).addClass("active-link")
})


$(".getaways-links").on('click', function(e){
    let id = $(this).attr('id');

    switch (id){
        case "outdo":
            console.log("jjjjjjjj")
            $(".getaway-container").hide()
            $(".arts-culture").hide()
            $(".outdoor").show()
            break;
        case "mountcab":
            $(".getaway-container").hide()
            $(".arts-culture").hide()
            $(".cabins").show()
            break;
        case "bdest":
            $(".getaway-container").hide()
            $(".arts-culture").hide()
            $(".beach-destinations").show()
            break;
        case "popdest":
            $(".getaway-container").hide()
            $(".arts-culture").hide()
            $(".popular-destinations").show()
            break;
        case "unstays":
            $(".getaway-container").hide()
            $(".arts-culture").hide()
            $(".unique-stays").show()
            break;
        default:
            console.log("error")
            $(".getaway-container").hide()
            $(".arts-culture").show()
    }
})
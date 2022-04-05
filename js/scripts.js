$("form").hide()

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

$(document).scroll(function(){
    if($(this).scrollTop() > 100) {   
        console.log("WAAAAAHHHHH")
        $("#nav-container").css("background-color", "white");
        $("#main-nav").css("background-color", "white");
        $("#logo").css("color", "#FE395C");
        $("#logo-img").attr("src", "./images/logo-pink.svg");
        $("#globe-icon").attr("src", "./images/globe-icon-black.svg");
        $("#nav-right-list").children().css("color", "#222222");

    } else {
        console.log("BOOOOOO")
        $("#main-nav").css("background-color", "black");
        $("#logo").css("color", "white");
        $("#logo-img").attr("src", "./images/logo-white.svg");
        $("#globe-icon").attr("src", "./images/globe-icon.svg");
        $("#nav-container").css("background-color", "black");
        $("#main-nav").css("background-color", "black");
        $("#nav-right-list").children().css("color", "white");
    }

    if($(this).scrollTop() > 200) {   
        $("#second-nav").css("transform", "scale(0.5, 0.5) translate(0, -100px)")
        $("#ul-navs").css("transform", "scale(0.5, 0.5) translate(0, -50px)")
        $("#second-nav").css("transition", "transform 330ms ease-in-out")
        $("#ul-navs").css("transition", "transform 330ms ease-in-out")
        let hideNav = setTimeout(function() { 
            $("#second-nav").hide()
            $("#ul-navs").hide()
            $("form").show()
            clearTimeout(hideNav)
        }, 200);
    } else {
        $("#second-nav").css("transform", "scale(1) translate(0, 0)")
        $("#second-nav").css("transition", "transform 330ms ease-in-out")
        $("#ul-navs").css("transform", "scale(1) translate(0, 0)")
        $("#ul-navs").css("transition", "transform 330ms ease-out")
        let showNav = setTimeout(function() { 
            $("#second-nav").show()
            $("#ul-navs").show()
            $("form").hide()
            clearTimeout(showNav)
        }, 200);
    }
});

$(document).ready(function () {
    $("#commerce-slider").cycle("shuffle");

    $("#login").click(function(){
        $(".login-toggle").fadeToggle(1000);
        $(".body1").css("filter", "brightness(40%)");
        $(".body1").css("background-color", "lightgray");
    })

    $(".btn-form-close").click(function(){
        $(".login-toggle").fadeToggle(1000);
        $(".body1").css("filter", "brightness(100%)");
        $(".body1").css("background-color", "white");
    })

}) 


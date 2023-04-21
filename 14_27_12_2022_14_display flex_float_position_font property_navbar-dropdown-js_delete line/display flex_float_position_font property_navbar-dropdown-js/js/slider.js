$(document).ready(function(){
    $(".impact-slider").cycle("fade");
})

$(document).ready(function () {

    $(".symbol-btn").click(function () {
        $(".video").slideToggle(500);

    })
})
$(document).ready(function () {

    $(".impact-team").hover(function () {
        $(".impact-team-all").slideToggle(300);
    })
})
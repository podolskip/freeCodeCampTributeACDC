

/*SCROLL*/
$(window).scroll(function () {
    var topPosition = $(window).scrollTop();

    if (topPosition > 0 ){
        $(".menuText").fadeOut("slow",function () {
            $(".menuText").hide();
        });
        //$(".menuText").delay(3000).addClass("d-none");
        console.log("Opacity 0");

    } else {
        $(".menuText").fadeIn("slow").show();

        console.log("Opacity 1");
        //$(".menuText").addClass("d-inline-block");
    }

});
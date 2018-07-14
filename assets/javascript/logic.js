$(document).ready(function()    {

    $("#name-head").animate({opacity: "1", marginTop: "+=200px"}, 3000);

    $(".footer").animate({opacity: "1", marginTop: "-=75px"}, 4000);

    $("#name-head").on("click", function()  {
        animate({marginLeft: "-200px"}, 1000);
    });

});

  
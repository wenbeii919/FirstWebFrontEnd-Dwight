$(document).ready(function() {
    $("#b1").hover(function() {
        $("#b1").css("background-color", "yellowgreen");
    },
    function() {
        $(this).css("background-color", "black");
    });

    $("#b2").hover(function() {
        $("#b2").css("background-color", "yellowgreen");
    },
    function() {
        $(this).css("background-color", "black");
    });

    $("#b3").hover(function() {
        $("#b3").css("background-color", "yellowgreen");
    },
    function() {
        $(this).css("background-color", "black");
    });

    $("#b4").hover(function() {
        $("#b4").css("background-color", "yellowgreen");
    },
    function() {
        $(this).css("background-color", "black");
    });

    $("#b1").click(function() {
        $("#dm-salesman").css("color", "white");
    });

    $("#b2").click(function() {
        $("#staples").css("color", "white");
    });

    $("#b3").click(function() {
        $("#dm-acting-manager").css("color", "white");
    });

    $("#b4").click(function() {
        $("#dm-manager").css("color", "white");
    });
});
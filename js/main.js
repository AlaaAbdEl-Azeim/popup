$(document).ready(function () {
    $('#modal').on("click", function () {
        fadeout();
    });
    $('.images img').on("click", function () {
        var source =$(this).get(0).src;
        $("#modal").fadeIn(function () {
           
            $("#popup").fadeIn();
            $('#btn_exit').fadeIn();
            $("#popup").css("background", "url(" + source + ")");
        })
    });
    $('#btn_exit').on("click", function () {
        fadeout();
    })
});
function fadeout() {
    $('#btn_exit').fadeOut();
    $("#popup").fadeOut(function () {
        $("#modal").fadeOut();
    })
}
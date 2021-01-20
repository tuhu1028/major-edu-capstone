$(document).ready(function() {
    var stt = 0;
    startImg = $("img.image-slide:first").attr("stt");
    endImg = $("img.image-slide:last").attr("stt");

    $("img.image-slide").each(function() {
        if ($(this).is(':visible'))
            stt = $(this).attr("stt");
    });
    $("#next").click(function() {
        if (stt == endImg) {
            stt = -1;
        }
        next = ++stt;
        $("img.image-slide").hide();
        $("img.image-slide").eq(next).show();
    });
    $("#previous").click(function() {
        if (stt == 0) {
            stt = endImg;
            previous = stt++;
        }
        previous = --stt;
        $("img.image-slide").hide();
        $("img.image-slide").eq(previous).show();
    });

    setInterval(function() {
        $("#next").click();
    }, 2500);
});
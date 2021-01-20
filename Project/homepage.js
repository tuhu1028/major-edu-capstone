function myFunction() {
    document.getElementById("view-more-profile-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.view-more-profile-dropbtn')) {
        var dropdowns = document.getElementsByClassName("view-more-profile-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



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

    // setInterval(function() {
    //     $("#next").click();
    // }, 2500);
});
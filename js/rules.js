$(function () {
    $("input").click(function () {
        if ($(this)[0].checked) {
            $("button").attr("disabled", false)
        } else {
            $("button").attr("disabled", true)
        }
    });
    $("button").click(function () {
        location.href = 'start.html';
    });
})
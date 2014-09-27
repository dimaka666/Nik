$(document).ready(function () {
    $("#nav li").click(
        function () {
            $(".page:visible").hide();
            $(this).addClass('active')
            $("#" + $(this).attr('id') + "Content").slideDown();
    })
});
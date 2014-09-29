$(document).ready(function () {
    $("#nav li").click(
        function () {           
            $(".page:visible").hide();
            var img = $('#nav img');
            $('#nav img').remove();
            window.location.hash = $(this).attr('id')
            $(this).append(img);
            $("#" + $(this).attr('id') + "Content").slideDown();
    })
});
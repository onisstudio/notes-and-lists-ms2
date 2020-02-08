$(function () { //shorthand document.ready function
    /* sidebar toggle */
    $("#sidebar-toggle").click(function (e) {
        e.preventDefault();
        $("#content-section").toggleClass("toggled");
    });

    $('#new-note').on('submit', function (e) { //use on if jQuery 1.7+
        e.preventDefault(); //prevent form from submitting
        app.enterData();
        $('#newNoteModal').modal('hide');
    });

    $("#submitForm").on('click', function () {
        $("#new-note").submit();
    });
});
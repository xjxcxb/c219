$(document).ready(function () {
    // Toggle menu visibility when clicking the menu icon
    $(".menu-icon").click(function () {
        $(".menu").slideToggle();
    });

    // Hide menu when a menu item is clicked
    $(".menu li a").click(function () {
        $(".menu").slideUp();
    });

    // Adjust menu display on window resize
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $(".menu").removeAttr("style");
        }
    });
});

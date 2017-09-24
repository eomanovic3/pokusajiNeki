﻿// The rel attribute is the userID you would want to follow

$('button.followButton').live('click', function (e) {
    e.preventDefault();
    $button = $(this);
    if ($button.hasClass('following')) {

        //$.ajax(); Do Unfollow

        $button.removeClass('following');
        $button.removeClass('unfollow');
        $button.text('Follow');
    } else {

        // $.ajax(); Do Follow

        $button.addClass('following');
        $button.text('Following');
    }
});





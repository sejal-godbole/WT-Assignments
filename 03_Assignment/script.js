$(document).ready(function () {
    // Apply CSS3 selectors with jQuery
    $("input:focus").css("border", "2px solid #ff5e62");

    // When user focuses on input fields, change background color
    $(".input-field").focus(function () {
        $(this).css("background-color", "#ffe6e6");
    }).blur(function () {
        $(this).css("background-color", "white");
    });

    // Validate form submission
    $("#registrationForm").submit(function (event) {
        event.preventDefault();

        let username = $("#username").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val().trim();

        if (username === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        // Email validation using regex
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Enter a valid email!");
            return;
        }

        alert("Registration Successful!");
        $("#registrationForm")[0].reset(); // Reset form fields
    });

    // Button hover effect with jQuery
    $("#submitBtn").hover(function () {
        $(this).css("background", "#ff9966");
    }, function () {
        $(this).css("background", "#ff5e62");
    });
});

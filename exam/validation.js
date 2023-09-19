function validateForm() {
    var name = document.forms["feedbackForm"]["name"].value;
    var email = document.forms["feedbackForm"]["email"].value;
    var comments = document.forms["feedbackForm"]["comments"].value;
    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    var errorMessage = "";

    if (name == "") {
        errorMessage += "Name must be filled out.\n";
    }

    if (email == "") {
        errorMessage += "Email must be filled out.\n";
    } else if (!emailPattern.test(email)) {
        errorMessage += "Invalid email address.\n";
    }

    if (comments == "") {
        errorMessage += "Comments must be filled out.\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false; // Prevent form submission
    }

    // Form is valid, proceed with submission
    return true;
}

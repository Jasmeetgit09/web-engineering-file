function submit() {
    const name = document.forms["RegForm"]["Name"];
    const email = document.forms["RegForm"]["Email"];
    const phone = document.forms["RegForm"]["Telephone"];
    const password = document.forms["RegForm"]["Password"];
    const address = document.forms["RegForm"]["Address"];
  
    if (name.value == "") {
      window.alert("Please enter your name.");
      name.focus();
      return false;
    }
  
    if (address.value == "") {
      window.alert("Please enter your address.");
      address.focus();
      return false;
    }
  
    if (email.value == "") {
      window.alert("Please enter a valid e-mail address.");
      email.focus();
      return false;
    }
  
    if (phone.length == 10) {
      window.alert("Telephone number should be 10 digits long.");
      phone.focus();
      return false;
    }
  
    if (password.length >= 8) {
      window.alert("Your password should be at least 8 characters long.");
      password.focus();
      return false;
    }
  
    return true;
  }
function checkLoto() {
  var first_name, notice_first_name;

  // Get the value of the input field with id="first_name"
  first_name = document.getElementById("first_name").value;

  // If first_name is empty or undefined
  if (first_name == "" || first_name == undefined ) {
    notice_first_name = "Renseigne ton Prénom";
    document.getElementById("notice_first_name").innerHTML = notice_first_name;
  }

  ////////////////////////////////////////////////////////////////////////////

  var last_name, notice_last_name;

  // Get the value of the input field with id="last_name"
  last_name = document.getElementById("last_name").value;

  // If last_name is empty or undefined
  if (last_name == "" || last_name == undefined ) {
    notice_last_name = "Renseigne ton Nom";
    document.getElementById("notice_last_name").innerHTML = notice_last_name;
  }

  ////////////////////////////////////////////////////////////////////////////

  var email, notice_email, notice_length_email, notice_syntax_email;

  // Get the value of the input field with id="email"
  email = document.getElementById("email").value;
  // Check the email syntax
  var reg_syntax_email = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,3}$/;
  var resultat = reg_syntax_email.test(email);

  // If email is empty or undefined
  if (email == "" || email == undefined ) {
    notice_email = "Renseigne ton Email";
    document.getElementById("notice_email").innerHTML = notice_email;
  }
  // If email length is ok
  else if (email.length < 8 || email.length >= 30) {
    notice_length_email = "L'email doit contenir entre 8 et 30 caractères";
    document.getElementById("notice_length_email").innerHTML = notice_length_email;
  }
  else {
  }
  // If email syntax is compliant
  if (resultat == false ) {
    notice_syntax_email = "Pour être valide, l'email doit contenir: un '@', un '.' et SMOURF ";
    document.getElementById("notice_syntax_email").innerHTML = notice_syntax_email;
  }

  ////////////////////////////////////////////////////////////////////////////

  var num1, num2, num3, num4, num5, num6;

  // Get the value of the numbers input fields
  num1 = document.getElementById("number1").value;
  num2 = document.getElementById("number2").value;
  num3 = document.getElementById("number3").value;
  num4 = document.getElementById("number4").value;
  num5 = document.getElementById("number5").value;
  num6 = document.getElementById("number6").value;

  // If nums are empty or undefined
  if ((num1 == "" || num1 == undefined) || (num2 == "" || num2 == undefined) || (num3 == "" || num3 == undefined) || (num4 == "" || num4 == undefined) || (num5 == "" || num5 == undefined) || (num6 == "" || num6 == undefined) ) {
    notice_number = "Il faut que tous les numéros soient renseignés pour gagner coco !";
    document.getElementById("notice_number").innerHTML = notice_number;
  }


  ////////////////////////////////////////////////////////////////////////////

    // min = Math.ceil(1);
    // max = Math.floor(50);
    // ALEATOIRE
    // Math.round(Math.random() * (max - min) + min);

    var randomInt1 = 5;
    var randomInt2 = 18;
    var randomInt3 = 23;
    var randomInt4 = 15;
    var randomInt5 = 36;
    var randomInt6 = 43;

    var check1, check2, check3, check4, check5, check6;
    if (num1 == randomInt1 && num2 == randomInt2 && num3 == randomInt3 && num4 == randomInt4 && num5 == randomInt5 && num6 == randomInt6 ) {
      congrats = "T'as gagné KEDAL vu que t'as donné KEDAL";
      document.getElementById("congrats").innerHTML = congrats;
    }
    else {
      loser = "T'as gagné KEDAL !!! "
      document.getElementById("congrats").innerHTML = congrats;
    }
}

/* TODO
    
    Visa hur starkt lösenordet är 1-4
    <meter>
    https://css-tricks.com/password-strength-meter/

    Skicka informationen med submit till objekt i JS.

    logik för kontrollera ifall input.value innehåller olika typer av tecken
    
    if(input.value innehåller regex)
  
        onkeyup som eventlistner kollar 
        input.value.match(regEx)
        input.value.length > 8 t.ex.
        skriv ut i DOM strong, medium, weak

    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_password_val

    
*/

const passwordInput = document.querySelector("#passwordInput");

passwordInput.addEventListener("keyup", () => {
  if (passwordInput.value.length < 5) {
    strMeter.value = 0;
  } else {
    const strMeter = document.querySelector("#strMeter");

    const regExSmall = /[a-z]/g;
    const regExLarge = /[A-Z]/g;
    const regExNum = /[0-9]/g;
    const regExSpec =
      /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g;

    const lowercase = passwordInput.value.match(regExSmall);
    const uppercase = passwordInput.value.match(regExLarge);
    const number = passwordInput.value.match(regExNum);
    const specialChar = passwordInput.value.match(regExSpec);

    // 1 char type match
    if (lowercase || uppercase || number || specialChar) {
      strMeter.value = 20;
    }
    // 2 char type match
    if (
      (lowercase && uppercase) ||
      (lowercase && number) ||
      (lowercase && specialChar) ||
      (uppercase && number) ||
      (uppercase && specialChar) ||
      (number && specialChar)
    ) {
      strMeter.value = 40;
    }
    // All char type match
    if (lowercase && uppercase && number && specialChar) {
      strMeter.value = 80;
    }
  }
});

document.querySelector("#submitBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const qs = document.querySelector.bind(document);

  const user = {
    Name: qs("#name").value,
    Username: qs("#userNameId").value,
    email: qs("#email").value,
    password: qs("#passwordInput").value,
  };
  return user.Name && user.Username && user.email && user.password ? console.log(user) : console.log('There are empty fields');
  
});

document.querySelector("#loginBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const qs = document.querySelector.bind(document);
  const userCredentials = {
    username: qs("#usrLogin").value,
    password: qs("#usrPsw").value,
  };
  return userCredentials.username && userCredentials.password ? console.log(userCredentials) : console.log('There are empty fields');
});

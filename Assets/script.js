// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate Password Questions Section

function generatePassword () {

  var passLength = window.prompt ("How many characters would you like to have in your password ?, Password should be between 8 and 128 characters" )

      if (passLength > 7 && passLength < 129) {

          var Passlow = confirm ("Would you like to have lowercase letters in your password? - Ok = YES , Cancel = NO");
          var PassUp = confirm ("Would you like to have uppercase letters in your password? - Ok = YES , Cancel = NO");
          var PassNum = confirm ("Would you like to have numbers letters in your password? - Ok = YES , Cancel = NO");
          var PassCha = confirm ("Would you like to have special characters in your password? - Ok = YES , Cancel = NO");

          //Arrays

          var Lowcase = "abcdefghijklmnopqrstuvwxyz";
          var Upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          var Numbers = "1234567890";
          var Specialcha = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";



          var passString = "";
          var Password1 = "";

      

          console.log(generatePassword)

    
          // Verify user selection
            
          if (Passlow === false && PassUp === false && PassNum === false && PassCha === false) {

              return Password1 = " You must select one of the options to generate a password"

          }
        
          for (i = 0; i < passLength; i++) {

            if (Passlow === true) {

              passString += Lowcase.charAt(Math.floor(Math.random() * 10));
            } if (PassUp === true) {

              passString += Upcase.charAt(Math.floor(Math.random() * 10));
            }if (PassNum === true) {

              passString += Numbers.charAt(Math.floor(Math.random() * 10));
            }if (PassCha === true) {

              passString += Specialcha.charAt(Math.floor(Math.random() * 10));
            }

          }

          for (i = 0; i < passLength; i++) {

            Password1 += passString.charAt(Math.floor(Math.random() * passString.length))

          }

          return Password1

        } else {

          return Password1 = "The password must be between 8 and 128 characters"

        }

    }




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


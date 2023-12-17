// Get the string from the document
// controller function
function getValue()
{

  document.getElementById("alert").classList.add("invisible");

  let userString = document.getElementById("userString").value;

  let revString = reverseString(userString);

  displayString(revString);

}


// Reverse it
// logic function
function reverseString(userString)
{

  let revString = [];

  // reverse a string using a for-loop
  for (let i = userString.length-1; i >= 0; i--) {
    
    revString += userString[i];
    
  }

  return revString;

}


// Return the reversed string to the user in results
// view function
function displayString(revString)
{
  // Write to the page
  document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

  // Show the alert box
  document.getElementById("alert").classList.remove("invisible");

}
const form = document.getElementById("myform");
const table = document.getElementById("datatable");
console.log(table);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );
   console.log(fname,lname,address,pincode,state,country);
  if (foodChoices.length < 3) {
    alert("Please choose at least 3 food options.");
    return;
  }
 
  const newRow = table.insertRow(); 
  const fnameCol = newRow.insertCell(); 
  const lnameCol = newRow.insertCell();
  const addressCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell();
  const genderCol = newRow.insertCell(); 
  const foodCol = newRow.insertCell(); 
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();


  fnameCol.textContent = fname;
  lnameCol.textContent = lname;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent = state;
  countryCol.textContent = country;

  form.reset();
});

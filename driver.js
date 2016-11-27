// Create a customer object
function driver(name, phone, email, contact, customerlist) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.contact = contact;
  this.customerlist = customerlist;
}

// Step through the list of customers and display info on each.
function listCustomers(drvr) {
  var customers = drvr.customerlist;
  for (i = 0; i < customers.length; i++) {
    customers[i].getaddress();
  }
}


// From an array of properties, create a customer
function newDriver(arr) {
  return new driver(arr[0], arr[1], arr[2], arr[3], []);
}

// From an array of arrays of properties, create a customer and put them on the list customers
function CustomersfromLines(lines) {
  for (var i = 0; i < lines.length; i++) {
    var cust = makeCustomer(lines[i]);
    customers.push(cust);
  }
}


function CustomerListToTable(drvr) {
  var customers = drvr.customerlist;
  var table="<tr><th>Name</th><th>Address</th><th>Town</th><th>Zip</th><th>Phone</th><th>Email</th><th>Bool</th>";

  for (i = 0; i <customers.length; i++) { 
    table += "<tr><td>" +
    customers[i].name +
    "</td><td>" +
    customers[i].address +
    "</td><td>" +
    customers[i].city +
    "</td><td>" +
    customers[i].zipcode +
    "</td><td>" +
    customers[i].phone +
    "</td><td>" +
    customers[i].email +
    "</td><td>" +
    customers[i].contact +
    "</td></tr>";

  }

  document.getElementById("CustomerTable").innerHTML = table;
}
function VerifyDriver() {
//  var input = document.getElementsByTagName("form");
  var drvr = new driver(document.getElementById("name"), document.getElementById("phone"), document.getElementById("email"), document.getElementById("bool"), []);
  //customers.push(c);
  alert("New Driver Created");
}

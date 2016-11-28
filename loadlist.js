var customers = [];
// Create an array to store the customers
function LoadCustomerList()  {
  GiveMeTheWorks();
}
function GiveMeTheWorks() {
  //var customers = [];
  
  CustomersfromLines(RochesterCustomers, customers);
  alert("List has " + customers.length + " customers");

  CustomersToTable(customers);

}
// Create a customer object
function customer(name, address, city, zipcode, phone, email, contact, latitude,longitude) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.zipcode = zipcode;
  this.phone = phone;
  this.email = email;
  this.contact = contact;
  this.latitude = latitude;
  this.longitude = longitude;
  this.marker = null;
  // create an easy way to display info for debugging
  this.getaddress = function getaddress() {
    alert("Customer lives at " + address + ", " + city + ", " + zipcode);
  };
}

// Step through the list of customers and display info on each.
function listCustomers(customers) {
  for (i = 0; i < customers.length; i++) {
    customers[i].getaddress();
  }
}


// From an array of properties, create a customer
function makeCustomer(arr) {
  return new customer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7],arr[8]);
}

// From an array of arrays of properties, create a customer and put them on the list customers
function CustomersfromLines(lines, customers) {
  for (var i = 0; i < lines.length; i++) {
    var cust = makeCustomer(lines[i]);
    customers.push(cust);
  }
}


function CustomersToTable(customers) {
  var table="<tr><th>Name</th><th>Address</th><th>Town</th><th>Zip</th><th>Phone</th><th>Email</th><th>Contact by Email</th><th>Latitude</th><th>Longitude</th>";

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
    "</td><td>" +
    customers[i].latitude +
    "</td><td>" +
    customers[i].longitude +
    "</td></tr>";

  }

  document.getElementById("route_table").innerHTML = table;
}
function Verify() {
//  var input = document.getElementsByTagName("form");
var c = customer(document.getElementById("name"), document.getElementById("address"), document.getElementById("city"), document.getElementById("zipcode"), document.getElementById("phone"), document.getElementById("email"), document.getElementById("bool"));
customers.push(c);
alert("I did a thing!");
}

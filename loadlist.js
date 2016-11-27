
// Create an array to store the customers
var customers = [];
alert("Made an empty array");

// Create a customer object
function customer(name, address, city, zipcode, phone, email, contact) {
  this.name = name;
  this.address = address;
  this.city = city;
  this.zipcode = zipcode;
  this.phone = phone;
  this.email = email;
  this.contact = contact;
  // create an easy way to display info for debugging
  this.getaddress = function getaddress() {
    alert("Customer lives at " + address + ", " + city + ", " + zipcode);
  };
}
alert("Created object customer");

// Test adding new customers to customers list
var customer1 = new customer('me', '26 Brent Road', "Lexington", '02420', '781-555-1212', 'a@b.com', false);
customers.push(customer1);
var customer2 = new customer('you', '62 Brent Road', "Lexington", '02420', '781-555-1212', 'a@b.com', false);
customers.push(customer2);

// Step through the list of customers and display info on each.
function listCustomers() {
  for (i = 0; i < customers.length; i++) {
    customers[i].getaddress();
  }
}
// See if the push worked.
alert("List has " + customers.length + " customers");
//listCustomers();

// From an array of properties, create a customer
function makeCustomer(arr) {
  return new customer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);
}

// From an array of arrays of properties, create a customer and put them on the list customers
function CustomersfromLines(lines) {
  for (var i = 0; i < lines.length; i++) {
    var cust = makeCustomer(lines[i]);
    customers.push(cust);
  }
}

// Test data of an array of arrays
var data = [
  ["Angelo Michelangelo", "116 Hamilton Street", "Rochester", "14620", "585-555-1212", 0, 1],
  ["Kevin da Vinci", "47 Alexander Street", "Rochester", "14620", "585-555-1212", 0, 0],
  ["Gabriel Raphael","22 Cayuga Street","Rochester","14620","585-555-1212",0,0],
  ["Sandra Botticelli","20 Bloomfield Place","Rochester","14620","585-555-1212",0,1],
  ["Titus Titian","169 Sanford St","Rochester","14620","585-555-1212",0,1],
  ["Donald Donatello","82 Cypress Street","Rochester","14620","585-555-1212",0,0],
  ["Maura Masaccio","35 Parkwood Avenue","Rochester","14620","585-555-1212",0,1],
  ["Phil Brunelleschi","97 Danbury Circle North","Rochester, NY","14618","585-555-1212",0,0],
  ["Gina Giotto","248 Barclay Square Drive","Rochester","14618","585-555-1212",0,1],
  ["George Vasari","96 Schilling Lane","Rochester","14618","585-555-1212",0,0],
  ["Lauren Ghiberti","67 Furman Crescent","Rochester","14620","585-555-1212",0,1],
  ["Jim Giorgione","86 Southview Terrace","Rochester","14620","585-555-1212",0,0],
  ["Frances Angelico","551 Southwood Drive","Rochester","14620","585-555-1212",0,0],
  ["Vanessa  Bellini","585 Bending Bough Drive","Webster","14580","585-555-1212",0,1],
  ["Paul Uccello","671 Shadow Wood Lane","Webster","14580","585-555-1212",0,0],
  ["Phyllis Lippo","1115 Shoemaker Road","Webster","14580","585-555-1212",0,0],
  ["Don Bramatte","1197 Appian Drive","Webster","14580","585-555-1212",0,1],
  ["Paula Veronesa","1127 Wall Road","Webster","14580","585-555-1212",0,0],
  ["Caroline Caravaggio","939 Joylene Drive","Webster","14580","585-555-1212",0,1],
  ["Andrea del Sarto","951 Copper Kettle Road","Webster","14580","585-555-1212",0,1],
  ["Sonny Anguissola","698 Shanlee Drive","Webster","14580","585-555-1212",0,0],
  ["Tony del Pollaiuolo","612 Shady Glen Circle","Webster","14580","585-555-1212",0,1],
  ["Reggie Correggio","459 Heathland Circle","Webster","14580","585-555-1212",0,0],
  ["Ben Gozzoli","520 Robindale Drive","Webster","14580","585-555-1212",0,1]

]

CustomersfromLines(data);

// See if it worked
alert("List has " + customers.length + " customers");
//listCustomers();


function CustomersToTable() {
  
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
function Verify() {
//  var input = document.getElementsByTagName("form");
  var c = customer(document.getElementById("name"), document.getElementById("address"), document.getElementById("city"), document.getElementById("zipcode"), document.getElementById("phone"), document.getElementById("email"), document.getElementById("bool"));
  customers.push(c);
  alert("I did a thing!");
  //Hey future me, this next section of code reads in an XML and makes customer stuff out of it
function loadDoc() {
  var xhttp = new XMLHttpRequest();
//  xhttp.onload = reqListener;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "street_address.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var CL = new Array();
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Name</th><th>Address</th><th>Town</th><th>Zip</th><th>Phone</th><th>Email</th><th>Bool</th>";
  var x = xmlDoc.getElementsByTagName("Row");
  for (i = 1; i <x.length; i++) { 
    var row = new Array();
    row[0]= x[i].childNodes[0].childNodes[0].nodeValue;
    row[1]= x[i].childNodes[1].childNodes[0].nodeValue;
    row[2]= x[i].childNodes[2].childNodes[0].nodeValue;
    row[3]= x[i].childNodes[3].childNodes[0].nodeValue;
    row[4]= x[i].childNodes[4].childNodes[0].nodeValue;
    row[5]= x[i].childNodes[5].childNodes[0].nodeValue;
    row[6]= x[i].childNodes[6].childNodes[0].nodeValue;
    CL[i]=makeCustomer(row);
  }
  document.getElementById("CustomerTable2").innerHTML = table;
//  TODO make something to add it to the rest of the data
}
}

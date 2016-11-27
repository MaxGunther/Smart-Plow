
// Create an array to store the customers
function LoadCustomerList()  {
  GiveMeTheWorks();
}
function GiveMeTheWorks() {
  var customers = [];
  alert("Made an empty array");
  // Test adding new customers to customers list
  var customer1 = new customer('Jan Gunther', '26 Brent Road', "Lexington", '02420', '781-555-1212', 'a@b.com', false);
  customers.push(customer1);
  var customer2 = new customer('Max Gunther', '62 Brent Road', "Lexington", '02420', '781-555-1212', 'a@b.com', false);
  customers.push(customer2);
  // See if the push worked.
  alert("List has " + customers.length + " customers");
  //listCustomers(customers);
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
  CustomersfromLines(data, customers);
    alert("List has " + customers.length + " customers");

  CustomersToTable(customers);

}
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

// Step through the list of customers and display info on each.
function listCustomers(customers) {
  for (i = 0; i < customers.length; i++) {
    customers[i].getaddress();
  }
}


// From an array of properties, create a customer
function makeCustomer(arr) {
  return new customer(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);
}

// From an array of arrays of properties, create a customer and put them on the list customers
function CustomersfromLines(lines, customers) {
  for (var i = 0; i < lines.length; i++) {
    var cust = makeCustomer(lines[i]);
    customers.push(cust);
  }
}


function CustomersToTable(customers) {
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

  document.getElementById("route_table").innerHTML = table;
}
function Verify() {
//  var input = document.getElementsByTagName("form");
  var c = customer(document.getElementById("name"), document.getElementById("address"), document.getElementById("city"), document.getElementById("zipcode"), document.getElementById("phone"), document.getElementById("email"), document.getElementById("bool"));
  customers.push(c);
  alert("I did a thing!");
}

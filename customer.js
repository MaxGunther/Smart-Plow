
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
  ["Kevin da Vinci", "47 Alexander Street", "Rochester", "14620", "585-555-1212", 0, 0]
]

CustomersfromLines(data);

// See if it worked
alert("List has " + customers.length + " customers");
//listCustomers();

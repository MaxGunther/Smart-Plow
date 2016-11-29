//var pointsOfInterest = [[43.157775,-77.604732],[43.146934,-77.600060],[43.144891,-77.601090]];
var RochesterCustomerList = [];
var WebsterCustomerList = [];

//initiate two lists of sample customer data
CustomersfromLines(RochesterCustomers, RochesterCustomerList);
CustomersfromLines(WebsterCustomers, WebsterCustomerList);

//arbitrarily choose Rochester customers to display
var customersToDisplay = RochesterCustomerList;

//Find the latitude of a customer object or assume a paired list of lat, lng and return the lat.
function findLatitude (object) {
  if (object instanceof customer) {
    return object.latitude;
  } else {
    return object[0];
  }
}

//Find the latitude of a customer object or assume a paired list of lat, lng and return the lng.
function findLongitude (object) {
  if (object instanceof customer) {
    return object.longitude;
  } else {
    return object[1];
  }
}

//Finds a center point of an array of points or an array of customers
function centerPoint(points) {
  var count = 0.0;
  var sumlat = 0;
  var sumlng = 0;
  for (var i = 0; i < points.length; i++) {
    var x = points[i];
    var lat = findLatitude(x);
    var lng = findLongitude(x);
    count ++;
    sumlat = sumlat + lat;
    sumlng = sumlng + lng;
  };
  return ([sumlat/count, sumlng/count]);
}

//Make a marker for each customer on the customerList but don't display it yet
function makeMarkers(customerList) {
  //var markerList = [];
  for (var i = 0; i < customerList.length; i++) {
    if (customerList.marker == null) {
      var lat = findLatitude(customerList[i]);
      var lng = findLongitude(customerList[i]);
      var point = {lat: lat, lng: lng};
      var marker = new google.maps.Marker({
            position: point,
            title: customerList[i].address
        });
      //markerList.push(marker);
      customerList[i].marker = marker;
    }
  }
  //return markerList;
}

//Display the list of customer markers on a map - iterate through the customers and setMap for each marker
//use map = null to remove markers
function displayCustomerMarkersOnMap(customerlist, map) {
  setMapOnAll(customerlist,map);
  /*
  for (var i = 0; i < customerlist.length; i++) {
    var marker = customerlist[i].marker;
    marker.setMap(map);
  }
  */
}

// Sets the map on all markers in the array.
function setMapOnAll(List, map) {
  for (var i = 0; i < List.length; i++) {
    var marker;
    if (List[i] instanceof customer) {
      marker = List[i].marker;
    } else {
        marker = List[i];
    }
    marker.setMap(map);
  }}



function swapCustomerArea1 () {
  if (customersToDisplay === RochesterCustomerList) {
    customersToDisplay = WebsterCustomerList;
  } else {
    customersToDisplay = RochesterCustomerList;
  }
  addMarkstoMap(customersToDisplay);
  initMap();
}


function swapCustomerArea () {
  if (customersToDisplay === RochesterCustomerList) {
    customersToDisplay = WebsterCustomerList;
    displayCustomerMarkersOnMap(RochesterCustomerList,null);
    displayCustomerMarkersOnMap(WebsterCustomerList,map);
  } else {
    customersToDisplay = RochesterCustomerList;
    displayCustomerMarkersOnMap(WebsterCustomerList,null);
    displayCustomerMarkersOnMap(RochesterCustomerList,map);
  }
  //initMap();
}

//Keep track of map, so we don't have to keep creating new ones.
var map;
function initMap() {
  var customerList = customersToDisplay;
  var centerPt = centerPoint(customerList);
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: centerPt[0], lng: centerPt[1]}
  });
  /*
  for (var i = 0; i < customerList.length; i++) {
    var lat = findLatitude(customerList[i]);
    var lng = findLongitude(customerList[i]);
    var point = {lat: lat, lng: lng};
    new google.maps.Marker({
      position: point,
      map: map,
      title: customerList[i].address
    });
  }
  */
  makeMarkers(customersToDisplay);
  displayCustomerMarkersOnMap(customersToDisplay, map);
}

function addMarkstoMap() {
  makeMarkers(customersToDisplay);
  displayCustomerMarkersOnMap(customersToDisplay, map);
}
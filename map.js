//var pointsOfInterest = [[43.157775,-77.604732],[43.146934,-77.600060],[43.144891,-77.601090]];
var RochesterCustomerList = [];
var WebsterCustomerList = [];

CustomersfromLines(RochesterCustomers, RochesterCustomerList);
CustomersfromLines(WebsterCustomers, WebsterCustomerList);

var customersToDisplay = RochesterCustomerList;


function findLatitude (object) {
  if (object instanceof customer) {
    //lert ("Lat is "+ object.latitude);
    return object.latitude;
  } else {
    //alert ("Lat is "+ object.latitude);
    return object[0];
  }
}

function findLongitude (object) {
  if (object instanceof customer) {
    return object.longitude;
  } else {
    return object[1];
  }
}

// takes an array of objects, uses methods to find lat and lng
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

//If you don't give a marker a map to draw on, it just hangs around until you display it.
function makeMarkers(customerList) {
  var markerList = [];
  for (var i = 0; i < customerList.length; i++) {
    var lat = findLatitude(customerList[i]);
    var lng = findLongitude(customerList[i]);
    var point = {lat: lat, lng: lng};
    var marker = new google.maps.Marker({
          position: point,
          title: customerList[i].address
      });
    markerList.push(marker);
  }
  return markerList;
}

var RochesterCustomerMarkers = makeMarkers(RochesterCustomerList);
var WebsterCustomerMarkers = makeMarkers(WebsterCustomerList);


//Display the list of markers on a map
function displayMarkersOnMap(markerlist, map) {
  for (var i = 0; i < markerlist.length; i++) {
    markerlist[i].setMap(map);
  }
}

//Remove the list of markers from a map
function removeMarkersFromMap(markerlist, map) {
 for (var i = 0; i < markerlist.length; i++) {
    markerlist[i].setMap(null);
  }
}

function swapCustomerArea () {
  if (customersToDisplay === RochesterCustomerList) {
    customersToDisplay = WebsterCustomerList;
  } else {
    customersToDisplay = RochesterCustomerList;
  }
  initMap();
}

/*
function swapCustomerArea () {
  if (customersToDisplay === RochesterCustomerList) {
    customersToDisplay = WebsterCustomerList;
    removeMarkersFromMap(RochesterCustomerMarkers);
    displayMarkersOnMap(WebsterCustomerMarkers);
  } else {
    customersToDisplay = RochesterCustomerList;
    removeMarkersFromMap(WebsterCustomerMarkers);
    displayMarkersOnMap(RochesterCustomerMarkers);
  }
  //initMap();
}
*/

function initMap() {
  var customerList = customersToDisplay;
  var centerPt = centerPoint(customerList);
  var map = new google.maps.Map(document.getElementById('map'), {
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
  var markers = makeMarkers(customersToDisplay);
  displayMarkersOnMap(markers, map);
}

function addMarkstoMap() {
  displayMarkersOnMap(customersToDisplay);
}
 var pointsOfInterest = [[43.157775,-77.604732],[43.146934,-77.600060],[43.144891,-77.601090]];

      function centerPoint(points) {
        var count = 0.0;
        var sumlat = 0;
        var sumlng = 0;
        for (var i = 0; i < points.length; i++) {
          var x = points[i];
          var lat = x[0];
          var lng = x[1];
          count ++;
          sumlat = sumlat + lat;
          sumlng = sumlng + lng;
        };
        return ([sumlat/count, sumlng/count]);
      }
      function initMap() {
        var centerPt = centerPoint(pointsOfInterest);
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: centerPt[0], lng: centerPt[1]}
        });
        for (var i = 0; i < pointsOfInterest.length; i++) {
          pt = pointsOfInterest[i];
          var point = {lat: pt[0], lng: pt[1]};
          new google.maps.Marker({
            position: point,
            map: map
        });
      }}
      

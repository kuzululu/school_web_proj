<div id="map" class="animated zoomIn"></div>
			<script type="text/javascript">
					function initMap(){
		// var location = {lat: 14.468549, lng: 120.980587 }; //object data type
		var location = {lat: 14.4687 , lng: 120.9805};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 15,
			center: location,
			mapTypeId: google.maps.MapTypeId.HYBRID
			// draggable: false
		});

		var popContent = 'AZGH COLLEGE INC <br> Atlas Compound Naga Rd., Pulanglupa I Las Piñas City, Metro Manila, Philippines <br> 874 6903';

		var info = new google.maps.InfoWindow({
			content: popContent
		});

		var marker = new google.maps.Marker({
			position: location,
			map: map,
			title: 'AZGH COLLEGE INC in Las Piñas'
		});

		marker.addListener('mouseover', function(){
			info.open(map, marker);
		});

		}
		    </script>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDrzBRd-5Zwq-ABwR28gRis9rqqNUwdN9E&callback=initMap" type="text/javascript"></script>
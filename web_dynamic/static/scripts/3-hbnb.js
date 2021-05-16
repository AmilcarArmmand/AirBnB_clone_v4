$(document).ready(function () {
    const amenId = [];
    $('INPUT').change(function () {
      if ($(this).is(':checked')) {
        // add amenity_id to amenity_id
        amenId[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
        delete amenId[$(this).attr('data-id')];
      }
      // $.each(amenId, function (index) {
      //     $('<li> ' + amenId[index] + ' </li>').appendTo('DIV.amenities h4');
      //   });
      $('DIV.amenities h4').text(Object.values(amenId).join(', '));
      console.log(Object.values(amenId));
    });
    $.get('http://127.0.0.1:5001/api/v1/status/', function (data, textStatus) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
    // $.post("http://127.0.0.1:5001/api/v1/places_search", {}, function (data, textStatus) {
		// 	if (data.status === 'OK') {
		// 		console.log("HEY!");
		// 	}
    // });
		$.ajax({
			url: 'http://localhost:5001/api/v1/places_search',
			METHOD: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({}),
			dataType: 'json',
			success: function( data, textStatus, jQxhr ){
				console.log("HEY!");
			},
			error: function( jqXhr, textStatus, errorThrown ){
					console.log( errorThrown );
			},
			statusCode: {
				405: function() {
					alert( "still not working" );
				}
			}
		});
  });
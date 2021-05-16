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
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
      if (data.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    });
		$.ajax({
			type: 'POST',
      contentType: 'application/json',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
			data: JSON.stringify({}),
			dataType: 'json',
			success: function( data, textStatus, jQxhr ){
        const divTitle = "<article><div class='title_box'><h2></h2><div class='price_by_night'></div></div>";
        const divInfo = "<div class='information'><div class='max_guest'></div><div class='number_rooms'></div>";
        const divBaths = "<div class='number_bathrooms'></div></div><div class='description'></div></article>";
        const article = divTitle + divInfo + divBaths;
        $( data ).each(function (index, value) {
          $('section.places').append(article);
          // console.log(index)
          // console.log(value)
          $('.title_box h2').last().html(value.name);
          // console.log(value.price_by_night)
          $('.price_by_night').last().html("$" + value.price_by_night);
          // console.log(value.max_guest)
          $('.max_guest').last().html(value.max_guest);
          // console.log(value.number_rooms)
          $('.number_rooms').last().html(value.number_rooms);
          // console.log(value.number_bathrooms)
          $('.number_bathrooms').last().html(value.number_bathrooms);
          // console.log(value.description)
          $('.description').last().html(value.description);
        });
			},
			error: function( jqXhr, textStatus, errorThrown ){
					console.log( errorThrown );
			}
		});
  });

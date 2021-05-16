$(document).ready(function () {
  const amen_id = [];
  $('INPUT').change(function () {
    if ($(this).is(':checked')) {
      // add amenity_id to amenity_id
      amen_id[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amen_id[$(this).attr('data-id')];
    }
    // $.each(amen_id, function (index) {
    //     $('<li> ' + amen_id[index] + ' </li>').appendTo('DIV.amenities h4');
    //   });
    $('DIV.amenities h4').text(Object.values(amen_id).join(', '));
    console.log(Object.values(amen_id));
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});

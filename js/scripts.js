//business logic
function Places(city, state, country, season, landmark, notes) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.season = season;
  this.landmark = landmark;
  this.notes = notes;
}
Places.prototype.fullName = function() {
  return this.city + ", " + this.state + ", " + this.country + ", " + this.season + ", " + this.landmark + ", " + this.notes;
}
$(".location").last().click(function() {
  $("#show-location").show();
  $("#show-location h2").text(newlocation.city);
  $(".city-name").text(newlocation.city);
  $(".state-name").text(newlocation.state);
  $(".country-name").text(newlocation.country);
  $(".season-name").text(newlocation.season);
  $(".landmark-name").text(newlocation.landmark);
  $(".notes-name").text(newlocation.notes);

});
// user interface logic
$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCityName = $("input#new-city-name").val();
    var inputtedStateName = $("input#new-state-name").val();
    var inputtedCountryName = $("input#new-country-name").val();
    var inputtedSeasonName = $("input#new-season-name").val();
    var inputtedLandmarkName = $("input#new-landmark-name").val();
    var inputtedNotesName = $("input#new-notes-name").val();

    var newPlaces = new Places(inputtedCityName, inputtedStateName, inputtedCountryName, inputtedSeasonName, inputtedLandmarkName, inputtedNotesName);

  //   If (inputtedCityName = "San Francisco") {
  //     document.write("<link rel='stylesheet' href='css/sf.css' type='text/css' >");
  //     } else if { (inputtedCityName = "Lake Tahoe");
  //     document.write("<link rel='stylesheet' href='css/lt.css' type='text/css' >");
  // }
    $('body.backround').css('background-image: url("../img/SF.jpeg")');
    $("ul#locations").append("<li><span class='location'>" + newPlaces.city + "</span></li>");
    $("ul#locations").append("<li><span class='location'>" + newPlaces.fullName() + "</span></li>");



    $("input#city-name").val("");
    $("input#state-name").val("");
    $("input#country-name").val("");
    $("input#season-name").val("");
    $("input#landmark-name").val("");
    $("input#notes-name").val("");

  });
});

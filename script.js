$(document).ready(function(){
  var names = ["Carleton", "Avi", "Azat", "Ann"]
  $.each(names, function(index, name) {
    console.log("Hey " + (index + 1) + ", " + name);
  })
});

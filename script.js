var borough = prompt("Which borough do you reside in?"); //Requirement to see which borough the user wants 
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/35sw-rdxj.json',
    dataType: "json",
    //This is to pull data from the server
    success: function(data) {
      var locate = [];
        for (var i = 0; i < data.length; i++) {
          //loop through the borough
if (data[i].borough_community == borough) {
  console.log(data);
  var current = data;
  if(!locate.includes(current)){ // ensure no repeats
  locate.push(current);
    }
   }
}}}); 
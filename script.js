var borough = prompt("Which borough do you reside in?"); //Requirement to see which borough the user wants
$.ajax({
    url: 'https://data.cityofnewyork.us/resource/35sw-rdxj.json',
    dataType: "json",
    //This is to pull data from the server
    success: function(data) {
      var nlocate = []; //The dateset to hold the not used sites
      var locate = []; // The dataset to hold the used sites (Tony's idea)
        for (var i = 0; i < data.length; i++) {
          //loop through the borough
if (data[i].borough_community !== borough) { //If the borough didn't match, we pushed it into the nlocate set.
  var current = data[i].borough_community;
  if(!nlocate.includes(current)){ // No more repeats!
  nlocate.push(current);
    }
   }
   else { //This was for IF it worked. <-- Tony
 document.write("<p>" + data[i].program_type + "<br>" + data[i].site_name + "<br>" + data[i].address + "<br>" + data[i].agency + "<br>" + data[i].grade_level_age_group + "<br>" + data[i].nta + "<br>" + "</p>"); //We decided to only print the objects that concurrently appeared in the data sets that were also important.
 document.write("<br>"); // Creates a break in the programs.
  var currentTwo = data[i].borough_community;
  if(!locate.includes(currentTwo)){ // Makes sure we don't have repeats (Tony)
  locate.push(currentTwo);
   }}
}}});
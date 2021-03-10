$.ajax({
    url: 'https://data.cityofnewyork.us/resource/35sw-rdxj.json',
    dataType: 'json',
    success: function(data) {
        var stores = [];
        var borough = prompt("Which borough do you reside in?"); //Requirement to see which borough the user wants 
        var borough2 = borough.substring(0,1).toUpperCase() + borough.substring(1).toLowerCase(); // This captializes the first letter.
        for (var i = 0; i < data.length; i++) {
if (data[i].borough_community == borough2) { 
    
}
          
        console.log(data);
    }
    }
});

$.ajax({
    url: 'https://data.cityofnewyork.us/resource/35sw-rdxj.json',
    dataType: 'json',
    success: function(data) {
        var stores = [];
        var borough = prompt("Which borough do you reside in?");
        var borough2 = borough.substring(0,1).toUpperCase() + borough.substring(1).toLowerCase();
if (data[i].borough_community == borough2) {
    
}
          
        console.log(data);
    }
});

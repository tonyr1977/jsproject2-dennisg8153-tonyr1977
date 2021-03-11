$.ajax({
    url: 'https://data.cityofnewyork.us/resource/35sw-rdxj.json',
    dataType: "json",
    success: function(data) {
        var stores = [];
        var borough = prompt("Which borough do you reside in?"); //Requirement to see which borough the user wants
        var boroughTwo = borough.substring(0);
        for (var i = 0; i < data.length; i++) {
if (data[i].borough_community == boroughTwo) {
    console.log (data.site_name[i]);
    var currentProgram = data.site_name[i];
     stores.push(currentProgram);
}
         var program = "";
                    for(var b = 0; b < stores.length; b++){
                        program += stores[i] + ", ";
                    }
                    program = program.substring(0,program.length-2); // remove the trailing comma
                    document.write(program);

                }
        console.log(data);
    }
    });

//jshint esversion:6

// console.log(module);

exports.getDate = function() {
var today =new Date();

   const options = { weekday: "long",
   day:"numeric",
   month:"long",
    //    year:"numeric"
    };

    return day = today.toLocaleDateString("en-US", options);

};
exports.getDay = function(){

    var today =new Date();
    
       const options = { weekday: "long"};   
    
        return day = today.toLocaleDateString("en-US", options);
        
    };

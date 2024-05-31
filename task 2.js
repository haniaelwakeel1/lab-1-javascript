    function checkTemperature (temperature){
   var result = temperature >=30 ? "HOT" : "Cold";

       document.write("<h1>" + result + "</h1>");
    }

    var todayTemperature = prompt ("Enter today's Temperature:");
    checkTemperature (Number(todayTemperature));

document.getElementById("days-since-birth").setAttribute(
        "data-count", 
        getDaysBetween(
            new Date(), 
            new Date(1997,08,27))
        );

document.getElementById("coffees").setAttribute(
    "data-count", 
    getDaysBetween(
        new Date(2015,08,27), 
        new Date(1997,08,27)) * 2
    );


function getDaysBetween( firstDate,  secondDate){
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  
    return diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

}

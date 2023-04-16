// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
];
function wRecieved(element,index,array) { // For visiblity these 3 args are added the find passes it regardless 
    return (element.result === "W");
}

function superbowlWin(records){
    let wRecord = records.find(wRecieved);
    return (wRecord == undefined) ? wRecord:wRecord.year;
}


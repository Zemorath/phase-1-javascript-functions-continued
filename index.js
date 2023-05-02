// code your solution here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!";
}
saturdayFun();
saturdayFun("watch a movie!");

function mondayWork (activity = "go to the office") {
    return "This Monday, I will " + activity + ".";
}

mondayWork();


function wrapAdjective(visualFlair="*") {
    const describeMe = function(description="special") {
        return "You are " + visualFlair + description + visualFlair + "!";
    };
    return describeMe;
}
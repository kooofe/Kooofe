document.querySelector("h1").innerText = "Arlan Manap CS-2120";
var today = new Date();

document.querySelector("p2").innerHTML = "Year : "+today.getFullYear();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.querySelector("p3").innerHTML = "Today is : "+days[today.getDay()];
document.querySelector("p4").innerHTML = "Date : "+today.getDate();
document.querySelector("p5").innerHTML = "Month : "+today.getMonth();
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            hours = checkTime(today.getHours()),
            minutes = checkTime(today.getMinutes()),
            seconds = checkTime(today.getSeconds());
        document.querySelector("p1").innerHTML ="Current time is : "+ hours + ":" + minutes + ":" + seconds;
    }
    startTime();
})();

var date = new Date("01/07/2024");
var timeDifference = date.getTime() - today.getTime();
var DaysBetween = timeDifference / (1000 * 3600 * 24);

document.querySelector("p7").innerHTML = (DaysBetween |0) + " days left until the freedom! "
function Multiply(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
 document.getElementById("result").innerText = num1 * num2;
}
function Divide(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    document.getElementById("result").innerText = num1 / num2;
}
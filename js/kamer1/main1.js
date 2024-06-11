const notee = document.querySelector("button.note")
notee.addEventListener("click", function () {
    alert("5923");
});
const nextdoor = document.querySelector("button.btn-to2")
nextdoor.addEventListener("click", function () {
    
    if (prompt("code") == "5923") {
        window.location.href = ("room-two.html");
    }

});
nextdoor.disabled = true


const motor = document.querySelector("img.machine")
motor.addEventListener("click", function() {
    
    let anwser = prompt("what is 9423847238472384723482734823x2342834723847283472837x0x2342384723847238472387x23x4234237482374823/23423423423243249x23423040234?")
    if (anwser == 0) {
        nextdoor.disabled = false
    alert("repairing successful")}
        else {alert("repairing failed..")}
    
})

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    const dateTimeElement =document.getElementById("datetime");
    dateTimeElement.innerHTML = dateTimeString;
}

updateDateTime();

setInterval(updateDateTime, 1000);
function convertToFahrenheit() {
    let celsius = document.getElementById("celsiusInput").value;
    if(celsius == "") {
        alert("Please enter a Temperature in Celsius.");
        return;
    }
    let farenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = `Temperature in Farenheit ${farenheit}`;
}
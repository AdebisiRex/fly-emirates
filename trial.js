// async function geonames(){
//     const AIRPORTS = await fetch("https://countriesnow.space/api/v0.1/countries");

//     const list = await AIRPORTS.json();

//     console.log(list)
// }
// geonames();
// alert(AIRPORTS.data[0].country);

async function takeloc(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition();

        const AIRPORTS = await fetch(`https://airlabs.co/api/v9/nearby?lat=${coords.latitude}&lng=${coords.longitude}&distance=2000&api_key=6f0d6f8f-295b-46b4-a595-6388f121a0c3`);
        const list = await AIRPORTS.json();
    }
    else{
        const list = "Not successful"
    }



    console.log(list)
}
// takeloc()


var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
getLocation()

async function showPosition(position) {

    const AIRPORTS = await fetch(`https://airlabs.co/api/v9/nearby?lat=${position.coords.latitude}&lng=${position.coords.longitude}&distance=2000&api_key=6f0d6f8f-295b-46b4-a595-6388f121a0c3`);
    const list = await AIRPORTS.json();


    console.log(list)

    x.innerHTML = list.response.airports[0].name

//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
}
import { haversine } from '../utils/haversine.js';
import { lcbo } from '../config/constants.js';

/* ---VARIABLES--- */

//Contact Map Variables 
let map;
const searchBtn = document.querySelector('#search-btn');
const distanceOutput = document.querySelector('#search-results')

let userMarker = null;
let userLine = null;

if (searchBtn) {
    // Initialize map
    map = L.map('contact-map').setView([42.9849, -81.2453], 12);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    // Add LCBO marker
    L.marker([lcbo.lat, lcbo.lon])
    .addTo(map)
    .bindPopup("LCBO - 681 Wonderland Rd N");
}


/* ---FUNCTIONS--- */

//Main map logic
async function handleAddressSearch() {

  const address = document.querySelector("#search-bar").value;
  if (!address) {
    alert("Please enter an address");
    return;
  }

  // Call Nominatim API
  const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
  const data = await response.json();

  if (data.length === 0) {
    alert("Address not found");
    return;
  }

  const userLat = parseFloat(data[0].lat);
  const userLon = parseFloat(data[0].lon);

  //removes the previous marker/line so there is only ever one one the map
  if (userMarker) {
    map.removeLayer(userMarker);
  }

  if (userLine) {
    map.removeLayer(userLine);
  }

  // Add user marker
  userMarker = L.marker([userLat, userLon])
    .addTo(map)
    .bindPopup("Your Address")
    .openPopup();

  // Draw line between user and LCBO
  userLine = L.polyline([
    [userLat, userLon],
    [lcbo.lat, lcbo.lon]
  ], { color: 'blue' }).addTo(map);

  // Fit map to show both points
  map.fitBounds(userLine.getBounds());

  // Calculates the distance betweeen the users address and the fixed location
  const distance = haversine(userLat, userLon, lcbo.lat, lcbo.lon);

  distanceOutput.textContent = `Distance to LCBO: ${distance.toFixed(2)} km`;

}



/* ---EVENT LISTENERS--- */

//Contact Map Event Handler
if (searchBtn) {
   searchBtn.addEventListener('click', handleAddressSearch); 
}
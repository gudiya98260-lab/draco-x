// DRACO-X Core Engine v1.0

console.log("DRACO-X System Online 🚀");

// Live Time
function updateTime() {
    const time = new Date();
    const display = document.getElementById("time");

    if (display) {
        display.innerHTML = time.toUTCString();
    }
}

setInterval(updateTime, 1000);
updateTime();


// Satellite Data System
const satellites = [
    {
        name: "ISS",
        status: "Active",
        orbit: "Low Earth Orbit"
    },
    {
        name: "Starlink",
        status: "Tracking",
        orbit: "550 km"
    }
];

console.log("Satellite Database Loaded:", satellites);


// DRACO-X Satellite Tracker Module

async function trackISS() {
    try {
        const response = await fetch(
            "https://api.wheretheiss.at/v1/satellites/25544"
        );

        const data = await response.json();

        console.log("ISS Live Data:", data);

        const satelliteInfo = document.getElementById("satellite-info");

        if (satelliteInfo) {
            satelliteInfo.innerHTML = `
                <h3>🛰️ ISS Tracker</h3>
                <p>Latitude: ${data.latitude}</p>
                <p>Longitude: ${data.longitude}</p>
                <p>Altitude: ${data.altitude} km</p>
            `;
        }

    } catch (error) {
        console.log("Satellite Connection Error:", error);
    }
}

trackISS();

setInterval(trackISS, 5000);

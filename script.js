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

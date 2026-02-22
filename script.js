function goToLogin() {
    window.location.href = "login.html";
}

function validateLogin() {
    let phone = document.getElementById("phone").value;
    let error = document.getElementById("error");

    if (phone.length !== 10 || isNaN(phone)) {
        error.innerText = "Phone number must be exactly 10 digits.";
        return;
    }

    error.innerText = "";
    window.location.href = "farmer.html";
}

function goToDashboard() {
    window.location.href = "dashboard.html";
}
// Market Data
const crops = [
    { name: "Rice", previous: 2250, current: 2100 },
    { name: "Wheat", previous: 1980, current: 1900 },
    { name: "Cotton", previous: 6500, current: 6200 },
    { name: "Maize", previous: 1700, current: 1650 }
];

function loadMarketData() {
    const table = document.getElementById("marketData");
    if (!table) return;

    crops.forEach(crop => {
        const row = document.createElement("tr");

        const difference = crop.current - crop.previous;

        let changeText;
        if (difference < 0) {
            changeText = "↓ ₹" + Math.abs(difference);
        } else if (difference > 0) {
            changeText = "↑ ₹" + difference;
        } else {
            changeText = "No Change";
        }

        row.innerHTML = `
            <td>${crop.name}</td>
            <td>${crop.previous}</td>
            <td>${crop.current}</td>
            <td>${changeText}</td>
        `;

        table.appendChild(row);
    });
}

window.onload = loadMarketData;

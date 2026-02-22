// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const phone = document.getElementById("phone").value;

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Phone number must be exactly 10 digits");
        return;
    }

    window.location.href = "farmer.html";
});

// Market Data
const crops = [
    { name: "Rice", previous: 2200, current: 2050 },
    { name: "Wheat", previous: 2000, current: 1980 },
    { name: "Cotton", previous: 6000, current: 6200 },
];

function loadMarket() {
    const table = document.getElementById("marketBody");
    if (!table) return;

    crops.forEach(crop => {
        const diff = crop.current - crop.previous;
        let changeClass = diff < 0 ? "decrease" : "increase";
        let changeText = diff < 0 
            ? `↓ ₹${Math.abs(diff)}` 
            : `↑ ₹${diff}`;

        table.innerHTML += `
            <tr>
                <td>${crop.name}</td>
                <td>₹${crop.previous}</td>
                <td>₹${crop.current}</td>
                <td class="${changeClass}">${changeText}</td>
            </tr>
        `;
    });
}

window.onload = loadMarket;

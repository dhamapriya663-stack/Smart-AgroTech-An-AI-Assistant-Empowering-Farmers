function saveFarmerDetails() {
    let name = document.getElementById("farmerName").value;
    let soil = document.getElementById("soilType").value;
    let crop = document.getElementById("cropType").value;

    localStorage.setItem("farmerName", name);
    localStorage.setItem("soilType", soil);
    localStorage.setItem("cropType", crop);

    alert("Details Saved Successfully!");
}

function showMarketStatus() {

    let crop = localStorage.getItem("cropType");
    let resultDiv = document.getElementById("marketResult");

    let prices = {
        rice: { previous: 2200, current: 2050 },
        wheat: { previous: 2000, current: 1980 },
        cotton: { previous: 6000, current: 6200 }
    };

    if (!crop) {
        resultDiv.innerHTML = "<h3>Please enter Farmer Details first.</h3>";
        return;
    }

    let previous = prices[crop].previous;
    let current = prices[crop].current;
    let change = current - previous;

    let changeText = "";
    if (change > 0) {
        changeText = `<span class="up">↑ ₹${change}</span>`;
    } else {
        changeText = `<span class="down">↓ ₹${Math.abs(change)}</span>`;
    }

    resultDiv.innerHTML = `
        <h3>Crop: ${crop.toUpperCase()}</h3>
        <p>Previous Price: ₹${previous}</p>
        <p>Current Price: ₹${current}</p>
        <p>Change: ${changeText}</p>
    `;
}

function showAIRecommendation() {

    let crop = localStorage.getItem("cropType");
    let soil = localStorage.getItem("soilType");
    let resultDiv = document.getElementById("aiResult");

    if (!crop) {
        resultDiv.innerHTML = "<h3>Please enter Farmer Details first.</h3>";
        return;
    }

    let recommendation = "";

    if (crop === "rice") {
        recommendation = `
        <h3>Recommended Fertilizer: Urea + DAP</h3>
        <p><strong>Why:</strong> Rice needs high nitrogen for better grain yield.</p>
        <p><strong>How:</strong> Apply during sowing and after 25 days.</p>
        `;
    }

    if (crop === "wheat") {
        recommendation = `
        <h3>Recommended Fertilizer: NPK 20-20-20</h3>
        <p><strong>Why:</strong> Balanced nutrients for root and grain development.</p>
        <p><strong>How:</strong> Apply before irrigation.</p>
        `;
    }

    if (crop === "cotton") {
        recommendation = `
        <h3>Recommended Fertilizer: Potash + Urea</h3>
        <p><strong>Why:</strong> Improves fiber quality and plant strength.</p>
        <p><strong>How:</strong> Apply during flowering stage.</p>
        `;
    }

    resultDiv.innerHTML = `
        <h3>Crop: ${crop.toUpperCase()}</h3>
        <p>Soil Type: ${soil}</p>
        ${recommendation}
    `;
}




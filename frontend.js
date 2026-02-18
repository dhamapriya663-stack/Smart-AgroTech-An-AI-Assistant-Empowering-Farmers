function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("hidden");
  });

  document.getElementById(sectionId).classList.remove("hidden");
}

/* --------- CALENDAR GENERATION ---------- */

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const daysInMonth = 30;
  const sowingDates = [5, 12, 20]; // AI recommended sowing dates

  for (let day = 1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.classList.add("calendar-day");
    dayDiv.innerText = day;

    if (sowingDates.includes(day)) {
      dayDiv.classList.add("sowing-day");
      dayDiv.innerHTML = day + "<br><small>Sowing</small>";
    }

    calendar.appendChild(dayDiv);
  }
}

/* Call calendar after dashboard loads */
function submitDetails() {
  const crop = document.getElementById("crop").value;

  if (!crop) {
    alert("Please select crop type");
    return;
  }

  document.getElementById("selectedCrop").innerText = crop;

  let fertilizer = "Urea";

  if (crop === "Rice") fertilizer = "Urea + DAP";
  else if (crop === "Wheat") fertilizer = "DAP + Potash";
  else if (crop === "Cotton") fertilizer = "NPK";
  else if (crop === "Maize") fertilizer = "Urea + Potash";

  document.getElementById("fertilizer").innerText = fertilizer;

  const priceUp = Math.random() > 0.5;

  document.getElementById("marketCrop").innerText = crop;

  if (priceUp) {
    document.getElementById("priceTrend").innerText = "Increased 📈";
    document.getElementById("priceMessage").innerText =
      "Good time to sell the crop.";
    document.getElementById("priceMessage").style.color = "green";
  } else {
    document.getElementById("priceTrend").innerText = "Decreased 📉";
    document.getElementById("priceMessage").innerText =
      "Wait for better market conditions.";
    document.getElementById("priceMessage").style.color = "red";
  }

  document.getElementById("form").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  generateCalendar(); // generate calendar automatically
}





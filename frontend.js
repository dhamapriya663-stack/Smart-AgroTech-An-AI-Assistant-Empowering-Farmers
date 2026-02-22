function sendOTP() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("otp").classList.remove("hidden");
  alert("Demo OTP: 1234");
}

function verifyOTP() {
  const otp = document.getElementById("otpInput").value;
  if (otp === "1234") {
    document.getElementById("otp").classList.add("hidden");
    document.getElementById("form").classList.remove("hidden");
  } else {
    alert("Invalid OTP");
  }
}

function submitDetails() {
  const crop = document.getElementById("crop").value;

  if (!crop) {
    alert("Select crop type");
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
    document.getElementById("priceMessage").innerText = "Good time to sell.";
    document.getElementById("priceMessage").style.color = "green";
  } else {
    document.getElementById("priceTrend").innerText = "Decreased 📉";
    document.getElementById("priceMessage").innerText = "Wait for better price.";
    document.getElementById("priceMessage").style.color = "red";
  }

  document.getElementById("form").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  generateCalendar();
}

function openSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  const daysInMonth = 30;
  const sowingDates = [5, 12, 20];

  for (let day = 1; day <= daysInMonth; day++) {
    const div = document.createElement("div");
    div.classList.add("calendar-day");
    div.innerText = day;

    if (sowingDates.includes(day)) {
      div.classList.add("sowing-day");
      div.innerHTML = day + "<br><small>Sowing</small>";
    }

    calendar.appendChild(div);
  }
}




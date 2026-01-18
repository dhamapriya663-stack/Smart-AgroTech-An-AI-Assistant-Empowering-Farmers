function sendOTP() {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("otp").classList.remove("hidden");
  alert("OTP sent to your phone (Demo OTP: 1234)");
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
    alert("Please select crop type");
    return;
  }

  // Show selected crop on dashboard
  document.getElementById("selectedCrop").innerText = crop;

  // Simple fertilizer logic (demo)
  let fertilizer = "Urea";

  if (crop === "Rice") fertilizer = "Urea + DAP";
  else if (crop === "Wheat") fertilizer = "DAP + Potash";
  else if (crop === "Cotton") fertilizer = "NPK";
  else if (crop === "Maize") fertilizer = "Urea + Potash";

  document.getElementById("fertilizer").innerText = fertilizer;

  document.getElementById("form").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}


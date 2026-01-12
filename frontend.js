function sendOTP() {
  document.getElementById("login").style.display = "none";
  document.getElementById("otp").style.display = "block";
  alert("OTP sent: 1234 (demo)");
}

function verifyOTP() {
  const otp = document.getElementById("otpInput").value;
  if (otp === "1234") {
    document.getElementById("otp").style.display = "none";
    document.getElementById("form").style.display = "block";
  } else {
    alert("Invalid OTP");
  }
}

function recommend() {
  const soil = document.getElementById("soil").value;

  let crop, fertilizer, calendar;

  if (soil === "Black") {
    crop = "Cotton";
    fertilizer = "Urea + Potash";
    calendar = "Sowing: June | Harvest: October";
  } else if (soil === "Red") {
    crop = "Groundnut";
    fertilizer = "DAP";
    calendar = "Sowing: July | Harvest: November";
  } else {
    crop = "Rice";
    fertilizer = "NPK";
    calendar = "Sowing: June | Harvest: December";
  }

  document.getElementById("form").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("crop").innerText =
    "Recommended Crop: " + crop;

  document.getElementById("fertilizer").innerText =
    "Best Fertilizer: " + fertilizer;

  document.getElementById("calendar").innerText =
    "Crop Calendar: " + calendar;
}

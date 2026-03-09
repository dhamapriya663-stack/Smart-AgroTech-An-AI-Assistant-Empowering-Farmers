function sendOTP() {
  console.log("Send OTP clicked");
  document.getElementById("login").style.display = "none";
  document.getElementById("otp").style.display = "block";
  alert("OTP sent successfully!\nDemo OTP: 1234");
}

function verifyOTP() {
  const otp = document.getElementById("otpInput").value;

  if (otp === "1234") {
    document.getElementById("otp").style.display = "none";
    document.getElementById("form").style.display = "block";
  } else {
    alert("Invalid OTP. Please enter 1234");
  }
}

function recommend() {
  const soil = document.getElementById("soil").value;

  let crop = "";
  let fertilizer = "";
  let calendar = "";

  if (soil === "Black") {
    crop = "Cotton";
    fertilizer = "Urea + Potash";
    calendar = "Sowing: June | Irrigation: Every 10 days | Harvest: October";
  } 
  else if (soil === "Red") {
    crop = "Groundnut";
    fertilizer = "DAP";
    calendar = "Sowing: July | Irrigation: Every 12 days | Harvest: November";
  } 
  else {
    crop = "Rice";
    fertilizer = "NPK";
    calendar = "Sowing: June | Irrigation: Weekly | Harvest: December";
  }

  document.getElementById("form").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("crop").innerText =
    "🌾 Recommended Crop: " + crop;

  document.getElementById("fertilizer").innerText =
    "🧪 Best Fertilizer: " + fertilizer;

  document.getElementById("calendar").innerText =
    "📅 Crop Calendar: " + calendar;
}


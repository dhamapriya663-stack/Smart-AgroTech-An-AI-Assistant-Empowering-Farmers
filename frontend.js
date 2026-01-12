alert("JavaScript Loaded Successfully");
window.onload = function () {
  console.log("JS Loaded");
};

function sendOTP() {
  alert("OTP Sent! Demo OTP: 1234");

  document.getElementById("login").style.display = "none";
  document.getElementById("otp").style.display = "block";
}

function verifyOTP() {
  const otp = document.getElementById("otpInput").value;

  if (otp === "1234") {
    document.getElementById("otp").style.display = "none";
    document.getElementById("form").style.display = "block";
  } else {
    alert("Wrong OTP");
  }
}

function recommend() {
  document.getElementById("form").style.display = "none";
  document.getElementById("result").style.display = "block";

  document.getElementById("crop").innerText =
    "🌾 Recommended Crop: Rice";

  document.getElementById("fertilizer").innerText =
    "🧪 Fertilizer: NPK";

  document.getElementById("calendar").innerText =
    "📅 Sowing: June | Harvest: October";
}



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
  document.getElementById("form").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

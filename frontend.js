function sendOTP(){

const email=document.getElementById("email").value;
const phone=document.getElementById("phone").value;

if(email==="" || phone===""){
alert("Please enter email and phone number");
return;
}

document.getElementById("login").style.display="none";
document.getElementById("otp").style.display="block";

alert("OTP sent successfully!\nDemo OTP: 1234");

}


function verifyOTP(){

const otp=document.getElementById("otpInput").value;

if(otp==="1234"){

document.getElementById("otp").style.display="none";
document.getElementById("form").style.display="block";

}

else{

alert("Invalid OTP. Please enter 1234");

}

}


function submitDetails(){

const crop=document.getElementById("crop").value;

if(crop===""){
alert("Please select crop type");
return;
}

document.getElementById("form").style.display="none";
document.getElementById("dashboard").style.display="block";

document.getElementById("selectedCrop").innerText=crop;
document.getElementById("marketCrop").innerText=crop;

document.getElementById("fertilizer").innerText="Urea + DAP";

const trend=Math.random()>0.5?"Increased 📈":"Decreased 📉";

document.getElementById("priceTrend").innerText=trend;

if(trend==="Increased 📈"){
document.getElementById("priceMessage").innerText="Good time to sell the crop.";
document.getElementById("priceMessage").style.color="green";
}
else{
document.getElementById("priceMessage").innerText="Better to wait before selling.";
document.getElementById("priceMessage").style.color="red";
}

}


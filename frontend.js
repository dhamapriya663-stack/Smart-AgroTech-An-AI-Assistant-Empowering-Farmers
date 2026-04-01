function goToOTP(){
    window.location.href="/otp"
}

function verifyOTP(){
    let otp=document.getElementById("otp").value

    if(otp=="1234"){
        window.location.href="/farmer"
    }
    else{
        alert("Invalid OTP")
    }
}

function goToDashboard(){
    window.location.href="/dashboard"
}

// ---------------- CHAT ----------------

function sendMessage() {
    let msg = document.getElementById("message").value;

    fetch("/send_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "message=" + msg
    }).then(() => {
        document.getElementById("message").value = "";
        loadMessages();
    });
}

function loadMessages() {
    fetch("/get_messages")
    .then(res => res.json())
    .then(data => {
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML = "";
        data.forEach(msg => {
            chatBox.innerHTML += "<p>" + msg + "</p>";
        });
    });
}

// auto refresh
setInterval(loadMessages, 2000);


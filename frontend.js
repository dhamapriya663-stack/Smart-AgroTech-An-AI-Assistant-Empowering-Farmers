// ===== Logout Function =====
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html"; // keep your login page same
}

// ===== Check Login Status =====
window.onload = function () {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
        window.location.href = "login.html";
    } else {
        const usernameElement = document.getElementById("usernameDisplay");
        if (usernameElement) {
            usernameElement.innerText = user;
        }
    }
};

// ===== Add New Entry (Example Feature You Wanted) =====
function addEntry() {
    const name = document.getElementById("nameInput").value;
    const role = document.getElementById("roleInput").value;

    if (name === "" || role === "") {
        alert("Please fill all fields");
        return;
    }

    const table = document.getElementById("dataTable");

    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = role;
    cell3.innerHTML = `<button onclick="deleteRow(this)">Delete</button>`;

    document.getElementById("nameInput").value = "";
    document.getElementById("roleInput").value = "";

    showSuggestion("New entry added successfully!");
}

// ===== Delete Row =====
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
    showSuggestion("Entry deleted!");
}

// ===== Suggestion Message =====
function showSuggestion(message) {
    const suggestionBox = document.getElementById("suggestionBox");
    if (!suggestionBox) return;

    suggestionBox.innerText = message;
    suggestionBox.style.display = "block";

    setTimeout(() => {
        suggestionBox.style.display = "none";
    }, 3000);
}




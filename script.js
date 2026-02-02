let payments = JSON.parse(localStorage.getItem("payments")) || [];

function addPayment() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    if (!name || !amount || !date) {
        alert("Please fill all fields");
        return;
    }

    payments.push({ name, amount, date, status });
    localStorage.setItem("payments", JSON.stringify(payments));

    displayPayments();
    clearForm();
}

function displayPayments() {
    const list = document.getElementById("paymentList");
    list.innerHTML = "";

    payments.forEach((p, index) => {
        list.innerHTML += `
            <tr>
                <td>${p.name}</td>
                <td>₹${p.amount}</td>
                <td>${p.date}</td>
                <td class="${p.status}">${p.status}</td>
                <td><button onclick="deletePayment(${index})">❌</button></td>
            </tr>
        `;
    });
}

function deletePayment(index) {
    payments.splice(index, 1);
    localStorage.setItem("payments", JSON.stringify(payments));
    displayPayments();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}

displayPayments();

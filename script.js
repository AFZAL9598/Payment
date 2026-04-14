let payments = JSON.parse(localStorage.getItem("payments")) || [];

function addPayment() {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    if (name === "" || amount === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    let payment = { name, amount, date, status };
    payments.push(payment);

    localStorage.setItem("payments", JSON.stringify(payments));

    displayPayments();
    clearForm();
}

function displayPayments() {
    let list = document.getElementById("paymentList");
    list.innerHTML = "";

    payments.forEach((p, index) => {
        let row = `
            <tr>
                <td>${p.name}</td>
                <td>${p.amount}</td>
                <td>${p.date}</td>
                <td>${p.status}</td>
                <td><button onclick="deletePayment(${index})">Delete</button></td>
            </tr>
        `;
        list.innerHTML += row;
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

// Load data on page load
displayPayments();

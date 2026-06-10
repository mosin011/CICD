function addEmployee() {

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;

    if(name === "" || department === ""){
        alert("Please fill all fields");
        return;
    }

    const table = document.getElementById("employeeTable");

    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = name;
    cell2.innerHTML = department;

    document.getElementById("name").value = "";
    document.getElementById("department").value = "";
}
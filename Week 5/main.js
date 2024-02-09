class RegistrationForm {
  constructor() {
    this.registrations = [];
  }

  async submitForm() {
    try {
      let personName = document.getElementById("personName").value;
      let personAge = document.getElementById("personAge").value;
      let personMoney = document.getElementById("personMoney").value;

      await this.checkInput(personName, personAge, personMoney);

      let registration = {
        name: personName,
        age: personAge,
        money: personMoney,
      };

      this.registrations.push(registration);
      alert("Data berhasil ditambahkan");
      this.displayData();
    } catch (error) {
      alert(error);
    }
  }

  checkInput(personName, personAge, personMoney) {
    return new Promise((resolve, reject) => {
      if (personName.length > 25) {
        reject("Nama tidak boleh lebih dari 25 karakter.");
      }

      if (isNaN(personAge) || personAge < 25) {
        reject("Umur minimal 25 Tahun.");
      }

      if (isNaN(personMoney) || personMoney < 100000 || personMoney > 1000000) {
        reject("Masukkan jumlah uang antara seratus ribu sampai satu juta.");
      }

      resolve();
    });
  }

  displayData() {
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    this.registrations.forEach(function (data, index) {
      let row = tableBody.insertRow();
      let td1 = row.insertCell(0);
      let td2 = row.insertCell(1);
      let td3 = row.insertCell(2);
      let td4 = row.insertCell(3);

      td1.innerHTML = index + 1;
      td2.innerHTML = data.name;
      td3.innerHTML = `${data.age} Tahun`;
      td4.innerHTML = `Rp. ${parseInt(data.money).toLocaleString("id-ID")}`;
    });

    this.avgCells();
  }

  avgCells() {
    let totalAge = 0;
    let totalMoney = 0;

    for (let i = 0; i < this.registrations.length; i++) {
      totalAge += parseFloat(this.registrations[i].age);
      totalMoney += parseFloat(this.registrations[i].money);
    }

    let averageAge = totalAge / this.registrations.length;
    let averageMoney = totalMoney / this.registrations.length;

    let avgAge = document.getElementById("averageAge");
    let avgMoney = document.getElementById("averageMoney");

    avgAge.textContent = averageAge.toFixed(2) + " Tahun";
    avgMoney.textContent =
      "Rp. " + parseFloat(averageMoney.toFixed(2)).toLocaleString("id-ID");
  }
}

function resetTable() {
  let tableBody = document.getElementById("tableBody");
  let averageAge = document.getElementById("averageAge");
  let averageMoney = document.getElementById("averageMoney");

  tableBody.innerHTML = "";
  averageAge.innerHTML = "";
  averageMoney.innerHTML = "";

  alert("Semua Data Dibersihkan");
}

const registrationForm = new RegistrationForm("Registration Form");

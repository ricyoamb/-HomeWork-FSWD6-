document.title = "Tugas Week 4";

document.write('<script src="arrayBilangan.js"></script>');

function clearData() {
  arrayGanjil = [];
  arrayGenap = [];
  _total = { totalGanjil: 0, totalGenap: 0 };
  _avg = { avgGanjil: 0, avgGenap: 0 };
  _min = { minGanjil: 0, minGenap: 0 };
  _max = { maxGanjil: 0, maxGenap: 0 };

  let clearElement = [
    "arrGanjil",
    "arrGenap",
    "totalarrGanjil",
    "totalarrGenap",
    "avgarrGanjil",
    "avgarrGenap",
    "minarrGanjil",
    "minarrGenap",
    "maxarrGanjil",
    "maxarrGenap",
    "bandingTotal",
    "bandingavg",
    "bandingmin",
    "bandingmax",
  ];

  clearElement.forEach(function (elementId) {
    document.getElementById(elementId).textContent = "";
  });
}

function run() {
  arrBilangan();

  _total = totalArray(arrayGanjil, arrayGenap); 
  _avg = avgArray(arrayGanjil, arrayGenap);
  _min = minArray(arrayGanjil, arrayGenap);
  _max = maxArray(arrayGanjil, arrayGenap);

  document.getElementById("arrGanjil").textContent = arrayGanjil.join(', ');
  document.getElementById("arrGenap").textContent = arrayGenap.join(', ');
  document.getElementById("totalarrGanjil").textContent = _total.totalGanjil;
  document.getElementById("totalarrGenap").textContent = _total.totalGenap;
  document.getElementById("avgarrGanjil").textContent = _avg.avgGanjil;
  document.getElementById("avgarrGenap").textContent = _avg.avgGenap;
  document.getElementById("minarrGanjil").textContent = _min.minGanjil;
  document.getElementById("minarrGenap").textContent = _min.minGenap;
  document.getElementById("maxarrGanjil").textContent = _max.maxGanjil;
  document.getElementById("maxarrGenap").textContent = _max.maxGenap;
  document.getElementById("bandingTotal").textContent = bandingTotal(_total);
  document.getElementById("bandingavg").textContent = bandingAvg(_avg);
  document.getElementById("bandingmin").textContent = bandingMin(_min);
  document.getElementById("bandingmax").textContent = bandingMax(_max);
}

document.title = "Tugas Week 4";

document.write('<script src="arrayBilangan.js"></script>');

function clearData() {
  arrayEven = [];
  arrayOdd = [];
  _sum = { sumEven: 0, sumOdd: 0 };
  _avg = { avgEven: 0, avgOdd: 0 };
  _min = { minEven: 0, minOdd: 0 };
  _max = { maxEven: 0, maxOdd: 0 };

  let clearElement = [
    "arrEven",
    "arrOdd",
    "sumarrEven",
    "sumarrOdd",
    "avgarrEven",
    "avgarrOdd",
    "minarrEven",
    "minarrOdd",
    "maxarrEven",
    "maxarrOdd",
    "comSum",
    "comAvg",
    "comMin",
    "comMax",
  ];

  clearElement.forEach(function (elementId) {
    document.getElementById(elementId).textContent = "";
  });
}

function run() {
  numArray();

  _sum = sumArray(arrayEven, arrayOdd); 
  _avg = avgArray(arrayEven, arrayOdd);
  _min = minArray(arrayEven, arrayOdd);
  _max = maxArray(arrayEven, arrayOdd);

  document.getElementById("arrEven").textContent = arrayEven.join(', ');
  document.getElementById("arrOdd").textContent = arrayOdd.join(', ');
  document.getElementById("sumarrEven").textContent = _sum.sumEven;
  document.getElementById("sumarrOdd").textContent = _sum.sumOdd;
  document.getElementById("avgarrEven").textContent = _avg.avgEven;
  document.getElementById("avgarrOdd").textContent = _avg.avgOdd;
  document.getElementById("minarrEven").textContent = _min.minEven;
  document.getElementById("minarrOdd").textContent = _min.minOdd;
  document.getElementById("maxarrEven").textContent = _max.maxEven;
  document.getElementById("maxarrOdd").textContent = _max.maxOdd;
  document.getElementById("comSum").textContent = comSum(_sum);
  document.getElementById("comAvg").textContent = comAvg(_avg);
  document.getElementById("comMin").textContent = comMin(_min);
  document.getElementById("comMax").textContent = comMax(_max);
}

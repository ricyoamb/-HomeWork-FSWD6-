let arrayGanjil = [];
let arrayGenap = [];

function arrBilangan() {
  while (arrayGanjil.length < 50 || arrayGenap.length < 50) {
    let bilangan = Math.ceil(Math.random() * 100);

    if (bilangan % 2 === 0 && arrayGenap.length < 50) arrayGenap.push(bilangan);
    if (bilangan % 2 === 1 && arrayGanjil.length < 50) arrayGanjil.push(bilangan);
  }
}
function totalArray(arrayGanjil, arrayGenap) {
  let totalGanjil = 0;
  let totalGenap = 0;

  for (let i = 0; i < arrayGanjil.length; i++) {
    totalGanjil += arrayGanjil[i];
  }

  for (let i = 0; i < arrayGenap.length; i++) {
    totalGenap += arrayGenap[i];
  }

  return { totalGanjil, totalGenap };
}

function avgArray(arrayGanjil, arrayGenap) {
  let avgGanjil = 0;
  let avgGenap = 0;
  avgGanjil = _total.totalGanjil / arrayGanjil.length;
  avgGenap = _total.totalGenap / arrayGenap.length;

  return { avgGanjil, avgGenap };
}

function minArray(arrayGanjil, arrayGenap) {
  let minGanjil = arrayGanjil[0];
  let minGenap = arrayGenap[0];

  for (let i = 1; i < arrayGanjil.length; i++) {
    if (arrayGanjil[i] < minGanjil) {
      minGanjil = arrayGanjil[i];
    }
  }

  for (let i = 1; i < arrayGenap.length; i++) {
    if (arrayGenap[i] < minGenap) {
      minGenap = arrayGenap[i];
    }
  }

  return { minGanjil, minGenap };
}

function maxArray(arrayGanjil, arrayGenap) {
  let maxGanjil = arrayGanjil[0];
  let maxGenap = arrayGenap[0];

  for (let i = 1; i < arrayGanjil.length; i++) {
    if (arrayGanjil[i] > maxGanjil) {
      maxGanjil = arrayGanjil[i];
    }
  }

  for (let i = 1; i < arrayGenap.length; i++) {
    if (arrayGenap[i] > maxGenap) {
      maxGenap = arrayGenap[i];
    }
  }

  return { maxGanjil, maxGenap };
}

function bandingTotal(_total) {
  if (_total.totalGanjil === _total.totalGenap) {
    return "Total Array Ganjil = Total Array Genap";
  } else if (_total.totalGanjil > _total.totalGenap) {
    return "Total Array Ganjil lebih besar daripada Total Array Genap";
  } else if (_total.totalGanjil < _total.totalGenap) {
    return "Total Array Genap lebih besar daripada Total Array Ganjil";
  }
}

function bandingAvg(_avg) {
  if (_avg.avgGanjil === _avg.avgGenap) {
    return "Rata - Rata Array Ganjil = Rata - Rata Array Genap";
  } else if (_avg.avgGanjil > _avg.avgGenap) {
    return "Rata - Rata Array Ganjil lebih besar daripada Rata - Rata Array Genap";
  } else if (_avg.avgGanjil < _avg.avgGenap) {
    return "Rata - Rata Array Genap lebih besar daripada Rata - Rata Array Ganjil";
  }
}

function bandingMin(_min) {
  if (_min.minGanjil === _min.minGenap) {
    return "Nilai Minimal Array Ganjil = Nilai Minimal Array Genap";
  } else if (_min.minGanjil > _min.minGenap) {
    return "Nilai Minimal Array Ganjil lebih besar daripada Nilai Minimal Array Genap";
  } else if (_min.minGanjil < _min.minGenap) {
    return "Nilai Minimal Array Genap lebih besar daripada Nilai Minimal Array Ganjil";
  }
}

function bandingMax(_max) {
  if (_max.maxGanjil === _max.maxGenap) {
    return "Nilai Maksimal Array Ganjil = Nilai Maksimal Array Genap";
  } else if (_max.maxGanjil > _max.maxGenap) {
    return "Nilai Maksimal Array Ganjil lebih besar daripada Nilai Maksimal Array Genap";
  } else if (_max.maxGanjil < _max.maxGenap) {
    return "Nilai Maksimal Array Genap lebih besar daripada Nilai Maksimal Array Ganjil";
  }
}

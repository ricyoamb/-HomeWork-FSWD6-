let arrayEven = [];
let arrayOdd = [];

function numArray() {
  while (arrayEven.length < 50 || arrayOdd.length < 50) {
    let numberArray = Math.ceil(Math.random() * 100);

    if (numberArray % 2 === 0 && arrayOdd.length < 50) arrayOdd.push(numberArray);
    if (numberArray % 2 === 1 && arrayEven.length < 50) arrayEven.push(numberArray);
  }
}
function sumArray(arrayEven, arrayOdd) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < arrayEven.length; i++) {
    sumEven += arrayEven[i];
  }

  for (let i = 0; i < arrayOdd.length; i++) {
    sumOdd += arrayOdd[i];
  }

  return { sumEven, sumOdd };
}

function avgArray(arrayEven, arrayOdd) {
  let avgEven = 0;
  let avgOdd = 0;
  avgEven = _sum.sumEven / arrayEven.length;
  avgOdd = _sum.sumOdd / arrayOdd.length;

  return { avgEven, avgOdd };
}

function minArray(arrayEven, arrayOdd) {
  let minEven = arrayEven[0];
  let minOdd = arrayOdd[0];

  for (let i = 1; i < arrayEven.length; i++) {
    if (arrayEven[i] < minEven) {
      minEven = arrayEven[i];
    }
  }

  for (let i = 1; i < arrayOdd.length; i++) {
    if (arrayOdd[i] < minOdd) {
      minOdd = arrayOdd[i];
    }
  }

  return { minEven, minOdd };
}

function maxArray(arrayEven, arrayOdd) {
  let maxEven = arrayEven[0];
  let maxOdd = arrayOdd[0];

  for (let i = 1; i < arrayEven.length; i++) {
    if (arrayEven[i] > maxEven) {
      maxEven = arrayEven[i];
    }
  }

  for (let i = 1; i < arrayOdd.length; i++) {
    if (arrayOdd[i] > maxOdd) {
      maxOdd = arrayOdd[i];
    }
  }

  return { maxEven, maxOdd };
}

function comSum(_sum) {
  if (_sum.sumEven === _sum.sumOdd) {
    return "Total Array Ganjil = Total Array Genap";
  } else if (_sum.sumEven > _sum.sumOdd) {
    return "Total Array Ganjil lebih besar daripada Total Array Genap";
  } else if (_sum.sumEven < _sum.sumOdd) {
    return "Total Array Genap lebih besar daripada Total Array Ganjil";
  }
}

function comAvg(_avg) {
  if (_avg.avgEven === _avg.avgOdd) {
    return "Rata - Rata Array Ganjil = Rata - Rata Array Genap";
  } else if (_avg.avgEven > _avg.avgOdd) {
    return "Rata - Rata Array Ganjil lebih besar daripada Rata - Rata Array Genap";
  } else if (_avg.avgEven < _avg.avgOdd) {
    return "Rata - Rata Array Genap lebih besar daripada Rata - Rata Array Ganjil";
  }
}

function comMin(_min) {
  if (_min.minEven === _min.minOdd) {
    return "Nilai Minimal Array Ganjil = Nilai Minimal Array Genap";
  } else if (_min.minEven > _min.minOdd) {
    return "Nilai Minimal Array Ganjil lebih besar daripada Nilai Minimal Array Genap";
  } else if (_min.minEven < _min.minOdd) {
    return "Nilai Minimal Array Genap lebih besar daripada Nilai Minimal Array Ganjil";
  }
}

function comMax(_max) {
  if (_max.maxEven === _max.maxOdd) {
    return "Nilai Maksimal Array Ganjil = Nilai Maksimal Array Genap";
  } else if (_max.maxEven > _max.maxOdd) {
    return "Nilai Maksimal Array Ganjil lebih besar daripada Nilai Maksimal Array Genap";
  } else if (_max.maxEven < _max.maxOdd) {
    return "Nilai Maksimal Array Genap lebih besar daripada Nilai Maksimal Array Ganjil";
  }
}

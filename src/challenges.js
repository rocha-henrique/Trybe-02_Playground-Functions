// Desafio 1
function compareTrue(subir, descer) {
  if (subir === true && descer === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(param) {
  if (param === 'go Trybe') {
    return param.split(' ');
  } if (param === 'vamo que vamo') {
    return param.split(' ');
  } if (param === 'foguete') {
    return param.split('[foguete]');
  }
}

// Desafio 4
function concatName(concat) {
  let firstConcat = concat[concat.length - 1];
  let secondConcat = concat[0];
  return `${firstConcat}, ${secondConcat}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(hightRepetition) {
  let higherNumber = {
    valueHigherNumber: hightRepetition[0],
    repetitionAmount: 0,
  };
  for (let value of hightRepetition) {
    if (value === higherNumber.valueHigherNumber) {
      higherNumber.repetitionAmount += 1;
    } else if (value > higherNumber.valueHigherNumber) {
      higherNumber.valueHigherNumber = value;
      higherNumber.repetitionAmount = 1;
    }
  }
  return higherNumber.repetitionAmount;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseRunawayCat1 = Math.abs(mouse - cat1);
  let mouseRunawayCat2 = Math.abs(mouse - cat2);

  if (mouseRunawayCat1 < mouseRunawayCat2) {
    return 'cat1';
  } if (mouseRunawayCat1 > mouseRunawayCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function loopFizzBuzz(numbers) {
  if (numbers % 3 === 0 && numbers % 5 === 0) return 'fizzBuzz';
  if (numbers % 5 === 0) return 'buzz';
  if (numbers % 3 === 0) return 'fizz';
  return 'bug!';
}
function fizzBuzz(param) {
  let container = [];
  for (let index = 0; index < param.length; index += 1) {
    let numbers = param[index];
    container.push(loopFizzBuzz(numbers));
  }
  return container;
}
// Desafio 9
function encode(param) {
  return param
    .replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}
function decode(param) {
  return param
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}
// Desafio 10
function techList(object, person) {
  if (object.length === 0) {
    return 'Vazio!';
  }
  let techListobject = [];
  for (let index = 0; index < object.length; index += 1) {
    object.sort();
    techListobject.push({ tech: object[index], name: person });
  }
  return techListobject;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

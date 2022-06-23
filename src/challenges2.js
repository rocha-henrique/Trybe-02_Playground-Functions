// Desafio 11
function diferentNumber(numbers) {
  return numbers.length === 11;
}

function bigger9smaller0(numbers) {
  for (let number of numbers) {
    if (number < 0 || number > 9) {
      return false;
    }
  }
  return true;
}

function repeated3Time(currentNumber, numbers) {
  let count = 0;
  for (let number of numbers) {
    if (currentNumber === number) {
      count += 1;
    }
  }
  return count < 3;
}

function NumbersValid(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (!repeated3Time(numbers[index], numbers)) {
      return false;
    }
  }
  return bigger9smaller0(numbers);
}

function generatePhoneNumber(numbers) {
  if (!diferentNumber(numbers)) {
    return 'Array com tamanho incorreto.';
  }
  if (!NumbersValid(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function getNumber(param) {
  let regex = /\d+/g;
  let numInString = param.match(regex);
  let stringToNum = numInString.map(Number);
  return stringToNum;
}

function hydrate(param) {
  let galao = getNumber(param);
  let result = 0;
  for (let index = 0; index < galao.length; index += 1) {
    result += galao[index];
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

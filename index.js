let tambah = document.querySelector(`#add`)

function add() {
  numberOne = Number(document.getElementById(`input-one`).value)
  numberTwo = Number(document.getElementById(`input-two`).value)
  add = numberOne + numberTwo
  document.getElementById(`result`).innerHTML = add;
}
tambah.addEventListener('click', add)


let kurang = document.querySelector(`#substract`)

function substract() {
  numberOne = Number(document.getElementById(`input-one`).value)
  numberTwo = Number(document.getElementById(`input-two`).value)
  substract = numberOne - numberTwo
  document.getElementById(`result`).innerHTML = substract;
}
kurang.addEventListener('click', substract)


let kali = document.querySelector(`#multiply`)

function multiply() {
  numberOne = Number(document.getElementById(`input-one`).value)
  numberTwo = Number(document.getElementById(`input-two`).value)
  multiply = numberOne * numberTwo
  document.getElementById(`result`).innerHTML = multiply;
}
kali.addEventListener('click', multiply)


let bagi = document.querySelector(`#divide`)

function divide() {
  numberOne = Number(document.getElementById(`input-one`).value)
  numberTwo = Number(document.getElementById(`input-two`).value)
  divide = numberOne / numberTwo
  document.getElementById(`result`).innerHTML = divide;
}
bagi.addEventListener('click', divide)


let sisaBagi = document.querySelector(`#modulo`)

function modulo() {
  numberOne = Number(document.getElementById(`input-one`).value)
  numberTwo = Number(document.getElementById(`input-two`).value)
  modulo = numberOne % numberTwo
  document.getElementById(`result`).innerHTML = modulo;
}
sisaBagi.addEventListener('click', modulo)
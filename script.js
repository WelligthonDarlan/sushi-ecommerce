const btnPlateAll = document.getElementById('btnPlateAll')
const btnPlateA = document.getElementById('btnPlateA')
const btnPlateB = document.getElementById('btnPlateB')
const btnPlateC = document.getElementById('btnPlateC')
const btnPlateD = document.getElementById('btnPlateD')

const plateAll = document.getElementsByClassName('plateAll')
const plateA = document.getElementsByClassName('plateA')
const plateB = document.getElementsByClassName('plateB')
const plateC = document.getElementsByClassName('plateC')
const plateD = document.getElementsByClassName('plateD')

function clearAll() {
  const plateAllArrayOff = Array.from(plateAll)
  plateAllArrayOff.forEach((element) => {
    element.classList.remove('plateOn')
  })
}

function initiallizen(){

//Inicia com todos ativos
const plateAllArray = Array.from(plateAll)
plateAllArray.forEach((element) => {
  element.classList.add('plateOn')
});

//BTN ALL
btnPlateAll.addEventListener('click', () => {
  const plateAllArray = Array.from(plateAll)
  plateAllArray.forEach((element) => {
    element.classList.add('plateOn')
  });
})

//BTN A
btnPlateA.addEventListener('click', () => {
  clearAll()
  const plateAArray = Array.from(plateA)
  plateAArray.forEach((element) => {
    element.classList.add('plateOn')
  });
})

//BTN B
btnPlateB.addEventListener('click', () => {
  clearAll()
  const plateBArray = Array.from(plateB)
  plateBArray.forEach((element) => {
    element.classList.add('plateOn')
  });
})

//BTN C
btnPlateC.addEventListener('click', () => {
  clearAll()
  const plateCArray = Array.from(plateC)
  plateCArray.forEach((element) => {
    element.classList.add('plateOn')
  });
})

//BTN D
btnPlateD.addEventListener('click', () => {
  clearAll()
  const plateDArray = Array.from(plateD)
  plateDArray.forEach((element) => {
    element.classList.add('plateOn')
  });
})

}

initiallizen()

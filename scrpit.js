
const tabellone = document.getElementById('tabellone')
const numeriEstratti = new Set()   /*Crea Tabella*/


for (let i = 1; i <= 76; i++) {
  const cella = document.createElement('div') /*Popolamento celle*/
  cella.classList.add('cella')
  cella.textContent = i
  cella.id = 'cella-' + i
  tabellone.appendChild(cella)
}


let numeriDisponibili = Array.from({length: 76}, (_, i) => i + 1) /* Lista numeri disponibili*/

const estraiNumero = () => {
  if (numeriDisponibili.length === 0) {
    alert("Tutti i numeri sono stati estratti!") /* Funzione per estrarre un numero*/
    return
  }

  const indice = Math.floor(Math.random() * numeriDisponibili.length)
  const numero = numeriDisponibili[indice] /* Selezione casuale di un numero dalla lista*/

  numeriDisponibili.splice(indice, 1)   /*Rimuovi il numero estratto dalla lista*/
  
  numeriEstratti.add(numero) /*Aggiungo il numero al set dei numeri estratti*/

  
  const cella = document.getElementById('cella-' + numero)
  cella.classList.add('estratto')

  alert("Numero estratto: " + numero) /*Evidenzio la cella corrispondente*/
};

document.getElementById('estraBtn').addEventListener('click', estraiNumero)

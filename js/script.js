// Dichiaro variabili

let nome, cognome, favColor, randomNumber, pwdGen;

// Chiedo il nome all'utente

nome = prompt("Inserisci il tuo nome");

// Chiedo il cognome all'utente

cognome = prompt("Inserisci il tuo cognome");

// Chiedo il colore preferito all'utente

favColor = prompt("Inserisci il tuo colore preferito");

// variabile numero random

randomNumber = Math.floor(Math.random() * 100);

// Variabile con classe generata

pwdGen = nome + cognome + favColor + randomNumber;

// Inserisci pwd generata nell'id in html

document.getElementById("pwd").innerHTML = pwdGen

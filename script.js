// script.js
console.log('Hello from script.js');

// Find the existing element by its ID
var targetDiv = document.getElementById('div-proxzar-getresp');

// Create an h1 element
var h1 = document.createElement('h1');
h1.textContent = 'Hello, Vamsi';

// Append the h1 element to the targetDiv
targetDiv.appendChild(h1);

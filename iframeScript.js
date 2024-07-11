// script2.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello from script2.js");

  // Find the existing element by its ID
  var targetDiv = document.getElementById("div-proxzar-getresp");

  if (targetDiv) {
    // Create an iframe element
    var iframe = document.createElement("iframe");
    iframe.src = "https://vamsi12321.github.io/my-scripts/index.html"; // Replace with your iframe source URL
    iframe.width = "600";
    iframe.height = "400";

    // Append the iframe element to the targetDiv
    targetDiv.appendChild(iframe);
  } else {
    console.error('Element with id "div-proxzar-getresp" not found.');
  }
});

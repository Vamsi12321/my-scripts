// script2.js

  console.log("Hello from script2.js");

  // Find the existing element by its ID
  var targetDiv = document.getElementById("div-proxzar-getresp");

  if (targetDiv) {
    // Create an iframe element
    // window.addEventListener("load",function(){
      var iframe = document.createElement("iframe");
    iframe.setAttribute("id","myIframe")
    iframe.src = "https://vamsi12321.github.io/iframeHtml/index.html"; // Replace with your iframe source URL
    iframe.width = "100%";
    iframe.height = "400";

    // Append the iframe element to the targetDiv
    targetDiv.appendChild(iframe);
    // }
    // )
    
  } else {
    console.error('Element with id "div-proxzar-getresp" not found.');
  }


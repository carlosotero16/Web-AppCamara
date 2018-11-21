// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false };
//var constraints = { facingMode: { exact: "environment" }};

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
        track = stream.getTracks()[0];
        cameraView.srcObject = stream;
    })
    .catch(function(error) {
        console.error("Oops. Algo salió mal.", error);
    });
}
// Take a picture when cameraTrigger is tapped
cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    //cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.src = cameraSensor.toDataURL("images/");
    cameraOutput.classList.add("taken");

  
  
     
    var dataURL = cameraSensor.toDataURL("images/png");


    const url = "https://kontrata-ocr-api.herokuapp.com/recognize";

    var imagenDireccion="C:\Users\cotero\Downloads\cheque.jpg";

   fetch(url, {
        method: 'POST', 
        body: 'image:'+imagenDireccion, // JSON.stringify({ image: imagenDireccion }),// data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(response => console.log('correcto',response)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)));
    
    //fetch(url, {
    //    method: "POST",
    //    headers: { 'Content-Type': 'multipart/form-data' },
    //    // body: new FormData(document.getElementById("inputform")),
    //    // -- or --
    //    body : JSON.stringify({
    //        image: document.getElementById('imgupload').value,
    //    })
    //}).then(
    //    response => response.text() 
    //).then(
    //    html => console.log(html)
      
    //);
    
};

//alert("Resultado: " + response.text())




// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);



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
    cameraSensor.getContext("2d").drawImage(cameraView, -1, -1);
    //cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.src = cameraSensor.toDataURL("images/jpg");
    cameraOutput.classList.add("taken");

    //funcion convertir a imagen.
    convertCanvasToImage(cameraOutput);
  
    var dataURL = cameraSensor.toDataURL("images/jpg");



    //fetch(url, {
    //    method: "POST",
    //    mode: "cors",
    //    headers: { 'Content-Type': 'multipart/form-data' },
    //    body: new FormData(document.getElementById("taken")),
    //    // -- or --
    //    //body : JSON.stringify({
    //    //    image: document.getElementById('imgupload').value,
    //    //})
    //}).then(
    //    response => response.text() 
    //).then(
    //    html => console.log(html)
      
    //);
    
};

//alert("Resultado: " + response.text())




////funcion convertir a imagen 

function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = cameraSensor.toDataURL("images/png");
    image.crossOrigin = "anonymous";
   // return image;

    alert("Imagen analizada. " + image);

    const url = "https://kontrata-ocr-api.herokuapp.com/recognize";



    fetch(url, {
        method: 'POST',
        mode: "cors",
        body: 'image:'+image,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(
        response => response.text()
    ).then(
        html => console.log(html)

    );


}

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

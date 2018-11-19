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
    cameraOutput.src = cameraSensor.toDataURL("image/jpeg");
    cameraOutput.classList.add("taken");

   // var image = cameraSensor.toDataURL("image/jpeg").replace("image/png", "image/octet-stream");

   

  
   
};

//guarda imagen 
function download() {
    //document.getElementById("camera--trigger").download = "image/image.png";
    //document.getElementById("camera--trigger").href = document.getElementById("camera--sensor").toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    var png = ReImg.fromCanvas(document.getElementById('camera--sensor')).toPng();

    alert("Imagen guardada." + png)
};

function convertCanvasToPng() {

    img.width = cameraView.videoWidth;
    img.height = cameraView.videoHeight;
    img.getContext("2d").drawImage(cameraView, 0, 0);
    output.src = img.toDataURL("image/png");

    var img = ReImg.fromCanvas(document.querySelector('#camera--sensor')).toPng();


    var output = document.querySelector('#camera--output');
    output.innerHTML = '';
    output.appendChild(img);

    alert("Imagen guardada: " + output.appendChild(img));
};

function downloadCanvasAsPng() {

    ReImg.fromCanvas(document.querySelector("#camera--sensor")).downloadPng();
}






// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);

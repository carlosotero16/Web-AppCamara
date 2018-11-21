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

  
  
     
   
    var dataURL = cameraSensor.toDataURL("images/jpg");


    const url = "https://kontrata-ocr-api.herokuapp.com/recognize";

    var imagenDireccion="C:\Users\cotero\Downloads\cheque.jpg";

    //fetch(url, {
    //    method: 'POST',
    //    mode:"cors",
    //    body: 'image:'+imagenDireccion, // JSON.stringify({ image: imagenDireccion }),// data can be `string` or {object}!
    //    headers:{
    //        'Content-Type': 'application/json'
    //    }
    //}).then(res => res.json())
    //.catch(error => console.error('Error:', error))
    //.then(response => console.log('Success:', response.text()));

    var formData  = new FormData();

   
        formData.append(image, imagenDireccion);
    fetch(url, {
        method: 'POST',
        mode:"cors",
        body: formData
    }).then(function (response) {
       
        console.log("Correcto: ", response)
        });

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




// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);



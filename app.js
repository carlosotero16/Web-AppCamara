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
    cameraOutput.src = cameraSensor.toDataURL("images/");
    cameraOutput.classList.add("taken");

  
  
    var dataURL = cameraSensor.toDataURL("images/");

    $.ajax({
        type: "POST",
        url: "EnvioPost.php",
        data: {
            imgBase64: dataURL
        }
    }).done(function (o) {
        alert("Enviado.");
       
    });

};




// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);




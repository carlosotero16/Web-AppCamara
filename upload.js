


var constraints = { video: { facingMode: "environment" }, audio: false };


//definicion de constantes
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger")
// acceso al dispositivo para utilizar camara.
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
    .catch(function (error) {
        console.error("Oops. Algo salió mal.", error);
    });
}
// tomar imagen de la camara.
cameraTrigger.onclick = function () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("images/png");
    cameraOutput.classList.add("taken");
    cameraOutput.crossOrigin = "anonymous";


}



function ObtenerImagenWS() {

    const url = "https://kontrata-ocr-api.herokuapp.com/recognize";
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const files = document.querySelector('[type=file]').files;
        const formData = new FormData();
        var resultado = "";

        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            formData.append('image', file);
        }

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(response =>response.json())
          .then(data => {
              console.log(data)
              resultado = JSON.stringify(data)

              alert("Numeracion: " + resultado);
          });



        //const url = "https://kontrata-ocr-api.herokuapp.com/recognize";
        //const form = document.querySelector('form');

        //form.addEventListener('submit', e => {
        //    e.preventDefault();

        //    const files = document.querySelector('[type=file]').files;
        //    const formData = new FormData();
        //    var resultado = "";

        //    for (let i = 0; i < files.length; i++) {
        //        let file = files[i];

        //        formData.append('image', file);
        //    }

        //    fetch(url, {
        //        method: 'POST',
        //        body: formData
        //    }).then(response => response.json())
        //      .then(data => {
        //          console.log(data)

        //      });

        //    alert("resultado: " + resultado);


        //}).then(response => {
        //    console.log(response);
        //});
    });



    // Abre la camara despues del request.
    window.addEventListener("load", cameraStart, false);


}




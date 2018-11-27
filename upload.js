


function ObtenerImagenWS() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
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

        fetch(proxyurl + url, {
            method: 'POST',
           
            //mode: 'cors',
            body: formData
        }).then(response =>response.json())
          .then(data => {
              console.log(data)
              resultado = JSON.stringify(data)
              ObtenerTexto(resultado)
              alert("Numeracion: " + resultado);
          }).catch(function (error) {
              alert("Error: " + error);
          });


    });



   


}


function ObtenerTexto(resultado) {

    var texto = resultado;
    var variable1 = "";
    var variable2 = "";
    var variable3 = "";
    var variable4 = "";

    //obtiene el cod de acuerdo al resultado del ws:
    var resCodCuenta = texto.substring(10, 14);
    var resCodCBanco = texto.substring(15, 25);
    var resCodRuta = texto.substring(26, 33);

    //muestra mensaje con el resultado 

    alert("Resultado Final: " +
        "\nCodigo Cuenta: " + resCodCuenta +
        "\nCodigo Banco: " + resCodCBanco +
        "\nCodigo Ruta: " + resCodRuta);


}







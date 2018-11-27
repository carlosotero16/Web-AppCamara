
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
             // alert("Numeracion: " + resultado);
          }).catch(function (error) {
              alert("Error: " + error);
          });


    });



   


}


function ObtenerTexto(resultado) {

    //var texto = resultado;
    //var variable1 = "";
    //var variable2 = "";
    //var variable3 = "";
    //var variable4 = "";

    ////obtiene el cod de acuerdo al resultado del ws:  {"text":"@184@[00502-010[70-5555@"}
    //var resCodCuenta = texto.substring(10, 13);
    //var resCodCBanco = texto.substring(15, 24);
    //var resCodRuta = texto.substring(26, 32);

    ////muestra mensaje con el resultado 

    //alert("Resultado Final: " +
    //    "\nCodigo Cuenta: " + resCodCuenta +
    //    "\nCodigo Banco: " + resCodCBanco +
    //    "\nCodigo Ruta: " + resCodRuta);



    var test_str = resultado;
    //codigo cuenta
    var CodCuentastart_pos = test_str.indexOf('@') + 1;
    var CodCuentaend_pos = test_str.indexOf('@', CodCuentastart_pos);

    var codCuenta = test_str.substring(CodCuentastart_pos, CodCuentaend_pos)

    //codigo banco
    var CodBancotart_pos = test_str.indexOf('[') + 1;
    var CodBancoend_pos = test_str.indexOf('[', CodBancotart_pos);

    var codBanco = test_str.substring(CodBancotart_pos, CodBancoend_pos)


    //transito
    var CodTransitotart_pos = test_str.indexOf('[') + 1;
    var CodTransitoend_pos = test_str.indexOf('-', CodTransitotart_pos);

    var codTransito = test_str.substring(CodTransitotart_pos, CodTransitoend_pos)





    //codigo ruta

   // var eliminarC = resultado.replace(/[[]/, "-");

    var CodRutatart_pos = test_str.indexOf('@[') + 1;
    var CodRutaend_pos = test_str.indexOf('@"', CodRutatart_pos);

    var codRuta = test_str.substring(CodRutatart_pos, CodRutaend_pos)

   

    alert("Resultado Final: " +
     "\nCodigo Cuenta: " + codCuenta +
     "\nCodigo Banco: " + codBanco +
     "\nCodigo Transito: "+ codTransito+
     "\nCodigo Ruta: " + codRuta.replace(/[[]/g, " "));



}



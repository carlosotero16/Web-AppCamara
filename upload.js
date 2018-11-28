
function ObtenerImagenWS() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://kontrata-ocr-api.herokuapp.com/recognize";
    const form = document.querySelector('form');

    swal("Procesando imagen....", {
        buttons: false,
        timer: 5000,
    });


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
              //console.log(data)
              resultado = JSON.stringify(data)
              ObtenerTexto(resultado)
             // alert("Numeracion: " + resultado);
          }).catch(function (error) {
              swal("Error: ", " " + error, "error");
          });


    });



   


}


function ObtenerTexto(resultado) {


    ///cheque prueba cr: {"text":"57141[151[1491001001300"}

    //en cheques de costa rica, banco nacional y bac: solo existe cod cuenta, numero de cuenta y transito.


    var test_str = resultado;
    //codigo cuenta
    var CodCuentastart_pos = test_str.indexOf('text":"') + 7;
    var CodCuentaend_pos = test_str.indexOf('[', CodCuentastart_pos);

    var codCuenta = test_str.substring(CodCuentastart_pos, CodCuentaend_pos)

    //codigo banco
    //var CodBancotart_pos = test_str.indexOf('[') + 1;
    //var CodBancoend_pos = test_str.indexOf('[', CodBancotart_pos);

    //var codBanco = test_str.substring(CodBancotart_pos, CodBancoend_pos)


    //transito
    var CodTransitotart_pos = test_str.indexOf('[') + 1;
    var CodTransitoend_pos = test_str.indexOf('[', CodTransitotart_pos);

    var codTransito = test_str.substring(CodTransitotart_pos, CodTransitoend_pos)





    //codigo ruta

    var CodRutatart_pos = test_str.indexOf('[') + 4;
    var CodRutaend_pos = test_str.indexOf('"}', CodRutatart_pos);

    var codRuta = test_str.substring(CodRutatart_pos, CodRutaend_pos)

   
    var textoCompleto = resultado.replace(/[{"text":"]/g, "");

    var textoCompleto2 = textoCompleto.replace(/[[}@]/g, "");
    
    //mensaje final 
    swal("Resultado Final: ", 
     "\nCodigo Cuenta: " + codCuenta +
      +"\n" +
     //"\nCodigo Banco: " + codBanco +
     "\nCodigo Transito: " + codTransito +
     +"\n"+
     "\nNumero Cuenta: " + codRuta.replace(/[[]/g, " ") +
      +"\n" +
     "\nTexto Completo: " + textoCompleto2
    ,"success");

  

}

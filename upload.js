
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




}




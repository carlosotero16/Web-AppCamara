<!DOCTYPE html>
<?php
header('Access-Control-Allow-Origin: *');
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <title>Scaneo App</title>

    <script type="text/javascript">



    var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	swal("Aviso:","Imagen Cargada Correctamente!" ,"success");
    };


    </script>
</head>
<body>


    <form method="post" enctype="multipart/form-data">

        <label for="camera--trigger">
            <!--<button id="camera--trigger" class="custom-file-upload">Tomar Foto</button>-->
          
            <i class="custom-file-upload" id="image-label">Tomar foto</i>
        </label>
        <!-- <img id="blah" src="#" alt="imagen campo" />-->
        <p><img id="output" class="taken" width="200" height="200" /></p>

        <input type="file" id="camera--trigger" name="files[]" onchange="loadFile(event)" width="200" height="200" multiple>
        <input type="submit" value="Procesar" id="triggerProcesar" onclick="ObtenerImagenWS();" name="submit">


    </form>
    <script src="upload.js"></script>
</body>
</html>

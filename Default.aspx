<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Clasificación de imágenes</title>

     <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="style.css"/>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <!-- Camera -->
    <main id="camera">
        <!-- Camera sensor -->
        <canvas id="camera--sensor"></canvas>
        <!-- Camera view -->
        <video id="camera--view" autoplay playsinline></video>
        <!-- Camera output -->
        <img src="//:0" alt="" id="camera--output"/>
        <!-- Camera trigger -->
        <button id="camera--trigger">Tomar Foto</button>
    </main>
    <!-- Reference to your JavaScript file -->
    <script src="app.js"></script>
    </div>
    </form>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/index.css?v=<?php echo time(); ?>">
    <style>body { font-family: "Inter", sans-serif;}</style>
    <title>Document</title>
</head>
<body>

    <!-- ENCABEZADO -->
    <header class="menu">
        <nav class="menu_navegacion">
            <ul class="menu_lista_navegacion">
                <li class="menu_asignatura">
                    <button class="menu_boton_desplegar" type="button">Asignaturas</button>
                    <ul class="menu_mostrar">
                        <li class="menu_item">Ingles</li>
                        <li class="menu_item">Programación</li>
                        <li class="menu_item">Digitalización</li>
                        <li class="menu_item">Sostenibilidad</li>
                        <li class="menu_item">Entornos de desarrollo</li>
                        <li class="menu_item">Lenguajes de marcas</li>
                    </ul>      
                </li>
                <li class="menu_cursos">
                    <button class="menu_boton_desplegar" type="button">Programa</button>
                    <ul class="menu_mostrar">
                        <li class="menu_item">DAM</li>
                        <li class="menu_item">Relaciones Internacionales</li>
                    </ul>
                </li>
                <li class="menu_buscar">
                    <button class="boton_modal" type="button">Buscar</button>
                </li>
                <li class="menu_acceder">
                    <button class="boton_modal" type="button">Acceder</button>
                </li>
            </ul>
        </nav>
     </header>

     <main  id="mainContenedor" class="contenedor_main">
        <canvas id="canvasHome" class="canvas_home"></canvas>
     </main>
<!--  
    <table style="width: 100%; ">
        <tr>
            <td rowspan="2" class="tdEncabezado" style="width: 16%;"> 
                <img class="imagen" src="img/logo1 4.png" width="90">
            </td>
            <td colspan="4"> &nbsp</td>
        </tr>
        <tr class = "tdSuperiorMenu">
            <td width = "21%"><a href="1upload.html"> Upload</a></td>
            <td width = "21%"><a href="2search.html"> Search</a></td>
            <td width = "21%"><a href="3popular.html"> Popular</a></td>
            <td width = "21%"><a href="4forum.html"> Forum</a></td>
        </tr>
    </table>
    
    <hr/>
    
    <h1> Welcome to <span class="W">W</span><span class="M">M</span>ikiApuntes.com </h1>
    <h3> <span class="W"> your</span><span class="M"> Mikeldi students </span> source for reliable classnotes </h3>
 -->
    <!-- IMAGEN -->

<!--     <img src="img/students/students2.png" width="100%">
    <br/> -->

    <!-- TABLA UPLOAD / SEARCH -->

<!--     <table border="px" style="width: 100%;">
        <tr>
            <td class="tdUploadSearch" style="width: 50%;"><a href="1upload.html">
                    <center> UPLOAD 
                </a><br/> your classnotes </center>
            </td>
            <td class="tdUploadSearch" style="width: 50%;"><a href="2search.html"><center> SEARCH </a><br/> for classnotes </center></td>
        </tr>
    </table> -->

    
    <!-- FOOTER -->

    <!-- <p class="footer"> WikiApuntes® and Mikiapuntes® are trademarks of MrK Entertainment. All rights reserved. ©2026 </p>
    <br/> -->
    <script type="module" src="./js/tamanoCanvas.js?v=<?php echo time(); ?>"></script>
</body>
</html>
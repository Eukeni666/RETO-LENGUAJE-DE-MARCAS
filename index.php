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
    <script type="module" src="./js/main.js?v=<?php echo time(); ?>"></script>
</body>
</html>

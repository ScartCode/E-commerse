<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <header>
  <div id="cabecera">
        <?php include 'modelo/cabecera.php'; ?>
    </div>

    <div id="contenido">
        <?php include 'modelo/busqueda.php'; ?>
    </div>
  </header>
  <div id="contenido">
        <?php include 'modelo/sliderprincipal.php'; ?>
    </div>
  <div class="flex">
        <?php include 'modelo/minilogos.php'; ?>
    </div>
  <div>
        <?php include 'modelo/banner2.php'; ?>
  </div>

  <div class="slider4index">
        <?php include 'modelo/slider4.php'; ?>
  </div>
  
  <div>
        <?php include 'modelo/banner3.php'  ?>
  </div>
</body>
</html>



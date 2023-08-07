<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="CSS/slider.css">

</head>
<body>
<div class="slider">
  <div class="slider-images">

      <div class="slide">
      <img src="images/slider-1.jpg" alt="Imagen 1">         
      </div>


      <div class="slide">
      <img src="images/slider-2.jpg" alt="Imagen 1">
      </div>


      <div class="slide">
      <img src="images/slider-3.jpg" alt="Imagen 1">
      </div>


  </div>


  <div class="slider-controls">
    <div class="slider-menu">
      <div class="slider-menu-item active" onclick="changeSlide(0)"></div>
      <div class="slider-menu-item" onclick="changeSlide(1)"></div>
      <div class="slider-menu-item" onclick="changeSlide(2)"></div>
    </div>
  </div>
</div>
<script src="JS/slider.js"></script>
</body>
</html>



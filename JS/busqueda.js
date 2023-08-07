document.getElementById('searchButton').addEventListener('click', function() {

  const searchTerm = document.getElementById('searchInput').value;

  window.location.href = `Modelo/productos.php?busqueda=${encodeURIComponent(searchTerm)}`;
});
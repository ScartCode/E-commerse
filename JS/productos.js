document.getElementById('searchButton').addEventListener('click', searchProductos)

let urlBase = 'https://fakestoreapi.com/products'
let apy_key = '980de7e8b571429c73113726c55643a1'
let resultados = document.getElementById('results')











function searchProductos(){
  let searchInput = document.getElementById('searchInput').value

  resultados.innerHTML = '<p>cargando....</p>'

fetch(`${urlBase}/${searchInput}`)
  .then(response => response.json())
  .then(response => mostrarMovies(response))
  .catch(error => console.error('Error:', error));
}

function mostrarMovies(movie){
  resultados.innerHTML = ''

  if(movie.length === 0){
    resultados.innerHTML = '<p>No se encontraron resultados para su busqueda</p>'
      return
  }

    let movieDiv = document.createElement('div')
    movieDiv.classList.add('movie')

    

    let movieImg = movie.image
    let resultadoimg = document.createElement('img')
    resultadoimg.src = movieImg
  
    resultadoimg.addEventListener('load', () => {
      let titulo = document.createElement('h2')
      titulo.textContent = movie.category

      let descripcion = document.createElement('p')
      descripcion.textContent = movie.description
  
      let precio = document.createElement('data')
      precio.value = movie.price
      precio.textContent = movie.price
    
    
      movieDiv.appendChild(titulo)
      movieDiv.appendChild(resultadoimg)
      movieDiv.appendChild(descripcion)
      
      movieDiv.appendChild(precio)
      resultados.appendChild(movieDiv)
    });
}
















// funcion para obtener producto de la url


function obtenerParametroBusqueda() {
  const parametros = new URLSearchParams(window.location.search);
  return parametros.get('busqueda');
}
console.log(obtenerParametroBusqueda().parametros)


function mostrarProductosEnBusqueda() {
  const busqueda = obtenerParametroBusqueda();
  if (busqueda) {
    fetch(`${urlBase}/${encodeURIComponent(busqueda)}`)
      .then(response => response.json())
      .then(response => mostrarProductos(response))
      .catch(error => console.error('Error:', error));
  } else {
    resultados.innerHTML = '<p>No se proporcionó un término de búsqueda.</p>';
  }
}

function mostrarProductos(productos) {
  resultados.innerHTML = '';

  if (productos.length === 0) {
    resultados.innerHTML = '<p>No se encontraron resultados para su búsqueda.</p>';
    return;
  }

  // Aquí puedes crear y mostrar elementos HTML para los productos
  
  let productosDiv = document.createElement('div')
  productosDiv.classList.add('movie')

  

  let movieImg = productos.image
  let resultadoimg = document.createElement('img')
  resultadoimg.src = movieImg

  resultadoimg.addEventListener('load', () => {
    let titulo = document.createElement('h2')
    titulo.textContent = productos.category

    let descripcion = document.createElement('p')
    descripcion.textContent = productos.description

    let precio = document.createElement('data')
    precio.value = productos.price
    precio.textContent = productos.price
  
  
    productosDiv.appendChild(titulo)
    productosDiv.appendChild(resultadoimg)
    productosDiv.appendChild(descripcion)
    
    productosDiv.appendChild(precio)
    resultados.appendChild(productosDiv)
  });
}






mostrarProductosEnBusqueda();
import { useEffect, useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Catalog from './components/catalog'

function App() {
  const [filter, setFilter] = useState("Horror")
  const [content, setContent] = useState([])
  const [clave, setClave] = useState("")

  useEffect(() => {
    if (!clave) {
      return;
    }

    const dataFiltrada = content.filter(c =>
      c.title.toLowerCase().includes(clave.toLowerCase())
    );

    setContent(dataFiltrada);
  }, [clave]);

  const manejarCambioFilter = (nuevoValor) => {
    setFilter(nuevoValor);
  };
  const manejarCambioClave = (nuevoValor) => {
    setClave(nuevoValor);
  };

  useEffect(() => {
    fetch(`https://api.imdbapi.dev/titles?genres=${filter}`)
      .then(response => response.json())
      .then(data => {
        const results = data.titles.map((Title, index) => ({
          id: index,
          title: Title.primaryTitle,
          year: Title.startYear,
          type: Title.type,
          poster: Title.primaryImage.url ? Title.primaryImage.url : 'https://via.placeholder.com/150',
          genres: Title.genres,
          plot: Title.plot ? Title.plot : 'No plot available',
          rating: Title.rating ? Title.rating : 'N/A'
        }));
        {results ? setContent(results) : setContent([]);}
      })
      .catch(error => {
        console.error('Error obteniendo los datos de la Api:', error);
        setContent([])
      });
  }, [filter]);

  let vacio =[{ id: "0",
          title: "no hay peliculas",
          year: "Title.startYear" ,
          type:" Title.type",
          poster:  'https://via.placeholder.com/150',
          genres: "Title.genres",
          plot:  'No plot available',
          rating:  'N/A'}]
  return (
    <>
        <Toolbar setF={manejarCambioFilter} setC={manejarCambioClave} filter={filter}/>
        <Catalog Titles={content ? content : vacio} />
    </>
  )
}

export default App

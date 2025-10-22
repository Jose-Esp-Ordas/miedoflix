import { useEffect, useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import Catalog from './components/catalog'

function App() {
  const [filter, setFilter] = useState("Horror")
  const [content, setContent] = useState([])
  const [clave, setClave] = useState("")

  useEffect(() => {
    setContent(content.map((c,i) => 
      c.title.includes(clave)
    ))
  
  }, [clave]) 
  
  useEffect(() => {
    fetch(`https://api.imdbapi.dev/titles?genres=${filter}`)
      .then(response => response.json())
      .then(data => {
        const results = data.titles.map((Title, index) => ({
          id: index,
          title: Title.primaryTitle,
          /* year: Title.startYear,
          rating: Title.rating,
          type: Title.type,
          poster: Title.primaryImage.url,
          genres: Title.genres,
          plot: Title.plot */
        }));
        console.log(results)
        setContent(results);
      })
      .catch(error => {
        console.error('Error obteniendo los datos de la Api:', error);
        setContent([])
      });
  }, [filter]);


  return (
    <>
        <Toolbar setFilter={setFilter} setClave={setClave} filter={filter}/>
        <Catalog Titles={content} />
    </>
  )
}

export default App

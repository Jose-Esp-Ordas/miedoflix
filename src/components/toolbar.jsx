import {useState} from 'react'

const Toolbar = (setFilter, setClave, filter) => {
  const [word, setWord] = useState("")
  return (
    <>
    <header>
        <input 
          type="text" 
          placeholder="Buscar por género..."
          value={word}
          onChange={(e) => {
            setWord(e.target.value)
          }}
        />
        <button onClick={() => setClave(word)}>Buscar</button> 
        <div className='flex justify-center gap-2'>
          <button className={(filter == "Horror") ? "text-2xl text-orange-600" : "text-blue-800"} onClick={() => setFilter("Horror")}>Horror</button>
          <button className={(filter == "Thriller") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setFilter("Thriller")}>Thriller</button>
          <button className={(filter == "Mystery") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setFilter("Mystery")}>Mystery</button>
          <button className={(filter == "Fantasy") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setFilter("Fantasy")}>Fantasy</button>
          <button className={(filter == "Supernatural") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setFilter("Supernatural")}>Supernatural</button>
        </div>

    </header>
    </>
  )
}

export default Toolbar
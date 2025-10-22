import {useState} from 'react'

const Toolbar = ({setF, setC, filter}) => {
  const [word, setWord] = useState("")
  return (
    <>
    <header>
        <div className=' bg-amber-700 rounded-2xl p-4 flex justify-center flex-row items-center gap-4 m-4'>
          <h1 className=' text-4xl text-red-600 bg-black'>Temporada de Terror por Jorge Bello</h1>
          <input 
            type="text" 
            placeholder="Introduce un título"
            value={word}
            onChange={(e) => {
              setWord(e.target.value)
            }}
            className='bg-black rounded mx-4 pl-2'
          />
          <button className="rounded text-white bg-black cursor-pointer"onClick={() => setC(word)}>Buscar</button> 
        </div>
        <div className='flex justify-center gap-2 bg-gray-800 p-4 w-4/5 mx-auto'>
          <button className={(filter == "Horror") ? "text-2xl text-orange-600" : "text-blue-800"} onClick={() => setF("Horror")}>Horror</button>
          <button className={(filter == "Thriller") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setF("Thriller")}>Thriller</button>
          <button className={(filter == "Mystery") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setF("Mystery")}>Mystery</button>
          <button className={(filter == "Fantasy") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setF("Fantasy")}>Fantasy</button>
          <button className={(filter == "Supernatural") ? "text-2xl text-orange-600": "text-blue-800"} onClick={() => setF("Supernatural")}>Supernatural</button>
        </div>

    </header>
    </>
  )
}

export default Toolbar

const movieCard = ({title}) => {
    
  return (
    <>
        <div className=" flex flex-col m-2 border-2 border-amber-600 rounded ">
            <h1>{title.title}</h1>
            <p>Año: {title.year}</p>
            <p>Géneros: {title.type}</p>
            <img src={title.poster} alt={title.title} />
        </div>
    </>
  )
}

export default movieCard
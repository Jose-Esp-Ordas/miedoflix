import MovieCard from './movieCard'
const catalog = ({Titles}) => {
  return (
    <>
        <div><h2>Catálogo</h2></div>
        <div className=' grid grid-cols-6'>
            {Titles.map((title,id) => (
            <MovieCard 
                key={id}
                title={title}
                />
            ))}
        </div>
    </>
  )
}

export default catalog
import MovieCard from './movieCard'
const catalog = ({Titles}) => {
  return (
    <>
        <div>
            <h2 className=' py-8 text-5xl text-amber-800'>Catálogo</h2>
            <div className=' grid grid-cols-6'>
                {Titles.map((title,id) => (
                <MovieCard 
                    key={id}
                    title={title}
                    />
                ))}
            </div>
        </div>
    </>
  )
}

export default catalog
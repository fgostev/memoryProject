
const Card = ({posters, gameHandler}) => {


    return(
        

        <div className="cards">
        {posters.map((poster) => {
          return(
        <div className="cardContainer" key={poster.id}>    
          <img   onClick={gameHandler} className='card' src={poster.src} alt={poster.title} />
        </div>    
     )})}

        </div>
    )
}

export default Card;

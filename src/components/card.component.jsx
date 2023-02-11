
const Card = ({posters, gameHandler}) => {


    return(
        

        <div className="cardContainer">
        {posters.map((poster) => {
          return(
             
          <img   onClick={gameHandler} className='card' src={poster.src} alt={poster.title} key={poster.id}/>

     )})}

        </div>
    )
}

export default Card;

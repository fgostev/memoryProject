
const Card = ({posters, setPosters,
clickedCards, setClickedCards,
score, setScore}) => {


    const randomizeSort = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const randomizePosters = () => {
        let postersArray = posters;
        let randomizedArray = randomizeSort([...postersArray]);
        setPosters(randomizedArray);
        console.log(posters);
    }

    // save clicked card
    // create an array with previously clicked cards
    // if the clicked card matches previously clicked cards reset score

    const saveClickedCard = (e) => {
       let postersArray = [...posters];
       let newArray = [...clickedCards];
       const clickedCard = e.target.alt;
       console.log(newArray.includes(clickedCard));

            if(newArray.includes(clickedCard)){
                console.log("NNOOOOOOO!");

                // stopped here, now think how to impment the score
                // perhaps change the way score state is built
                setScore([0,1]);
            }else{
                console.log("card added!")
                newArray.push(clickedCard);
                setClickedCards(newArray);
            }

            // if(!newArray.includes(clickedCard)){
            //     console.log("NNOOOOOOO!")
                
            // }else{
            //     console.log("TFDGDFGDF!")
            //     setClickedCards(newArray);
            // }

       console.log(newArray);
    //    return newArray;
    }

    return(
        

        <div className="cardContainer">
        {posters.map((poster) => {
          return(
             
          <img   onClick={saveClickedCard} className='card' src={poster.src} alt={poster.title} key={poster.id}/>

     )})}

        </div>
    )
}

export default Card;

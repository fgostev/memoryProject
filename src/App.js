import {useState, useEffect} from 'react';

// import GameBoard from "./components/gameBoard.component";
import Header from "./components/header.component";
import Images from './components/images.component';
import Card from './components/card.component';


function App() {

  const randomizeSort = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const randomizePosters = () => {
    let postersArray = posters;
    let randomizedArray = randomizeSort([...postersArray]);
    setPosters(randomizedArray);
}

const gameHandler = (e) => {
   let scoreArray = [...score]; 
   let newArray = [...clickedCards];
   const clickedCard = e.target.alt;

        if(newArray.includes(clickedCard)){
            scoreArray[0] = 0;
            scoreArray[1] ++;
            newArray = [];
            setClickedCards(newArray);
            setScore(scoreArray);
        }else{
            newArray.push(clickedCard);
            scoreArray[0] ++;
            setClickedCards(newArray);
            setScore(scoreArray);
        }

        randomizePosters();

}

  const [posters, setPosters] = useState(Images);
  const [score, setScore] = useState([0, 0]);
  const [clickedCards, setClickedCards] = useState([])

  return (
    <div className="App">
          <Header
          score = {score}
          setScore = {setScore} />
          <Card posters = {posters}
            setPosters = {setPosters}
            clickedCards = {clickedCards}
            setClickedCards = {setClickedCards}
            score = {score}
            setScore = {setScore}
            gameHandler = {gameHandler}
          />
          {/* <GameBoard />  */}
    </div>
  );
}

export default App;

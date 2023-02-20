import {useState, useEffect} from 'react';

// import GameBoard from "./components/gameBoard.component";
import Header from "./components/header.component";
import Images from './components/images.component';
import Card from './components/card.component';


function App() {

  const [posters, setPosters] = useState(Images);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([])


  const randomizeSort = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const randomizePosters = () => {
    let postersArray = posters;
    let randomizedArray = randomizeSort([...postersArray]);
    setPosters(randomizedArray);
}

const  bestScoreHandler = () => {
  let bestScoreNum = bestScore;
  if(bestScoreNum < score){
    bestScoreNum = score;
  }
  setBestScore(bestScoreNum);
}

const gameHandler = (e) => {
   let scoreNum = score; 

   let newArray = [...clickedCards];
   const clickedCard = e.target.alt;

        if(newArray.includes(clickedCard)){
            scoreNum = 0;
            newArray = [];
            setClickedCards(newArray);
            setScore(scoreNum);
            bestScoreHandler();
        }else{
            newArray.push(clickedCard);
            scoreNum ++;
            setClickedCards(newArray);
            setScore(scoreNum);
        }

        randomizePosters();

}

  return (
    <div className="App">
          <Header
          score = {score}
          setScore = {setScore} 
          bestScore = {bestScore}
          setBestScore = {setBestScore}
          />
          <Card posters = {posters}
            setPosters = {setPosters}
            clickedCards = {clickedCards}
            setClickedCards = {setClickedCards}
            score = {score}
            setScore = {setScore}
            bestScore = {bestScore}
            setBestScore = {setBestScore}
            gameHandler = {gameHandler}
          />
          {/* <GameBoard />  */}
    </div>
  );
}

export default App;

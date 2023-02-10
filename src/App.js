import {useState, useEffect} from 'react';

// import GameBoard from "./components/gameBoard.component";
import Header from "./components/header.component";
import Images from './components/images.component';
import Card from './components/card.component';


function App() {

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
          />
          {/* <GameBoard />  */}
    </div>
  );
}

export default App;

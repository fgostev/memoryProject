const Header =({score, bestScore}) =>{
    return(
        <div id="header"> 
        <div id="headerLeft">
            <h1>Movie Memory Game</h1>
        </div>
        <div id="headerRight"> 
           <span> Score: {score} </span> <br></br>
           <span> Best Score: {bestScore} </span>
        </div>
        </div>
    )
}

export default Header;

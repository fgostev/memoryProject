const Header =({score}) =>{
    return(
        <div id="header"> 
        <div id="headerLeft">
            <h1>Movie Memory Game</h1>
        </div>
        <div id="headerRight"> 
           <span> Score: {score[0]} </span> <br></br>
           <span> Best Score: {score[1]} </span>
        </div>
        </div>
    )
}

export default Header;

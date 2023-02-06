import {useState} from 'react';

import americanBeauty from "../images/americanBeauty.jpeg";
import casablanca from "../images/casablanca.jpeg"
import crow from "../images/crow.jpeg"
import deadPoet from "../images/deadPoet.jpeg"
import fellowship from "../images/fellowship.jpeg"
import forrestGump from "../images/forrestgump.jpeg"
import karateKid from "../images/karateKid.jpeg"
import matrix from "../images/matrix.jpeg"
import maverick from "../images/maverick.jpeg"
import oneFlew from "../images/oneFlew.jpeg"
import parasite from "../images/parasite.jpeg"
import princessBride from "../images/princessBride.jpeg"
import psycho from "../images/psycho.jpeg"
import returnOfTheKing from "../images/returnOfTheKing.jpeg"
import shawshankRedemption from "../images/shawshankRedemption.jpeg"
import silverLining from "../images/silverLining.jpeg"
import sunshine from "../images/sunshine.jpeg"
import theMartian from "../images/themartian.jpeg"
import theTwoTowers from "../images/theTwoTowers.jpeg"
import truman from "../images/truman.jpeg"


function Card(){
    const [poster, setPoster] = useState([americanBeauty, silverLining,
    casablanca, crow, deadPoet, fellowship, forrestGump, karateKid, matrix,
    maverick, oneFlew, parasite, princessBride, psycho, returnOfTheKing,
    shawshankRedemption, silverLining, sunshine, theMartian, theTwoTowers,
    truman
    ]);

    return(
        <div className="cardContainer">
        <img className="card" src={poster[3]} alt="movie poster"></img>
        </div>
    )
}

export default Card;

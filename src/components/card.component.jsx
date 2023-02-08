import {useState, useEffect} from 'react';

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

    const images = [
        {
            src: americanBeauty,
            title: "American Beauty"
        },
        {
            src: casablanca,
            title: "Casablanca"
        },
        {
            src: crow,
            title: "Crow"
        },
        {
            src: deadPoet,
            title: "Dead Poet Society"
        },
        {
            src: fellowship,
            title: "Lord Of The Rings: The Fellowship Of The Ring"
        },
        {
            src: forrestGump,
            title: "Forrest Gump",
        },
        {
            src: karateKid,
            title: "Karate Kid"
        },
        {
            src: matrix,
            title: "The Matrix"
        },
        {
            src: maverick,
            title: "The Maverick"
        },
        {
            src: oneFlew,
            title: "One Flew Over The Cuckoo's Next"
        },
        {
            src: parasite,
            title: "Parasite"
        },
        {
            src: princessBride,
            title: "The Princess Bride"
        },
        {
            src: psycho,
            title: "Psycho"
        },
        {
            src: returnOfTheKing,
            title: "Lord Of The Rings: The Return Of The King"
        },
        {
            src: shawshankRedemption,
            title: "The Shawshank Redemption"
        },
        {
            src: silverLining,
            title: "The Silver Lining Playbook"
        },
        {
            src: sunshine,
            title: "The Eternal Sunshine Of The Spotless Mind"
        },
        {
            src: theMartian,
            title: "The Martian"
        },
        {
            src: theTwoTowers,
            title: "Lord Of The Rings: The Two Towers"
        },
        {
            src: truman,
            title: "The Truman's Show"
        }
    ]
    const [posters, setPosters] = useState(images);



    const randomizeSort = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const randomizePosters = () => {
        let postersArray = posters;
        let randomizedArray = randomizeSort([...postersArray]);
        setPosters(randomizedArray);
        console.log(posters);
    }

    return(
        

        <div className="cardContainer">
        {posters.map((poster) => {
            
          return(
            <button onClick={randomizePosters}>  
          <img className='card' src={poster.src} alt={poster.title} />
        </button>
     )})}

        </div>
    )
}

export default Card;

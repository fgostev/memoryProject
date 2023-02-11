import americanBeauty from "../images/americanBeauty.jpeg";
import crow from "../images/crow.jpeg"
import fellowship from "../images/fellowship.jpeg"
import forrestGump from "../images/forrestgump.jpeg"
import karateKid from "../images/karateKid.jpeg"
import matrix from "../images/matrix.jpeg"
import oneFlew from "../images/oneFlew.jpeg"
import parasite from "../images/parasite.jpeg"
import psycho from "../images/psycho.jpeg"
import returnOfTheKing from "../images/returnOfTheKing.jpeg"
import shawshankRedemption from "../images/shawshankRedemption.jpeg"
import silverLining from "../images/silverLining.jpeg"
import sunshine from "../images/sunshine.jpeg"
import theMartian from "../images/themartian.jpeg"
import theTwoTowers from "../images/theTwoTowers.jpeg"


import uniqid from 'uniqid';

const Images = () =>{
    const images = [
        {
            src: americanBeauty,
            title: "American Beauty",
            id: uniqid(),
        },
        {
            src: crow,
            title: "Crow",
            id: uniqid(),
        },
        {
            src: fellowship,
            title: "Lord Of The Rings: The Fellowship Of The Ring",
            id: uniqid(),
        },
        {
            src: forrestGump,
            title: "Forrest Gump",
            id: uniqid(),
        },
        {
            src: karateKid,
            title: "Karate Kid",
            id: uniqid()
        },
        {
            src: matrix,
            title: "The Matrix",
            id: uniqid()
        },
        {
            src: oneFlew,
            title: "One Flew Over The Cuckoo's Next",
            id: uniqid()
        },
        {
            src: parasite,
            title: "Parasite",
            id: uniqid()
        },
        {
            src: psycho,
            title: "Psycho",
            id: uniqid()
        },
        {
            src: returnOfTheKing,
            title: "Lord Of The Rings: The Return Of The King",
            id: uniqid()
        },
        {
            src: shawshankRedemption,
            title: "The Shawshank Redemption",
            id: uniqid(),
        },
        {
            src: silverLining,
            title: "The Silver Lining Playbook",
            id: uniqid(),
        },
        {
            src: sunshine,
            title: "The Eternal Sunshine Of The Spotless Mind",
            id: uniqid(),
        },
        {
            src: theMartian,
            title: "The Martian",
            id: uniqid(),
        },
        {
            src: theTwoTowers,
            title: "Lord Of The Rings: The Two Towers",
            id: uniqid()
        },
    ]

    return images;
}

export default Images;

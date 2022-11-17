import React, { useState } from 'react';
import Card from './card';
import gotfImage from '../images/grave-of-the-fireflies.jpg';
import howlsImage from '../images/howls.jpeg';
import kaguyaImage from '../images/kaguya.jpeg';
import kikiImage from '../images/kiki.jpeg';
import marnieImage from '../images/marnie.jpeg';
import nausicaaImage from '../images/nausicaa.jpeg';
import ponyoImage from '../images/ponyo.jpeg';
import princessMononokeImage from '../images/princess-mononoke.png';
import spiritedAwayImage from '../images/spirited-away.jpeg';
import windImage from '../images/the-wind-rises.jpeg';
import totoroImage from '../images/totoro.jpg';
import whisperImage from '../images/whisper-of-the-heart.jpeg';


function Content() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clicked, setClicked] = useState([]);
    const [cardDeck, setCardDeck] = useState(
        [{img: gotfImage, name: 'Grave of The Fireflies'},
        {img: howlsImage, name: 'Howl\'s Moving Castle'},
        {img: kaguyaImage, name: 'The Tale of the Princess Kaguya'},
        {img: kikiImage, name: 'Kiki\'s Delivery Service'},
        {img: marnieImage, name: 'When Marnie Was There'},
        {img: nausicaaImage, name: 'Nausicaa of the Valley of the Wind'},
        {img: ponyoImage, name: 'Ponyo'},
        {img: princessMononokeImage, name: 'Princess Mononoke'},
        {img: spiritedAwayImage, name: 'Spirited Away'},
        {img: windImage, name: 'The Wind Rises'},
        {img: totoroImage, name: 'My Neighbor Totoro'},
        {img: whisperImage, name: 'Whisper of the Heart'}]
    );

    function shuffleDeck(array) {
        let newArray = array.map((itm) => itm );
        let length = newArray.length;
        let trade;
        let randomNum;
        while (length) {
          randomNum = Math.floor(Math.random() * length--);
      
          trade = newArray[length];
          newArray[length] = newArray[randomNum];
          newArray[randomNum] = trade;
        }
      
        return newArray;
    }

    function handleChange(e) {
        if (clicked.includes(e.currentTarget.id)) {
            setScore(0);
            setCardDeck(shuffleDeck(cardDeck));
            setClicked([]);
            return;
        }
        setClicked(clicked.concat(e.currentTarget.id));
        setScore(prevScore => prevScore + 1);
        if (score + 1 > bestScore) {
            setBestScore(score + 1);
        }
        setCardDeck(shuffleDeck(cardDeck));
    }

    return (
        <div className="content">
            <div className="scores">
                <p className="currentScore">{score}</p>
                <p className="bestScore">{bestScore}</p>
            </div>
            <div className="cardBox">
                {cardDeck.map((card) => {
                    return <Card key={card.name} image={card.img} title={card.name} handleChange={handleChange}/>;
                })}
            </div>
        </div>
    )
}

export default Content;
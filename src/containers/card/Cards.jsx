import React, { Component } from 'react'
import Card from './CardUI';
import ignite from '../../assests/images/ignite.jpg'
import ad from '../../assests/images/ad.svg'
import haircut from '../../assests/images/haircut.png'
import lips from '../../assests/images/lips.png'
import scrabble from '../../assests/images/scrabble.png'
import chatbot from '../../assests/images/chatbot.jpg'
import './CardUI.css'

class Cards extends Component {
  render(){
    return(
      <div>
        <div>
          <div className="d-flex justify-content-around mb-5">
            <div className="">
              <Card imgsrc={ignite} title={"Ignite"} desc={"Add new friends based on how many times you've seen each other in the past."} url={"http://slick2cut.herokuapp.com"}/>
            </div>
            <div className="">
              <Card imgsrc={ad} title={"Deep Ad Detection"} desc={"Using Deep Learning and Computer Vision to classify advertisements."} url={"https://github.com/michaeldu1/DeepAdDetect"}/>
            </div>
            <div className="">
              <Card imgsrc={haircut} title={"Slick"} desc={"An app for better commmunication with your barber, before and after the cut."} url={"http://slick2cut.herokuapp.com"}/>
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="">
              <Card imgsrc={lips} title={"Deep Lip Detection"} desc={"Using Deep Learning and Computer Vision to perform the task of understanding lip movements."} url={"https://github.com/sushilu101/CS221"}/>
            </div>
            <div className="">
              <Card imgsrc={scrabble} title={"ScrabbleAI"} desc={"Using Reinforcement Learning to create a Scrabble playing agent."} url={"https://github.com/smasling/ScrabbleAI"}/>
            </div>
            <div className="">
              <Card imgsrc={chatbot} title={"ChatbotAI"} desc={"Using NLP (without deep learning) to create a movie recommender chatbot."} url={"https://github.com/michaeldu1/ChatBot"}/>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import RandImages from "./components/RandomImages/RandImages.js";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import images from "./components/Images/Images";
import "./App.css";
import Winner from "./components/Modal/Winner";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    navMsgColor: "",
    navMessage: "Click an image to begin!",
    allCharacters: this.shuffleArray(),
    wasClicked: [],
    shake: false,
    showModal: false,
  };
  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    const newArr = images.slice();
    const shuffleArr = [];
    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }
    return shuffleArr;
  }
  hideModalHandler = () => {
    this.setState({
      showModal: false,
      score: 0,
    });
  };
  checkClicked(clickedElem) {
    const prevState = this.state.wasClicked.slice();
    const shuffled = this.shuffleArray();
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.wasClicked.includes(clickedElem)) {
      if (score === highScore) {
        highScore++;
      }
      score++;
      if (score === 12) {
        this.setState({
          showModal: true,
        });
      }
      prevState.push(clickedElem);
    }
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: "incorrect",
        navMessage: "Incorrect guess!",
        allCharacters: shuffled,
        wasClicked: [],
        shake: true,
      });
    }
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: "correct",
      navMessage: "You Guessed Correctly!",
      allCharacters: shuffled,
      wasClicked: prevState,
      shake: false,
    });
    return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
  }

  render() {
    const state = this.state;
    return (
      <div className="mainDiv">
        <Navbar
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Winner showModal={state.showModal} hideModal={this.hideModalHandler} />

        <div className="contentDiv">
          <div className="bannerDiv">
            <Banner />
          </div>
          <div className="containerDiv">
            <RandImages
              shake={state.shake}
              characters={state.allCharacters}
              clickEvent={this.clickEvent}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;

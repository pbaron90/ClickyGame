import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import HeroCard from "./components/HeroCard";
import hero from "./hero.json";
import "./App.css";

class App extends Component {
  state = {
    hero,
    clickedHero: [],
    score: 0
  };

  imageClick = event => {
    const currentHero = event.target.alt;
    const HeroAlreadyClicked =
      this.state.clickedHero.indexOf(currentHero) > -1;

    if (HeroAlreadyClicked) {
      this.setState({
        hero: this.state.hero.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedHero: [],
        score: 0
      });
      alert("You Falied to save the Heroes? Try again?");

    } else {
      this.setState(
        {
          hero: this.state.hero.sort(function(a, b) {
            return .5 - Math.random();
          }),
          clickedHero: this.state.clickedHero.concat(
            currentHero
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("You saved the day!!");
            this.setState({
              hero: this.state.hero.sort(function(a, b) {
                return .5 - Math.random();
              }),
              clickedHero: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>

        <Jumbotron />
        <div className="wrapper">
          {this.state.hero.map(hero => (
            <HeroCard
              imageClick={this.imageClick}
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}
        </div>
        <Navbar 
          score={this.state.score}
        />
      </div>
    );
  }
}
export default App;
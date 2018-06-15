import React from "react";
import "./AnimalContent.css";
import items from "../../items.json";
import Header from '../Header';

class AnimalCard extends React.Component {
  state = {
    items,
    currentScore: 0,
    topScore: 0,
    clickedArray: [],
    scoresArray: []
  };

    shuffleArray(items) {
      const newItems = items.slice();
      for (let i = newItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newItems[i], newItems[j]] = [newItems[j], newItems[i]]; 
      } return newItems;  
    }

  handleClick(item){
    //when item clicked, shuffle all items 
    let items = this.shuffleArray(this.state.items);
    this.setState({ items });

    //click logic, update state 
        if (this.state.clickedArray.includes(item.name)){ 
          console.log("stop adding points. array includes:" + item.name); 
          this.state.scoresArray.push((this.state.clickedArray.length));
          this.setState({ 
            currentScore: this.state.clickedArray.length, 
            clickedArray: [], 
            scoresArray: this.state.scoresArray,
            topScore: (Math.max(...this.state.scoresArray)),
             }, () => {
            console.log(this.state);
            this.setState({currentScore: 0});
          }); 
        }
        else { //item not yet clicked, keep playing 
          this.state.clickedArray.push(item.name); 
          this.setState({
            clickedArray: this.state.clickedArray,
            currentScore: this.state.currentScore +1 }, () => {
              console.log(this.state);
          });
        }
  }

  render() {
      return (
    <div>
      < Header score={this.state.currentScore} top={this.state.topScore}/>

        <div className="container">
          <div className="row justify-content-md-center">
            {this.state.items.map(item => (
              //use arrow function to tie the 'this' to the function
              //explained at: https://reactarmory.com/answers/when-to-use-arrow-functions
              <div className="col-sm-3 outerDiv" onClick={() => this.handleClick(item)} key={item.id} score={item.currentScore} top={item.topScore}>
                <img className="animalImages" src={item.image} alt={item.name}/>
              </div>))}
        </div>
      </div>
     </div>
      )
    }
};

export default AnimalCard;
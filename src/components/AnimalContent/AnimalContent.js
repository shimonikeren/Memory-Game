import React from "react";
import "./AnimalContent.css";
import items from "../../items.json";

class AnimalCard extends React.Component {
  state = {
    items,
    currentScore: 1,
    topScore: 1,
    clickedArray: [],
    topScoreArray: []
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

    //click logic
        if (this.state.clickedArray.includes(item.name)){ 
          console.log("stop adding points. array includes:" + item.name); //then evaluate current score vs topscore
          this.state.topScoreArray.push((this.state.clickedArray.length));
          const highestScore = (Math.max(...this.state.topScoreArray));
          this.setState({ 
            currentScore: this.state.clickedArray.length, 
            clickedArray: [], 
            topScore: highestScore,
            topScoreArray: this.state.topScoreArray }, () => {
            console.log(this.state);
          }); 
        }
        else { //item not yet clicked, keep playing 
          this.state.clickedArray.push(item.name); 
          this.setState({clickedArray: this.state.clickedArray});
          console.log("clickedArray:" + this.state.clickedArray);
        }
  }

  render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            {this.state.items.map(item => (
              //when handleClick is called below with this.handlecClick, the 'this' is null, therefore, use the arrow function to tie the 'this' to the function
              //exaplined at: https://reactarmory.com/answers/when-to-use-arrow-functions
              <div className="col-sm-3 outerDiv" onClick={() => this.handleClick(item)} key={item.id}>
                <img className="animalImages" src={item.image} alt={item.name}/>
              </div>))}
        </div>
     </div>
      )
    }
};

export default AnimalCard;
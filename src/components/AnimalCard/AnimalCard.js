import React from "react";
import "./AnimalCard.css";
import items from "../../items.json";

class AnimalCard extends React.Component {
  state = {
    items
  };

  handleClick(id){
    //when item clicked, shuffle all items 
    let items = this.shuffleArray(this.state.items);
    this.setState({ items });
    
    //logic for counting points/streaks goes here 

  }

  //using shuffle with es6: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
  shuffleArray(items) {
    for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]; // eslint-disable-line no-param-reassign
    } return items;  
}

  render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            {this.state.items.map(item => (
              //when handleClick is called below with this.handlecClick, the 'this' is null, therefore, use the arrow function to tie the 'this' to the function
              //exaplined at: https://reactarmory.com/answers/when-to-use-arrow-functions
              <div className="col-sm-3 outerDiv" onClick={() => this.handleClick(item.id)} key={item.id}>
                <img className="animalImages" src={item.image} alt={item.name}/>
              </div>))}
        </div>
     </div>
      )
    }
};

export default AnimalCard;
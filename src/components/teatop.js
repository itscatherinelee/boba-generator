import React from 'react'
import Wheel from './wheel'

export class TeaTop extends React.Component {
  constructor() {
    super();
    this.TeaTopChoices = [
      'Alphine Green Tea', 
      'Mung Bean Milk Slushy', 
      'Taro Milk Tea with Sago', 
      'Pearl Milk Tea with Red Bean', 
      'Passion Green Tea Medley',
      'Milk Foam Sun Moon Lake Black Tea', 
      'Milk Foam Wintermelon Tea'];
  }

  render() {
    return (
      <div className="App">
        <h1>Tea Top</h1>
        <Wheel items={this.TeaTopChoices} />
      </div>
    );
  }
}

export default TeaTop

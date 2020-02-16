import React from 'react'
import Wheel from './wheel'

export class DingTea extends React.Component {
  constructor() {
    super();
    this.places=[
        'Peach Green/Black Tea', 
        'Passion Fruit Green/Black Tea', 
        'Mango Green/Black Tea', 
        'Top Fruit Tea', 
        'Oolong Milk Tea',
        'Coffee Milk Tea', 
        'Matcha Milk Tea', 
        'WInter Melon Milk Tea', 
        'Mango Milk Tea', 
        'Hokkaido Black/Oolong Milk Tea']
  }

  render() {
    return (
      <div className="App">
        <h1>Ding Tea</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

export default DingTea

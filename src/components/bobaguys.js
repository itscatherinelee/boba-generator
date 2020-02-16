import React from 'react'
import Wheel from './wheel'

export class BobaGuys extends React.Component {
  constructor() {
    super();
    this.places = [
      'Classic Milk Tea', 
      'Jasmine Milk Tea', 
      'Hong Kong Style', 
      'Horchata', 
      'Thai Tea',
      'Coffee Milk Tea', 
      'Muscat Oolong', 
      'Lychee Green Tea', 
      'Coconut Green Tea', 
      'Indian Chai', 
      'Duke of Earl Grey'];
  }

  render() {
    return (
      <div className="App">
        <h1>Boba Guys</h1>
        <Wheel items={this.places} />
      </div>
    );
  }
}

export default BobaGuys

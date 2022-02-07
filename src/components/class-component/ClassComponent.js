import React, { Component } from 'react';

export class ClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      name: "Juan",
      surname: "Pérez",

    }
  }

  updateName = () => {
    this.setState({name: "Luis Gabriel", surname: "García Mingall"});
  }

  render () {
      const { name, age } = this.props;

      return (
        <>
        <h1>ClassComponent</h1>
        <div onClick={this.updateName}>
          <h2>Nombre del Estado: {this.state.name}</h2>
        </div>
        <div onClick={this.updateName}>
          <h2>Nombre del Estado: {this.state.surname}</h2>
        </div>
        <h2>Nombre: {name}</h2>
        <h2>Edad: {age}</h2>
        </>
      );
  }
}
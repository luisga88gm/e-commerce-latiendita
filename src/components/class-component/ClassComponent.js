import { Component, Fragment } from "react";

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Luis",
      surname: "García",
    };
  }

  updateName = () => {
    this.setState({ name: "Gabriel" });
  };

  render() {
    const { name, age } = this.props;

    return (
      <Fragment>
        <h1>ClassComponent</h1>
        <div onClick={this.updateName}>
          <h2>Nombre del estado: {this.state.name}</h2>
        </div>
        <div>
          <h2>Nombre del estado: {this.state.surname}</h2>
        </div>
        <h2>Nombre: {name}</h2>
        <h2>Edad: {age}</h2>
      </Fragment>
    );
  }
}

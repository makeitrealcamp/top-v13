import React from "react";

class ShowMessageClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const msg = event.target.value;
    //this.setState({ message: msg });
  }

  handleSubmit(event) {
    event.preventDefault();
    const msg = event.target[0].value;
    this.setState({ message: msg });
  }

  // Componente renderizado
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //
    console.log("Component class unmounted");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.message}</h1>
        <input onChange={this.handleChange}></input>
        <button type="submit">Show text</button>
      </form>
    );
  }
}

export default ShowMessageClass;

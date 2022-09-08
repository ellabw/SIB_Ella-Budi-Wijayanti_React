import React from "react";

class HeroName extends React.Component {
  render() {
    return (
      <>
        <h3>Hero Name</h3>
        <p>{this.props.name}</p>
        <br />
      </>
    );
  }
}

//pengiriman props dari komponen Hero ke komponen HeroName
export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Iron Man",
    };
  }

  render() {
    return (
      <>
        <p>Step 1</p>
        <HeroName name="Hercules" />
        <p>Step 2</p>
        <p>Using State</p>
        <HeroName name={this.state.name} />
      </>
    );
  }
}

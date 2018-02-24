import React, { Component } from "react";
import TitleBar from "./TitleBar";
import AddPlayer from "./AddPlayer";
import PlayerList from "./PlayerList";

class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created by Dario Radecic" />
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;
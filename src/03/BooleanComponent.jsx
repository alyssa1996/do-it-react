import React from "react";

class BooleanComponent extends React.Component {
  render() {
    const message = this.props.bored ? "let's go out!" : "make your job done!";
    return <div className="message-container">{message}</div>;
  }
}

export default BooleanComponent;

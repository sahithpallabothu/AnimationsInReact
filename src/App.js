import React, { Component } from "react";
import { Transition } from "react-transition-group";
//import { CSSTransition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter:400,
  exit:1000
}

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    console.log("click");
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  toggleBlock = () => {
    this.setState((prevState) => ({ showBlock: !prevState.showBlock }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleBlock}>
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          onEnter={()=>console.log('On Enter')}
          onEntering={()=>console.log('On Entering')}
          onEntered={()=>console.log('On Entered')}
          onExit={()=>console.log('On Exit')}
          onExiting={()=>console.log('On Exiting')}
          onExited={()=>console.log('On Exited')}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                height: 100,
                width: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            >
              Some Block
            </div>
          )}
        </Transition>
        <Transition in={this.state.modalIsOpen} timeout={animationTiming} mountOnEnter unmountOnExit>
          {(state) => (
            <Modal show={state} closed={this.closeModal} />
          )}
        </Transition>
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;

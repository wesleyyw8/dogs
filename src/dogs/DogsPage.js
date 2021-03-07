import React from "react";
import { connect } from "react-redux";
import "./DogsPage.css";
import * as dogsActions from "./../redux/actions/dogsActions";
import { bindActionCreators } from "redux";
import { baseUrl } from "./../api/dogsApi";

class DogsPage extends React.Component {
  constructor() {
    super();
    this.loadDogs.bind(this);
  }
  componentDidMount() {
    const { dogs, actions } = this.props;
    if (dogs.length === 0) {
      loadDogs();
    }
  }

  render() {
    return (
      <div className="dog-page">
        <div className="dog-container">
          {this.props.dogs.map((dog, i) => {
            if (dog.includes("webm") || dog.includes("mp4")) {
              return (
                <div className="dog" key={i}>
                  <video autoPlay muted width="100%" height="100%">
                    <source src={baseUrl + dog} type="video/mp4"></source>
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            } else {
              return (
                <img
                  className="dog"
                  key={i}
                  src={baseUrl + dog}
                  alt={dog}
                ></img>
              );
            }
          })}
        </div>
        <button onClick={loadDogs()}>REFRESH/NEXT</button>
      </div>
    );
  }
}

function loadDogs() {
  console.log("adhaudhuaw");
  this.props.actions.loadDogs().catch((error) => {
    alert("Loading courses failed" + error);
  });
}

function mapStateToProps(state) {
  return {
    ...state,
    dogs:
      state.dogs.length > 6
        ? state.dogs.sort(() => Math.random() - Math.random()).slice(0, 6)
        : state.dogs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDogs: bindActionCreators(dogsActions.loadDogs, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);

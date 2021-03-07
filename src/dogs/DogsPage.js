import React from "react";
import { connect } from "react-redux";
import "./DogsPage.css";
import * as dogsActions from "./../redux/actions/dogsActions";
import * as favoriteActions from "./../redux/actions/favoriteActions";
import { bindActionCreators } from "redux";
import { baseUrl } from "./../api/dogsApi";
import Spinner from "./../spinner/Spinner";

class DogsPage extends React.Component {
  componentDidMount() {
    const { dogs } = this.props;
    if (dogs.length === 0) {
      this.loadDogs();
    }
  }

  render() {
    return (
      <div className="dog-page">
        {this.props.isLoading ? (
          <Spinner />
        ) : (
          <div className="dog-container">
            {this.props.dogs.map((dog, i) => {
              if (dog.includes("webm") || dog.includes("mp4")) {
                return (
                  <div className="dog" key={i}>
                    <button className="star">⭑</button>
                    <video autoPlay muted width="100%" height="100%">
                      <source src={baseUrl + dog} type="video/mp4"></source>
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              } else {
                return (
                  <div className="dog" key={i}>
                    <button
                      className="star"
                      onClick={() => this.saveAsFavorite(dog)}
                    >
                      ⭑
                    </button>
                    <img src={baseUrl + dog} alt={dog}></img>
                  </div>
                );
              }
            })}
          </div>
        )}
        ;<button onClick={() => this.loadDogs()}>REFRESH/NEXT</button>
      </div>
    );
  }

  loadDogs() {
    this.props.actions.loadDogs().catch((error) => {
      alert("Loading dogs failed" + error);
    });
  }

  saveAsFavorite(dogId) {
    this.props.actions.saveAsFavorite(dogId);
  }
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    isLoading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadDogs: bindActionCreators(dogsActions.loadDogs, dispatch),
      saveAsFavorite: bindActionCreators(
        favoriteActions.saveAsFavorite,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);

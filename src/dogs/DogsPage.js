import React from "react";
import { connect } from "react-redux";
import "./DogsPage.css";
import * as dogsActions from "./../redux/actions/dogsActions";
import * as favoriteActions from "./../redux/actions/favoriteActions";
import { bindActionCreators } from "redux";
import { baseUrl } from "./../api/dogsApi";
import Spinner from "./../spinner/Spinner";

export class DogsPage extends React.Component {
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
                    <button
                      className={
                        this.isInFavorites(dog) ? "star active" : "star"
                      }
                      onClick={() => this.toggleFavorite(dog)}
                    >
                      ⭑
                    </button>
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
                      className={
                        this.isInFavorites(dog) ? "star active" : "star"
                      }
                      onClick={() => this.toggleFavorite(dog)}
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

  toggleFavorite(dogId) {
    if (!this.isInFavorites(dogId)) {
      this.props.actions.saveAsFavorite(dogId);
    } else {
      console.log("remove favorite");
      this.props.actions.removeAsFavorite(dogId);
    }
  }

  isInFavorites(dogId) {
    return this.props.favorites.find((item) => item === dogId) !== undefined;
  }
}

function mapStateToProps(state) {
  return {
    dogs: state.dogs,
    isLoading: state.apiCallsInProgress > 0,
    favorites: state.favorites,
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
      removeAsFavorite: bindActionCreators(
        favoriteActions.removeAsFavorite,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsPage);

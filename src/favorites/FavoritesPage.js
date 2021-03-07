import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as favoriteActions from "./../redux/actions/favoriteActions";
import { baseUrl } from "./../api/dogsApi";

class FavoritesPage extends React.Component {
  render() {
    return (
      <div className="favorites">
        <div className="dog-container">
          {this.props.favorites.map((dog, i) => {
            if (dog.includes("webm") || dog.includes("mp4")) {
              return (
                <div className="dog" key={i}>
                  <button
                    className="star active"
                    onClick={() => this.removeFromFavorites(dog)}
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
                    className="star active"
                    onClick={() => this.removeFromFavorites(dog)}
                  >
                    ⭑
                  </button>
                  <img src={baseUrl + dog} alt={dog}></img>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
  removeFromFavorites(dogId) {
    if (this.isInFavorites(dogId)) {
      this.props.actions.removeAsFavorite(dogId);
    }
  }

  isInFavorites(dogId) {
    return this.props.favorites.find((item) => item === dogId) !== undefined;
  }
}
function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeAsFavorite: bindActionCreators(
        favoriteActions.removeAsFavorite,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

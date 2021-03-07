import * as types from "./actionTypes";

export function saveAsFavorite(payload) {
  return { type: types.SAVE_AS_FAVORITE, payload };
}

export function removeAsFavorite(payload) {
  return { type: types.REMOVE_AS_FAVORITE, payload };
}

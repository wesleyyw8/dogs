// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dogs: [],
  apiCallsInProgress: 0,
  favorites:
    localStorage.getItem("wes-dogs-favorites") &&
    localStorage.getItem("wes-dogs-favorites") !== ""
      ? localStorage.getItem("wes-dogs-favorites").split(",")
      : [],
};

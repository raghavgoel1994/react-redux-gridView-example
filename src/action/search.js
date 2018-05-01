import axios from 'axios';

export const deleteselected = (value) => {
  return { type: "DELETE_SELECTED", payload: value };
}

export const undeleteselected = (value, arr) => {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
    return { type: "UNDELETE_SELECTED", payload: arr };
  }
}
export const deleteAllSeleted = (value) => {
  return { type: "DELETE_SELECTED_ALL", payload: value };
}

export const fetchImage = (i) => {

  return (dispatch) => {
    dispatch({ type: "FETCHING_IMAGE_STARTS" })

    var jsonData = require('./../data/images.json');
    if (jsonData.items.length == 0) {
      dispatch({
        type: "FETCHING_IMAGE_ERROR", payload: {}
      })
    }
    else {
      if (i === 0) {
        dispatch({
          type: "FETCHING_IMAGE_DONE", payload: jsonData.items
        })
      }
      if (i === 1) {
        dispatch({
          type: "FETCHING_IMAGE_DONE", payload: sortbyName(jsonData.items, "acc", "imagename")
        })
      }
      if (i === 2) {
        dispatch({
          type: "FETCHING_IMAGE_DONE", payload: sortbyName(jsonData.items, "dec", "imagename")
        })
      }
      if (i === 3) {
        dispatch({
          type: "FETCHING_IMAGE_DONE", payload: sortbyName(jsonData.items, "acc", "createdon")
        })
      }
      if (i === 4) {
        dispatch({
          type: "FETCHING_IMAGE_DONE", payload: sortbyName(jsonData.items, "dec", "createdon")
        })
      }
    }

  }
}
function sortbyName(arr, type, key) {
  var retrn = sortByKey(arr, type, key);
  return retrn
}
function sortByKey(arr, type, key) {
  return [].sort.call(arr, function (a, b) {
    var x = a[key];
    var y = b[key];

    if (typeof x == "string") {
      x = ("" + x).toLowerCase();
    }
    if (typeof y == "string") {
      y = ("" + y).toLowerCase();
    }
    if (type == "acc") {
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
    else {
      return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    }
  });
}
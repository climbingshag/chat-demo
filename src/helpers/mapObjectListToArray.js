import _ from "lodash";

const mapObjectListToArray = (object, objectName) => 
  _.chain(object)
    .toPairs()
    .map(pair => {
      const obj = { uid: pair[0] };
      obj[objectName] = pair[1];
      return obj;
    })
    .value();

export default mapObjectListToArray;

export default {
  cloneArray(array) {
    const clone = [];
    for (let i = 0; i < array.length; i += 1) {
      if (!Array.isArray(array[i]) &&
        typeof array[i] === 'object') {
        clone[i] = Object.assign({}, array[i]);
      } else if (typeof array[i] === 'string' ||
        typeof array[i] === 'number') {
        const obj = {};
        obj[this.labelName] = array[i];
        clone[i] = obj;
      }
    }
    return clone;
  },
};

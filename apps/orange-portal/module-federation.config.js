module.exports = {
  name: 'orange-portal',
  remotes: [],
  shared: (name, config) => {
    // We want lodash to be tree shaken, and bundled into each host/remote separately.
    if (name === 'tslib') {
      return false;
    }
  },

};

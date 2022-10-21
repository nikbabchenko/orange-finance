module.exports = {
  name: 'orange-portal',
  remotes: [],
  shared: (name, config) => {
    if (name === 'tslib') {
      return false;
    }
  },
};

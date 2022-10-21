module.exports = {
  name: 'history',
  exposes: {
    './Module': 'apps/history/src/app/remote-entry/entry.module.ts',
  },
  shared: (name, config) => {
    if (name === 'tslib') {
      return false;
    }
  },
};

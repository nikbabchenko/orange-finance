module.exports = {
  name: 'dashboard',
  exposes: {
    './Module': 'apps/dashboard/src/app/remote-entry/entry.module.ts',
  },
  shared: (name, config) => {
    if (name === 'tslib') {
      return false;
    }
  },
};

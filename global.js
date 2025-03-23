// global.js - Polyfills for React Native
if (typeof global.setImmediate !== 'function') {
  global.setImmediate = function(callback) {
    return setTimeout(callback, 0);
  };
}

if (typeof global.clearImmediate !== 'function') {
  global.clearImmediate = function(id) {
    clearTimeout(id);
  };
} 
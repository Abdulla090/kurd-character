const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require('path');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  
  // Ensure entry is in array format
  if (typeof config.entry === 'string' || typeof config.entry === 'function') {
    const originalEntry = config.entry;
    config.entry = () => Promise.resolve(originalEntry).then(entry => {
      return Array.isArray(entry) ? entry : [entry];
    });
  }
  
  return config;
}; 
module.exports = {
  presets: [
    '@babel/preset-env',  // Allows Babel to compile modern JavaScript
    '@babel/preset-react'  // Allows Babel to compile React JSX
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining'  // Enables support for optional chaining (?.)
  ]
};

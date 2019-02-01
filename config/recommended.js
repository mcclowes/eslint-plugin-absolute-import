/**
 * The basics.
 * @type {Object}
 */
module.exports = {
  plugins: ['import'],

  rules: {
    // analysis/correctness
    'import/no-relative-path': 'error',
    'import/no-unresolved': 'error',
  },

  // need all these for parsing dependencies (even if _your_ code doesn't need
  // all of them)
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },
}

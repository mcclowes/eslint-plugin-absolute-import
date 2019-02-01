export const rules = {
  'no-relative-path': require('./rules/no-relative-path'),
  'no-unresolved': require('./rules/no-unresolved'),
}

export const configs = {
  'recommended': require('../config/recommended'),

  'errors': require('../config/errors'),
  'warnings': require('../config/warnings'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),

  // useful stuff for folks using various environments
  'react': require('../config/react'),
  'react-native': require('../config/react-native'),
  'electron': require('../config/electron'),
}

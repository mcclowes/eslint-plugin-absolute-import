import moduleVisitor, { makeOptionsSchema } from 'eslint-module-utils/moduleVisitor'
import { isAbsolute } from '../core/importType'
import docsUrl from '../docsUrl'

module.exports = {
  meta: {
    docs: {
      url: docsUrl('absolute-path'),
    },
    schema: [ makeOptionsSchema() ],
  },

  create: function (context) {
    function reportIfNotAbsolute(source) {
      console.log('> ', source.value, isAbsolute(source.value))
      if (!isAbsolute(source.value)) {
        context.report(source, 'Import modules using an absolute path')
      }
    }

    const options = Object.assign({ esmodule: true, commonjs: true }, context.options[0])
    return moduleVisitor(reportIfNotAbsolute, options)
  },
}

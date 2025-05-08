// eslintrc.js
module.exports = {
    extends: ['scratch', 'scratch/node', 'scratch/es6'],
    settings: {
        'import/resolver': {
            webpack: {
                config: 'webpack.config.js'
            }
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },   
    rules: {
        'camelcase': [2, {
            properties: 'never',
            allow: ["^UNSAFE_"]
        }]
    },
    ignorePatterns: [
       '/node_modules/',
       '/build/',
       '/dist/',
       '/test/',
       '/src/examples/'
   ],
};
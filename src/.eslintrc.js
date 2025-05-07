const path = require('path');
module.exports = {
    root: true,
    extends: ['scratch', 'scratch/es6', 'scratch/react', 'plugin:import/errors'],
    env: {
        browser: true
    },
    globals: {
        process: true
    },
    rules: {
        // ... other rules remain the same
        'import/no-nodejs-modules': 'error' // Keep this as error for regular files
    },
    overrides: [
        {
            files: ['**/.eslintrc.js'],
            env: {
                node: true // Ensure Node.js environment for config files
            },
            rules: {
                'import/no-commonjs': 'off',
                'import/no-nodejs-modules': 'off' // Disable for config files
            }
        }
    ],
    settings: {
        'react': {
            version: 'detect' // Auto-detect from node_modules (recommended)
            // OR explicitly specify your React version:
            // version: '17.0' // If using React 17
        },
        'import/resolver': {
            webpack: {
                config: path.resolve(__dirname, '../webpack.config.js')
            }
        }
    }
};

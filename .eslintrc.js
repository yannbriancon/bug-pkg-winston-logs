module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'airbnb-base',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['**/coverage', 'dist'],
    plugins: ['json-format', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        'import/prefer-default-export': 'off',
        'no-restricted-syntax': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-empty': ['error', { allowEmptyCatch: true }],
        'no-use-before-define': ['error', { variables: false }],
        'no-undef': 'off',
        'no-unused-var': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '__mocks__/**/*'] }],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaVersion: 2018
    }
}

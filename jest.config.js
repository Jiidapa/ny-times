const modules = [].join('|')

module.exports = {
    modulePathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub'
    },
    transform: {
        '^.+\\.(ts|js|tsx)$': 'babel-jest'
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    verbose: true,
    setupFilesAfterEnv: ['./setupTests.js'],
    transformIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]']
}

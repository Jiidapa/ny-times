const modules = [].join('|')
const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig')

module.exports = {
    modulePathIgnorePatterns: ['<rootDir>[/\\\\](build|docs|node_modules|.next)[/\\\\]'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@utils/(.*)': '<rootDir>/util/$1',
        '^@features/(.*)': '<rootDir>/features/$1',
        '^@pages/(.*)': '<rootDir>/pages/$1',
        '^@components/(.*)': '<rootDir>/components/$1',
        '^@public/(.*)': '<rootDir>/public/$1',
        '^@interfaces/(.*)': '<rootDir>/interfaces/$1',
        '^@services/(.*)': '<rootDir>/services/$1',
        '^@stores/(.*)': '<rootDir>/stores/$1',
        '^@styles/(.*)': '<rootDir>/styles/$1',
        '^@utils/(.*)': '<rootDir>/utils/$1'
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

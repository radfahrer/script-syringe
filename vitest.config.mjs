import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        // look for test files including .mjs tests already present in this repo
        include: [
            '**/*.test.mjs',
        ],

        // run tests in a Node environment (change to 'jsdom' or 'happy-dom' if you need DOM)
        environment: 'jsdom',


        // coverage configuration
        coverage: {
            provider: 'c8', // use c8 for coverage
            reporter: ['text', 'lcov'],
            exclude: ['node_modules/', 'dist/']
        }
    }
})

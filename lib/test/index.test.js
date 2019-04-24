require('../index');
const assert = require('assert');
const { print } = require('graphql');
const { readFileSync } = require('fs');
describe('GraphQL Node Import', () => {
    it('should import correct definitions', () => {
        const typeDefs = require('./test.graphql');
        assert(print(typeDefs).replace(/\s\s+/g, ' ') === readFileSync(require.resolve('./test.graphql'), 'utf8').replace(/\s\s+/g, ' '));
    })
});

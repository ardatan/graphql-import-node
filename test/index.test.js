require('../index');
const assert = require('assert');
const gql = require('graphql-tag');
const { importSchema } = require('graphql-import');
//Taken from http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        const propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
describe('GraphQL Node Import', () => {
    it('should import correct definitions', () => {
        const typeDefs = require('./test.graphql');
        assert(isEquivalent(typeDefs, gql(importSchema(require.resolve('./test.graphql')))));
    })
});

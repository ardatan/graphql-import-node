const { importSchema } = require('graphql-import');
const gql = require('graphql-tag');

function graphQLRequire(module, filename) {
    const documentNode = gql(importSchema(require.resolve(filename)));
    module.exports = documentNode;
};

function registerExtensions() {
    const EXTENSIONS = ['.graphql', '.gql', '.graphqls'];
    for (const extName of EXTENSIONS) {
        require.extensions[extName] = graphQLRequire;
    }
    return graphQLRequire;
}

registerExtensions();

module.exports = { registerExtensions, graphQLRequire };

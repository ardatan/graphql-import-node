const { readFileSync } = require('fs');
const { parse } = require('graphql');

function graphQLRequire(module, filename) {
    const documentNode = parse(readFileSync(require.resolve(filename), 'utf8'));
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

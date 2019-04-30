const { parse } = require('graphql');

module.exports = {
  process(fileData) {
    return `module.exports = ${JSON.stringify(parse(fileData))}`;
  }
};

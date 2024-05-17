const { request } = require('@sdw-cli/utils');

module.exports = function() {
  return request({
    url: '/project/template',
  });
};

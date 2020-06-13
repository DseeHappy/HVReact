module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.js'
      ],
  
      tests: [
        'test/**/*Spec.js'
      ],
      env: {
        kind: 'chrome'
      }

      // for node.js tests you need to set env property as well
      // https://wallabyjs.com/docs/integration/node.html
    };
  };
  
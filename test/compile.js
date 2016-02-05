// require('ts-node/register');
// require("babel-register")({
//   // module: {
//     loaders: [{
//       test: /\.tsx?$/,
//       loaders: ['babel', 'ts'],
//     }],
//   // }
//   extensions: [".es6", ".es", ".jsx", ".js", ".ts", ".tsx"]
// });
require('ts-node').register({
    project: 'test',
    exitOnError: true
});

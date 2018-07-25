## Webpack build configuration boilerplate.

This is webpack build configuration boilerplate with very simple calculator example.
It doesn't have two webpack.config files as with 4th version of Webpack we can declare _production_ or _development_ mode from CLI very easily. Also in development mode we can configure HMR with webpack-dev-server just by adding `--hot` flag in CLI command.

Entry file `src/index.js`

### Commands:

> _Runs tests written for calculator_

```
npm run tests
```

> _Webpack bundling with `--mode production`_

```
npm run build
```

> _Bundles with `--mode development` and starts `webpack-dev-server` with HMR_

```
npm start
```

### Production mode

For production mode we have the script below

```
jest && webpack --mode production
```

This script at first runs tests and only after passing them it builds a minified bundle.js file. With production mode Webpack automatically minifies bundled files and optimizes the code, without any need to configure uglify.js or other optimization plugins.

### Development mode

For development mode we have the script below

```
webpack-dev-server --mode development --open --hot
```

This script runs webpack-dev-server on localhost, opens bundled files in default browser, and enables hot module replacement. As hot module replacement is enabled, everytime we save some changes, it will automatically update our changes, and adding tests to this mode may reduce development speed. For it we have seperate `npm run tests` script.

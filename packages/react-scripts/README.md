# react-scripts-component

This is a fork of the standard ````react-scripts```` to create react components as modules (umd) designed for including in React Apps
e.g.
```js
import Component from 'my-created-component';
```


### Usage
Standard  
```sh
create-react-app {component-name} --scripts-version=react-scripts-component
```

TypeScript  
```sh
create-react-app {component-name} --scripts-version=react-scripts-component --typescript
```

* note for typescript: the component build creates declaration files and points to them in the package.json 

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://github.com/facebook/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
- [User Guide](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

import React from 'react';
import ReactDOM from 'react-dom';
import 'es6-promise/auto';
import 'isomorphic-fetch';
import { AppContainer } from 'react-hot-loader';
// import Main from './components/Main';
import App from './components/App';
// import styles from './styles.css';
import UserProvider from "./context/UserProvider";


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <UserProvider>
        <Component />
      </UserProvider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// webpack Hot Module Replacement API
if (module.hot) {
  // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
  // while `hot` would configure HMR for the CURRENT module
  module.hot.accept('./components/Main', () => {
    // if you are using harmony modules ({modules:false})
    const NextMain = require('./components/Main').default;
    // in all other cases - re-require App manually
    render(NextMain);
  });
  // UNCOMMENT BOTTOM TO CLEAR OUT CHROME DEV TOOLS CONSOLE UPON HOT RELOAD
  // module.hot.addStatusHandler(status => {
  //   if (status === 'prepare') console.clear()
  // })
}

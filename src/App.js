import React from 'react';
import logo from './logo.svg';
import './App.css';
import Basic from './Config/Router/Router.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {Provider} from 'react-redux'
import store from './store'
class App extends React.Component{
render(){
  return(
    <Provider store={store}>
    <div>
      <Basic/>

    </div>
    </Provider>
  )
}
}
export default App;

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import classes from './App.css';
import Aux from './hoc/Aux';
import reducer from './store/reducer';
import Layout from './components/Layout/Layout';
import asyncComponent from './hoc/AsyncComponent';
//import Burger from './containers/Burger';
//import Person from './containers/Person';

//Lazy loading of the component [Loading when required]
const AsyncBurger = asyncComponent(() => {
  return import('./containers/Burger')
})

const AsyncPerson = asyncComponent(() => {
  return import('./containers/Person')
})

const store = createStore(reducer);



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout className={classes.App}>
          <Route path="/" exact render={() => <h1>Home Page</h1>}/> 
          {/*  <Route path="/burger" component={Burger}/> 
            <Route path="/person" component={Person}/>
          */}
            <Route path="/burger" component={AsyncBurger}/>
            <Route path="/person" component={AsyncPerson}/>
          
            {/* <Route path="" render={() => { console.log(this.props);return (<h1> Page Not Found </h1>)}}/> */}
            
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

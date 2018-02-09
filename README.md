# Test React App - Redux

The test react app is modified with routing, added redux as the statemanagement library.


### 1. Based on the type of the action, the states are updated and returned

```javascript

//reducer.js
	const initialState = {
		counter = 0
	}
	const reducer = (state=initialState, action) => {

		if(action.type == SOME_ACTION) {
			//Process

			return state;
		}

		return state;
	}

	export default reducer;

```

### 2. The reducer is used to create store object which is passed to the react app using Provider


```javascript
        import { createStore } from 'redux';
		import {Provider} from 'react-redux';
		import reducer from './reducer';


		const store = createStore(reducer);

		inside the render() {

			return (
				<Provider store={store}>
					//The component's Actual JSX
				</Provider>
			);
		}
```


### 3. In order to get access to the store, each module need to connect to the store using the 'connect' of 'react-redux' package.


``` javascript

import { connect } from 'react-redux';

		class Person {

			render() {

				//the counter is accessible using
				const counter = this.props.counter;

				return(
					<div>
						<div>Counter:- {counter}</div>
						<button value="CREATE" onClick= {this.props.addCounter}/>
					</div>
					
				);
			}
		}

		mapStateToProps = (state) =>   {

			return state;
		}

		mapDispatchToProps = (dispatch) =>   {

			return {
				addCounter : dispatch({type : 'INCREMENT_COUNTER'})
			}
		}

		export default connect(mapStateToProps, mapDispatchToProps)(Person);

```




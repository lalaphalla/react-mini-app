const redux = require('redux');
//redux-demo.js
// state need a default value
const counterReducer = (state = {counter: 0}, action) =>{
	return {
		counter: state.counter + 1
	}
}

const store = redux.createStore(counterReducer)

const counterSubscriber = () => {
	const latestState = store.getState();
	console.log(latestState, 'latestState'); 
}
store.dispatch({type: 'increment'})
console.log(store.getState());
// subscribe method will expect subscribe function which redux will execute function for us when data and store change
store.subscribe(counterSubscriber);
// store.dispatch({type:'increment'});

// store mangage some data 
// data determined by reducer function
// it will produce new state snapshot 
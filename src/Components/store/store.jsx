// import { createStoreHook } from "react-redux";
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import testReducer from "./test/reducer"


const reducers = combineReducers({
	testReducer	
})


const store = createStore( 
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store
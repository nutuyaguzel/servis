 import { combineReducers,createStore } from "redux";
import categoryReducer from "./reducers/categoryReducer";
 

 export const rootReducer=combineReducers({
categoryState:categoryReducer

 })

 export default createStore(rootReducer)
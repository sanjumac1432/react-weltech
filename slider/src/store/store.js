import { createStore } from "redux";
import statereducer from "../reducer/statereducer";

const store = createStore(statereducer);

export default store;

import { createStore } from 'redux'
import formReducer from '../form/formReducer'

export const configureStore = () => {
    const store = createStore(formReducer)
    return store
}
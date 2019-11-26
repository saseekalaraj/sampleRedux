import { CREATE } from './formConstant'
import { createReducer } from '../reducerUtils/createReducer'

const InitialState = [
    { name: '' }
]

const create = (state, payload) => {
    return [...state, payload.event]
}
export default createReducer(InitialState, {
    [CREATE]: create
})

import { CREATE } from './formConstant'

export const create = (event) => {
    return {
        type: CREATE,
        payload: {
            event
        }
    }
}
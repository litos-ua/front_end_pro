import {
    ADD_TODO,
    COMPLETE_TODO,
    REMOVE_TODO,
    RESET_STORE,
    LOAD_TODOS_REQUEST,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
} from './actions';

const initialState = {
    todosItems: [],
    loading: false,
    error: null,
};

const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            const newTodo = {
                id: generateId(),
                task: action.payload.task,
                completed: false,
                taskSetter: action.payload.taskSetter,
                taskPerformer: action.payload.taskPerformer,
                additionalInfo: action.payload.additionalInfo,
                createdAt: new Date().toISOString(),
            };
            return {
                ...state,
                todosItems: [...state.todosItems, newTodo],
            };
        }
        case COMPLETE_TODO:
            return {
                ...state,
                todosItems: state.todosItems.map((el) =>
                    el.id === action.payload ? { ...el, completed: true } : el
                ),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todosItems: state.todosItems.filter((el) => el.id !== action.payload),
            };
        case LOAD_TODOS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case LOAD_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todosItems: action.payload,
            };
        case LOAD_TODOS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case RESET_STORE:
            return initialState;
        default:
            return state;
    }
};

export default reducer;

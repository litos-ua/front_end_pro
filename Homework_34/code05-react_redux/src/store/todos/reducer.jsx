import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from './actions';

const initialState = {
    todosItems: [],
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
                create_time: new Date().toISOString(),
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
        default:
            return state;
    }
};

export default reducer;

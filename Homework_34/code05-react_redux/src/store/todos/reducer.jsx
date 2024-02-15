import { ADD_TODO, COMPLETE_TODO, REMOVE_TODO } from './actions';

const initialState = {
    todos: [],
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
                todos: [...state.todos, newTodo],
            };
        }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: true } : todo
                ),
            };
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;

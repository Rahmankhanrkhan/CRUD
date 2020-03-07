import createDataContext from './createDataContext';

const functionReducer = (state, action) => {
    switch (action.type) {
        case 'add_book':
            return [...state, {
                title: action.payload.title,
                author: action.payload.author,
                id: new Date().getTime()
            }
            ];
        case 'delete_Book':
            return state.filter((book) => book.id !== action.payload)
        case 'edit_book':
            return state.map(
                (book) => book.id === action.payload.id ? action.payload : book
            )
        default:
            return state;
    }
}

const addBook = dispatch => {
    return (title, author, callback) => {
        dispatch({
            type: 'add_book',
            payload: ({ title, author })
        });
        if (callback) {
            callback();
        }
    }
}

const editBook = dispatch => {
    return (title, author, id, callback) => {
        dispatch(
            {
                type: 'edit_book',
                payload: { title, author, id }
            }
        );
        callback();
    }
};

const deleteBook = dispatch => {

    return (id) => {
        console.log('deleteID::', id)
        dispatch(
            {
                type: 'delete_Book',
                payload: id
            }
        );
    }
}


export const { Context, Provider } = createDataContext(
    functionReducer,
    { addBook, editBook, deleteBook },
    []
)

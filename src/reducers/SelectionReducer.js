export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};

// 1st args: state that is returned by the function
// 2nd args: action
const initialState = {
    counter : 0,
    qa_list: [],
    qa_pager: {
        pageCount: 1,
        itemPerPageCount: 5,
    }
}

const reducer = (state = initialState, action) => {
    console.log('TYPE=',action.type);
    if(action.type === 'ON_ADD_COUNTER') {
        let prevCounter = state.counter;
        state = {
            ...state,
            counter : prevCounter+1
        }
        //state.counter = prevCounter+1

        return state;
    }
    
    if(action.type === 'QUESTION_ANSWER_LIST') {
        return state = {...state}


        //console.log('Display QA');
/*        const y= fetch('http://localhost:4000/general/fileread').
        then((data) => {
            return data.json();
        }).then((qa_list) =>{

            //state.qa_list = qa_list.data;
            state = {
                ...state,
                qa_list : qa_list.data
            }
            return state;
        });

        setTimeout(() => {
            console.log('y is',y);
        },2000); */
        /* state = {
            ...state,
            qa_list : [{section: 'ba', question: 'test q', answer: ["aaasas"]}]
        }

        return state; */



       /*  setTimeout(() => {
            return (dispatch) => {
                dispatch({type : 'QUESTION_ANSWER_LIST_M'},)
            }
        },2000); */
    }

    if(action.type === 'QUESTION_ANSWER_LIST_M') {
        state = {
            ...state,
            qa_list : action.payload,
            qa_pager: {...state.qa_pager, pageCount:Math.ceil(action.payload.length/state.qa_pager.itemPerPageCount)}
        }
        return state;
    }

    if(action.type === 'QUESTION_ANSWER_EDIT') {console.log('QUESTION_ANSWER_EDIT');
        state = {...state};
        return state;
    }

    return state;
}

export default reducer;
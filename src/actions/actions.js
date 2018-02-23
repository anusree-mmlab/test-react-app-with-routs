import {ON_ADD_COUNTER, QUESTION_ANSWER_LIST, QUESTION_ANSWER_LIST_M, QUESTION_ANSWER_EDIT} from './actionTypes';


export const getAnswerList= () => {
   /*  return {
        type : QUESTION_ANSWER_LIST,
        payload :{questionArr: 'test'}
    } */

    return dispatch => {
        fetch('http://localhost:4000/general/react/fileread').
        then((data) => {
            return data.json();
          
           //return data;
        }).then((qa_list) =>{
            //const result = JSON.parse(JSON.stringify(qa_list.data));
            const result = JSON.parse(qa_list.data);
            //console.log('>>>data',result);

            dispatch({
                type: QUESTION_ANSWER_LIST_M,
                payload:result 
            });
        });
    }
}

export const onAnswerListReceived= (payload) => {
    return {
        type : QUESTION_ANSWER_LIST_M,
        payload: payload
    }
}

export const onQAEdit= () => {
    console.log('Edit id=');
    return {
        type : QUESTION_ANSWER_EDIT
    }

    /* return dispatch => {
        fetch('http://localhost:4000/general/react/fileupdate',{
            method: 'post',
            body: JSON.stringify({id:id, item: item})
        }).
        then((data) => {
            return data.json();
          
           //return data;
        }).then((qa_list) =>{
            //const result = JSON.parse(JSON.stringify(qa_list.data));
            const result = JSON.parse(qa_list.data);
            //console.log('>>>data',result);

            dispatch({
                type: QUESTION_ANSWER_LIST
            });
        });
    } */
}



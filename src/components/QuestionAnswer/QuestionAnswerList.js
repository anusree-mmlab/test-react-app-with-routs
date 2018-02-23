import React  from 'react';
import classes from './QAStyles.css';
import Aux from '../../hoc/Aux';


const answerDiv = (answerArr) => {
    const answerList = answerArr.map((answerItem, i)=>{
        return (<span>{answerItem}<br/></span>)
    });
    
    return (
        <Aux>
            {answerList}
        </Aux>
    )
}

const preparePager = (props) => {
    const pagerInfo = props.qaPager;
    const splitStart = (props.currentPage - 1) * (pagerInfo.itemPerPageCount);
    
    const itemArr = props.qaList.splice(splitStart, pagerInfo.itemPerPageCount);

    const questionList = itemArr.map((item,i) => {
        return (
            <div key={item.question} 
                className={classes.questionContainer}
                onClick={() => props.editQuestionAnswer(item.id)}
                >
                <div className={classes.Question}>
                    {((props.currentPage-1) * pagerInfo.itemPerPageCount) + i+1}. {item.question}
                </div>

                <div className={classes.Answer} >
                    {answerDiv(item.answer)}
                </div> 
                <div className={classes.Type}>{item.section}</div>
                <div className={classes.Edit}
                >Edit</div>
            </div>
        )
    }); 

  return  questionList;
  //return (<div>aaaa</div>);
}


const QuestionAnswerList = (props) => {
    
    const pagerInfo = props.qaPager;
    const activePageStyle = {backgroundColor: '#5c0949', color: 'white'};
    const normalPageStyle = {backgroundColor: '#f9aa7f', color: 'black'};
    

    const paginationList = (pCount) => {
        let totalPageCount = [];
        for (let i = 0; i < pCount; i++) {
            totalPageCount.push(i + 1);
        }
       const PL =  totalPageCount.map((page) => {
            return (
                <span key={'page_'+page}  
                    className={classes.PageItem}  
                    onClick={($event) => {setPagination(page)}} 
                    style={(page===props.currentPage)? activePageStyle:normalPageStyle}
                    >
                {page}
                </span>
            )
        });

        return (
            <Aux>
                {PL}
            </Aux>    
        ); 
    }

    const setPagination = (page) => {
        props.currentPageChange(page);
        setTimeout(() => {
            preparePager(props);
        },1000);
    }

     
    return(
        <Aux>
            {preparePager(props)}

            <div className={classes.Pager}>
                  <span className={classes.Previous} onClick={($event) => {setPagination(props.currentPage-1)}}> <b>{'<'}</b> </span>
                    {paginationList(pagerInfo.pageCount)}
                <span className={classes.Next}  onClick={($event) => {setPagination(props.currentPage+1)}}> <b>{'>'}</b> </span>
            </div>
        </Aux>
    );
}

export default QuestionAnswerList;
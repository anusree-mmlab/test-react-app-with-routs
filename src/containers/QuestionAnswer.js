import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import {connect} from 'react-redux';
import QAHeader from '../components/QuestionAnswer/QuestionAnswerHeader';
import QuestionAnswerList from '../components/QuestionAnswer/QuestionAnswerList';
import {getAnswerList, onQAEdit} from '../actions/actions';


class QuestionAnswer extends Component {

    state = {
        currentPage: 1,
        editId: null,
        editItem: null
    }
    componentDidMount() {
        this.props.loadQA();

       /*  setTimeout(() => {
            console.log('...',this.props.qa_list);
        },4000); */
    }

    setCurrentPageHandler = (currentPage) => {
        const newState = {...this.state, currentPage:currentPage};
        this.setState(newState);
    }

    onEditQuestionAnswerHandler= (id) => {
        const newState = {...this.state, editId:id};
        this.setState(newState);
        this.props.editQA();
    }

    render() {
        return (
            <Aux>
                <QAHeader/>
                <QuestionAnswerList 
                    qaList={this.props.qa_list}
                    qaPager={this.props.qa_pager}
                    currentPage={this.state.currentPage}
                    currentPageChange = {this.setCurrentPageHandler}
                    editQuestionAnswer = {this.onEditQuestionAnswerHandler}
                />
            </Aux>
        )
    }
}

const MapStateToProps = (state) => {
    return state;
}

const MapDispatchToProps = (dispatch) => {
    return {
        loadQA : () => dispatch(getAnswerList()),
        editQA : () => dispatch(onQAEdit())
    }
}


export default connect(MapStateToProps,MapDispatchToProps) (QuestionAnswer);
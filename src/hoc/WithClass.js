import React, { Component } from 'react';

const withClass = (WrappedComponent, classNameVal) => {
//Returning a class, a common way of implementing HOC
return class extends Component {
    render() {

        if(classNameVal) {
            return (
                <div className={classNameVal}>
                     <WrappedComponent {...this.props}/>
                </div>
            )
        } else {
            return (
                <WrappedComponent {...this.props}/>
            );
        }
    }
}
//Returning a function- Another way of doing this
  /*   return (props) => {
        return <WrappedComponent {...props}/>
    } */
}

export default withClass;
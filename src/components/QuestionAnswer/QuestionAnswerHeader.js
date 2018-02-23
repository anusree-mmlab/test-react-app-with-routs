import React  from 'react';
import classes from './QAStyles.css';

const QAHeader = () => {
    return(
        <header className={classes.header}>
            <div className={classes.htwo}>
                <h2>Questions/Answers</h2>
            </div>

            <div className={classes.newQdiv}>
                <button className={classes.newQButt}>Add New Question</button>
            </div>

            <div className={classes.resetDiv}>
                <button className={classes.reset}>Reset</button>
            </div>
        </header>
    );
}

export default QAHeader;
import React from 'react';
import classes from '../../components/form.module.css';

const NewPerson = () => {
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>Create new Person</h2>
            <form className={classes.Form}>
                <span>Name</span>
                <input type="text"></input>
                <span>Address</span>
                <input type="text"></input>
                <select name="employers" id="employers">
                    <option key="1" defaultValue="JP Morgan">JP Morgan</option>
                </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default NewPerson;
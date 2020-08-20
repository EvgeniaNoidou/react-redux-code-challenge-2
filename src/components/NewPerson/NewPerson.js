import React from 'react';
import classes from '../../components/form.module.css';

const NewPerson = props => {
    return (
        <div className={classes.Container}>
            <h2 className={classes.Title}>Create new Person</h2>
            <form className={classes.Form}>
                <span>Name</span>
                <input type="text"></input>
                <span>Address</span>
                <input type="text"></input>
                <select name="employers" id="employers">
                    {props.companies.map(c => <option key={Math.random().toString()} defaultValue={c.name}>{c.name}</option>)}
                </select>
                <button>Save</button>
            </form>
        </div>
    )
}

export default NewPerson;
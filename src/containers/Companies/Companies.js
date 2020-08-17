import React, { useEffect } from 'react';
import NewCompany from '../../components/NewCompany/NewCompany';
import NewPerson from '../../components/NewPerson/NewPerson';
import { connect } from 'react-redux';
import * as actions from '../../store/features/companies/actions';
import { NavLink } from 'react-router-dom';
import classes from './Companies.module.css';

const companies = props => {

    useEffect(() => {
        props.onSetCompanies();
    }, []);

    const companiesOutput = props.storedCompanies.map(company => {
        return (
            <section key={Math.random().toString()} style={{ border: '2px solid grey', width: '80%' }}>
                <h2 className={classes.Link}>{company.name}</h2>
                <label style={{ display: 'block' }}><strong>Address:</strong></label>
                <p>{company.address}</p>
                <label style={{ display: 'block' }}><strong>Revenue:</strong></label>
                <p>{company.revenue}</p>
                <label style={{ display: 'block' }}><strong>Phone:</strong></label>
                <p>{company.phoneNumber}</p>
                <NavLink className={classes.Link} to="/details">Company Overview</NavLink>
            </section >
        )
    });

    return (
        <div style={{ display: 'grid', gridTemplateColumns: "70% 30%", gridTemplateRows: "5rem 2.5rem" }}>
            <div>
                <h2>Companies</h2>
                {companiesOutput}
            </div>
            <div style={{ gridColumnStart: "2", width: '180px' }}>
                <NewCompany onAddCompany={props.onAddCompany} />
                <NewPerson />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        storedCompanies: state.companiesReducer.companies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetCompanies: () => dispatch(actions.initCompanies()),
        onAddCompany: (company) => dispatch(actions.addCompany(company))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(companies);

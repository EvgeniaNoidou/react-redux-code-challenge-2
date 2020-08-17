import axios from 'axios';
import * as actionTypes from './actionTypes';


export const setCompanies = (companies) => {
    return {
        type: actionTypes.SET_COMPANIES,
        companies: companies
    }
}

export const insertCompany = (company) => {
    return {
        type: actionTypes.ADD_COMPANY,
        company: company
    }
}

export const initCompanies = () => {
    return dispatch => {
        axios.get('https://react-companies-test-app.firebaseio.com/companies.json')
            .then(response => {
                dispatch(setCompanies(response.data));
            })
            .catch(error => {
            });
    };
};

export const addCompany = (company) => {
    return dispatch => {
        axios.post('https://react-companies-test-app.firebaseio.com/companies.json', company)
            .then(response => {
                dispatch(insertCompany(company));
            })
            .catch(error => {
                console.log(error);
            })
    }
}


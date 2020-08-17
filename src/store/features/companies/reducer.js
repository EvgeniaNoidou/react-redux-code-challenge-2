import * as actionTypes from './actionTypes';

const initialState = {
    companies:
        [
        ]
};

const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_COMPANIES:
            const retrievedCompanies = [];
            for (const key in action.companies) {
                retrievedCompanies.push(action.companies[key]);
            }
            return { companies: [...retrievedCompanies] };
        case actionTypes.ADD_COMPANY:
            return state.companies.concat(action.company);
        default:
            return state;

    }
}

export default companiesReducer;



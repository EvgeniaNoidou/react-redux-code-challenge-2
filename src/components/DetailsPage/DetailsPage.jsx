import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import classes from '../../Companies.module.css';

function DetailsPage(props) {
  const [company, setCompany] = useState({});

  useEffect(() => {
    const companyName = props.match.params["name"];
    const queryParams = '?orderBy="name"&equalTo="' + companyName + '"';
    axios.get('https://react-companies-test-app.firebaseio.com/companies.json' + queryParams)
      .then(response => {
        //setCompany(response.data);

        for (const key in response.data) {
          const company = { ...response.data[key] };
          setCompany(company);
        }
      })
      .catch(error => {
      });

  }, []);


  return (
    <React.Fragment>
      <section key={Math.random().toString()} style={{ border: '2px solid grey', width: '80%' }}>
        <h2 className={classes.Link}>{company.name}</h2>
        <label style={{ display: 'block' }}><strong>Address:</strong></label>
        <p>{company.address}</p>
        <label style={{ display: 'block' }}><strong>Revenue:</strong></label>
        <p>{company.revenue}</p>
        <label style={{ display: 'block' }}><strong>Phone:</strong></label>
        <p>{company.phoneNumber}</p>
      </section >
    </React.Fragment>
  );
}

export default withRouter(DetailsPage);
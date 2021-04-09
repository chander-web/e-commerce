import React from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from '../helpers/constrants';

const Offers = ({result}) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {
            result.map(response => 
              // eslint-disable-next-line react/jsx-wrap-multilines
              <div className="col-md-2" key={response._id}>
                <Link to={response.link} className="text-decoration-none">
                  <img
                    src={`${APIURL.BASE_PATH}${response.image}`}
                    className="img-fluid rounded-circle"
                    alt="..."
                  />
                  <div className="text-center h6">{response.productTitle}</div>
                </Link>
              </div>
            )
          }
        
        </div>
      </div>    
    </React.Fragment>
  );
};

// Offers.propTypes = {

// };

export default Offers;
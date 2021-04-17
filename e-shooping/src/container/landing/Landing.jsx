/* eslint-disable space-before-function-paren */
import axios from 'axios';
import React, { lazy, useEffect, useState } from 'react';
import { APIURL } from '../../helpers/constrants';
const OffersView = lazy(() => import('../../components/Offers'));


const Landing = () => {
  const [offers, setProductOffers] = useState([]);

  useEffect(async () => {
    const productOffersResult = await axios.get(APIURL.PRODUCT_OFFERS);
    productOffersResult.data.data.forEach(response =>
      response.link = '/products/details/' + response._id
    );
    setProductOffers(productOffersResult.data.data);
  }, []);

  return (
    <React.Fragment>
      <div className="bg-info bg-gradient p-3 text-center mb-3">
        <h4 className="m-0">Explore Fashion Collection</h4>
      </div>
      <OffersView result={offers} />
    </React.Fragment>
  );
};



export default Landing;
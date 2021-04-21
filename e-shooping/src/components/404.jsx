import { ReactComponent as IconAlertTriangleFill } from 'bootstrap-icons/icons/exclamation-triangle-fill.svg';
import React from 'react';


const NotFoundView = () => {
  return (
    <div className="container text-center p-5">
      <div className="display-1">
        <IconAlertTriangleFill className="i-va text-warning" />
          404
      </div>
      <h1 className="mb-3">Oops... Page Not Found!</h1>
    </div>
  );
};


export default NotFoundView;
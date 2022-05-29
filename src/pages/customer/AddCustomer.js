import * as React from 'react';
import Footer from '../../common/Footer';

const AddCustomer = () => {
  return (

    <div id="layoutDrawer_content">
      
      <main>
          <div className="container-xl p-5">
              <div className="row justify-content-between align-items-center mb-5">
                  <div className="col flex-shrink-0 mb-5 mb-md-0">
                      <h1 className="display-4 mb-0">Customer</h1>
                      <div className="text-muted">Add new customer</div>
                  </div>
              </div>
          </div>
      </main>

      <Footer/>
    </div>  
  );
};
  
export default AddCustomer;
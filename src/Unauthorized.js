import React from "react";

const Unauthorized = () => {
    console.log("We are Here")
  return (
    <div class="error-page d-flex align-items-center flex-wrap justify-content-center pd-20">
      <div class="pd-10">
        <div class="error-page-wrap text-center">
          <h1>401</h1>
          <h3>Vous n'êtes pas authorisé à accéder à cette page</h3>
          <p>You Seem To Be Trying To Find His Way Home</p>
          <div class="pt-20 mx-auto max-width-200">
            <a href="/" class="btn btn-primary btn-block btn-lg">
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;

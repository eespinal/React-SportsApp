import React from 'react';

// const HomePage = ({onChange,query,results}) =>(
const HomePage = ({onChange,query}) =>(
    <div className='container'>
      <div className='col-xs-4'>
          <input className='form-control' placeholder='Search' onChange={onChange}></input>
      </div>
      <div>
        { query }
      </div>
    </div>
)
export default HomePage;

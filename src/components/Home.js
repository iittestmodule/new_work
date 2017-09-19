import React from 'react';
import { Link } from 'react-router-dom';
import Span from './Span';

const Home = (props) => (
  <div className='panel panel-default'>
    <div className='panel-heading text-center'>
      <h5>IIT TEST MODULE</h5>
    </div>
    <div className='panel panel-body text-center'>
        <Link to='/test' className='btn btn-default btn-lg'>
          <Span className='glyphicon glyphicon-pencil' /><br/>
          <Span msg='test' />
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to='/record' className='btn btn-default btn-lg'>
          <Span className='glyphicon glyphicon-th-list'/><br/>
          <Span msg='record' />
        </Link>
    </div>
  </div>
);

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Span from './Span';

const Class = (props) => (
  <div className='panel panel-default'>
    {console.log(props, '<<<<<<<<<<<<<<<<')}
    <div className='panel-heading text-center'>
      <h5>Please select your stanard to proceed</h5>
    </div>
    <div className='panel panel-body text-center row'>
      <div className='col-xs-4 space-top-bottom-5'>
        <Link to={`${props.location.pathname}`+'/9'} className='btn btn-default btn-lg btn-block'>
          <Span msg='9' />
        </Link>
      </div>
      <div className='col-xs-4 space-top-bottom-5'>
        <Link to={`${props.location.pathname}`+'/10'} className='btn btn-default btn-lg btn-block'>
          <Span msg='10' />
        </Link>
      </div>
      <div className='col-xs-4 space-top-bottom-5'>
        <Link to={`${props.location.pathname}`+'/11'} className='btn btn-default btn-lg btn-block'>
          <Span msg='11' />
        </Link>
      </div><br/>
      <div className='col-xs-4 space-top-bottom-5'>
        <Link to={`${props.location.pathname}`+'/12'} className='btn btn-default btn-lg btn-block'>
          <Span msg='12' />
        </Link>
      </div>
      <div className='col-xs-4 space-top-bottom-5'>
        <Link to={`${props.location.pathname}`+'/13'} className='btn btn-default btn-lg btn-block'>
          <Span msg='dropper' />
        </Link>
      </div>
    </div>
  </div>
);
export default Class;
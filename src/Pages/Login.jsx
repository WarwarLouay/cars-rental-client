import React from 'react';
import { Row, Col, Form, Input } from 'antd';
import car from '../assets/images/car.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserLogin } from '../Redux/Actions/UserActions';

const Login = () => {

  const dispatch = useDispatch();

  function onFinish(values) {
    dispatch(UserLogin(values));
    console.log(values);
  };

  return (
    <div className='login'>
      <Row gutter={16} className='d-flex align-items-center'>
        <Col lg={16} style={{position: 'relative'}}>
          <img src={car} alt='' />
        </Col>
        <Col lg={8} className='text-left p-5'>
          <Form layout='vertical' className='login-form p-5' onFinish={onFinish}>
            <h1>Login</h1>
            <hr />
            <Form.Item name='username' label='Username' rules={[{required: true}]}>
              <Input />
            </Form.Item>

            <Form.Item name='password' label='Password' rules={[{required: true}]}>
              <Input />
            </Form.Item>

            <button className='btn1 mt-2 mb-3'>Login</button>
            <br />
            <Link to='/register'>Register</Link>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login

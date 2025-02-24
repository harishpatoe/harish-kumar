import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const Register = () => (
  
  <div className="max-h-fit max-w-full border-2 border-black">
      <h1 className='text-4xl py-5 text-center'>Register</h1>
    <Form
      // name="basic"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >
      {/* Username */}
      <div className='mx-10'>
        <Form.Item
          label="Username"
          name="Username"
        >
          <Input placeholder='Enter your Username'/>
        </Form.Item>
      </div>

      {/* E-mail */}
      <div className='mx-10'>
        <Form.Item
          label="E-mail"
          name="E-mail"
        >
          <Input placeholder='Enter your E-mail'/>
        </Form.Item>
      </div>

      {/* Password */}
      <div className='mx-10'>
        <Form.Item
          label="Password"
          name="Password"
        >
          <Input.Password placeholder='Enter your Password'/>
        </Form.Item>
      </div>

      {/* Confirm Password */}
      <div className='mx-10'>
        <Form.Item
          label=" Confirm Password"
          name="Confirm Password"
        >
          <Input.Password placeholder='Enter your Confirm Password'/>
        </Form.Item>
      </div>

      {/* Checkbox */}
      <div className='mx-10'>
        <Form.Item name="Login" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </div>

      {/* Register Button */}
      <Form.Item label={null} className='w-full place-items-center'>
        <Button type="primary" htmlType="Register" className='w-50'>
          Register
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default Register;
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  
  <div className="max-h-fit max-w-full border-2 border-black">
      <h1 className='text-4xl py-5 text-center'>Login</h1>
    <Form
      // name="basic"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >

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

      {/* Checkbox */}
      <div className='mx-10'>
        <Form.Item name="Login" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </div>

      {/* Login Button */}
      <Form.Item label={null} className='w-full place-items-center'>
        <Button type="primary" htmlType="Login" className='w-50'>
          Login
        </Button>
      </Form.Item>
    </Form>
  </div>
);
export default Login;
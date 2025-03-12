import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';
const onFinish = (values) => {
  console.log('Login:', values);
};
// const onFinishFailed = (errorInfo) => {
//   console.log('Failed:', errorInfo);
// };
const Login = () => (
  
  <div className="flex flex-col items-center justify-center min-h-screen p-4">
    <div className="bg-white border-2 border-black rounded-lg shadow-md p-8">
        <h1 className='text-4xl p-5 text-center'>Login</h1>
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
          <Form.Item name="Remember Me" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>
  
        {/* Register and Forget Password Button */}
          <Form.Item label={null} className='w-full'>
            <Button type="link" htmlType="Register" className='w-1/2'>
              Register
            </Button>
            <Button type="link" htmlType="Forget Password" className='w-1/2'>
              Forget Password ?
            </Button>
          </Form.Item>
  
        {/* Login Button */}
        <Form.Item label={null} className='w-full place-items-center'>
          <Button type="primary" htmlType="Login" className='w-50'>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
);
export default Login;
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values from form: ', values);
  };

  const validateMessages = {
    required: '${label} es obligatorio!',
    types: {
      email: '${label} no es un correo válido!',
    },
    string: {
      range: '${label} debe tener entre ${min} y ${max} caracteres!',
    },
    pattern: {
      mismatch: '${label} no cumple con el formato requerido!',
    }
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      validateMessages={validateMessages}
      initialValues={{ remember: true }}
      scrollToFirstError
      style={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <Form.Item
        name="username"
        label="Nombre de Usuario"
        rules={[
          { required: true, message: 'Por favor ingrese su nombre de usuario!' },
          { min: 4, message: 'El nombre de usuario debe tener al menos 4 caracteres!' }
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nombre de Usuario" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Correo Electrónico"
        rules={[
          { type: 'email', message: 'El input no es un correo válido!' },
          { required: true, message: 'Por favor ingrese su correo electrónico!' },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="Correo Electrónico" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          { required: true, message: 'Por favor ingrese su contraseña!' },
          { min: 6, message: 'La contraseña debe tener al menos 6 caracteres!' }
        ]}
        hasFeedback
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Contraseña" />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmar Contraseña"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Por favor confirme su contraseña!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Las contraseñas no coinciden!'));
            },
          }),
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Confirmar Contraseña" />
      </Form.Item>

      <Form.Item name="agreement" valuePropName="checked" rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los términos y condiciones')) }]}>
        <Checkbox>
          Acepto los <a href="">términos y condiciones</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Registrarse
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;

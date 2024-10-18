import React from 'react';
import { Form, Formik, useFormik } from 'formik';
import { basicSchema } from '../form-scheme';
import { Link } from 'react-router-dom';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function Login() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <>
      <h2>Giriş</h2>
      <br />
      <Formik>
        <Form onSubmit={handleSubmit}>
          <div className="input-place">
            <label>Kullanıcı Adı</label>
            <input
              type="text"
              value={values.username}
              onChange={handleChange}
              id="username"
              name="username"
              placeholder="Kullanıcı adı giriniz"
              className={errors.username ? 'input-error' : ''}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="input-place">
            <label>Şifre</label>
            <input
              type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Şifrenizi giriniz"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button disabled={isSubmitting} type="submit">
            Giriş Yap
          </button>
          <Link className="form-link" to="/register">
            Üye Ol
          </Link>
        </Form>
      </Formik>
    </>
  );
}

export default Login;

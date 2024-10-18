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

function Register() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        username: '',
        email: '',
        age: '',
        university: '',
        password: '',
        confirmPassword: '',
        agreeCheckbox: false,
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <>
      <h2>Üye Ol</h2>
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
            <label>Email</label>
            <input
              type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Mail adresinizi giriniz"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="input-place">
            <label>Yaş</label>
            <input
              type="number"
              value={values.age}
              onChange={handleChange}
              id="age"
              placeholder="Yaşınızı giriniz"
              className={errors.age ? 'input-error' : ''}
            />
            {errors.age && <p className="error">{errors.age}</p>}
          </div>
          <div className="input-place">
            <label>Okul</label>
            <select
              name="university"
              id="university"
              placeholder="Kullanıcı Üniversitenizi Seçiniz"
              onChange={handleChange}
            >
              <option value="">Lütfen Üniversiteniz Seçiniz</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="gsu">Galatasaray Üniversitesi</option>
              <option value="odtü">ODTÜ</option>
              <option value="itü">İTÜ</option>
            </select>
            {errors.university && <p className="error">{errors.university}</p>}
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
          <div className="input-place">
            <label>Şifre Tekrar</label>
            <input
              type="password"
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              placeholder="Şifrenizi tekrar giriniz"
              className={errors.confirmPassword ? 'input-error' : ''}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="input-place">
            <input type='checkbox' name="agreeCheckbox" id="agreeCheckbox" onChange={handleChange} />&nbsp;&nbsp;
            <label htmlFor='agreeCheckbox'>Kullanım koşullarını kabul ediyorum</label>
            {errors.agreeCheckbox && <p className="error">{errors.agreeCheckbox}</p>}
          </div>
          <button disabled={isSubmitting} type="submit">
            Üye Ol
          </button>
          <Link className="form-link" to="/">
            Giriş Yap
          </Link>
        </Form>
      </Formik>
    </>
  );
}

export default Register;

import * as yup from 'yup';
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const usernameRegex = /^[A-Za-z]/;

export const basicSchema = yup.object().shape({
  username: yup.string().min(6, 'Kullanıcı adı minumum 6 karakter uzunluğunda olmadılır').max(12, 'Kullanıcı adı maksimum 12 karakter uzunluğunda olmadılır').matches(usernameRegex, { message: 'Geçerli bir kullanıcı adı giriniz', }).required('Kullanıcı adı zorunludur'),
  email: yup.string().email('Geçerli bir email giriniz').required('Email girmek zorunludur'),
  age: yup.number().positive('Lütfen pozitif bir yaş giriniz').integer('Lütfen yaşınızı tam sayı olarak giriniz').required('Yaş girmek zorunludur'),
  password: yup.string().min(5, 'Lütfen minumun 5 karakter giriniz').matches(passwordRegex, { message: 'Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz', }).required('Şifre girmek zorunludur'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Şifreler eşleşmiyor').required('Tekrar şifre girmek zorunludur'),
  university: yup.string().oneOf(['bogazici', 'gsu', 'odtü', 'itü'], 'Lütfen Üniversite seçiniz').required('Lütfen Üniversite seçiniz'),
  agreeCheckbox: yup.boolean().oneOf([true], 'Kullanım koşullarını kabul ediniz')
});

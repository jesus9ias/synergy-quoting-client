import keyStorage from 'key-storage';
import { STORAGE_IS_LOGIN } from '../utils/constants';

const Login = () => import('../views/Login');

export default (component) => {
  if (keyStorage.get(STORAGE_IS_LOGIN, null) === '1') {
    return component;
  }
  return Login;
};

import axios from 'axios';
import { loginSuccess, loginFailure } from '../redux/userState';
import { useDispatch } from 'react-redux';

const baseUrl = 'http://localhost:8800';

export function createUser(data, setSnackMsg) {
  axios.post(baseUrl + '/api/auth/signUp', data)
    .then((response) => {
      console.log(response.data.message);
      setSnackMsg(response.data.message);
    })
    .catch(err => {
      console.log('Error while creating user: ' + err);
      return err;
    });
}

export async function login(data) {
  const dispatch = useDispatch();
  console.log(data);
  try {
    const response = await axios.post(baseUrl + '/api/auth/signin', data);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
}

import React, {useEffect} from 'react';
import './login.scss';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../store/actions/loginAction';
import {useHistory} from 'react-router-dom';

// remove user info
import {validAdmin} from '../../helpers/auths';
import {
  removeUserName,
  removeUserToken,
  saveUserIdentity,
} from '../../helpers/localStorer';

const Login = () => {
  useEffect(() => {
    if (validAdmin()) {
      removeUserName();
      removeUserToken();
    }
  }, []);

  // form validation
  const {register, formState: {errors}, handleSubmit} = useForm();
  const onSubmit = (data) => dispatch(loginAction(data));

  // login api call
  const dispatch = useDispatch();
  const {login_success} = useSelector(state => state.loginReducer);
  const history = useHistory();
  useEffect(() => {
    if (login_success) {
      saveUserIdentity(login_success.result.id, login_success.result.username);
      history.push('/');
    }
  }, [login_success]);

  return (
      <form className="login waver" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register('username', {required: true})}
                 placeholder="Username"
                 className={errors.username && 'error-input-border'}/>
          {errors.username?.type === 'required' &&
          <label className={'error'}>User name is required</label>}
          <input type="password" {...register('password', {required: true})}
                 placeholder="Password"
                 className={errors.password && 'error-input-border'}/>
          {errors.password?.type === 'required' &&
          <label className={'error'}>password is required</label>}
        </div>
        <button type={'submit'}>Login</button>
      </form>
  );
};

export default Login;

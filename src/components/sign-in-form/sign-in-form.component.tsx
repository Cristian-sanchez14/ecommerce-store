/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section className="p-10">
      <div className='flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-16 space-y-4 ">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                        type='email'
                        required
                        onChange={handleChange}
                        name='email'
                        value={email}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        required
                        onChange={handleChange}
                        value={password}
                      />
                    </div>
                    <Button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign In With Google</Button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import background from '../../assets/logos/retrosupply-jLwVAUtLOAQ-unsplash.jpg'

// import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80)`}}>
      <div className='flex justify-evenly'>
        <div className="p-16 m-15 flex justify-evenly">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default Authentication;

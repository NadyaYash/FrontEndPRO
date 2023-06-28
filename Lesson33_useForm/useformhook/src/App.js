
import './App.css';
import FormButton from './components/FormButton';
import FormItem from './components/FormItem';
import Modal from './components/Modal';
import { useState } from 'react';


function App() {

  const [modal, setModal] = useState(false);

  return (
    <div>
      <FormButton color = 'yellow' onClick ={() => setModal(true)} > Open modal window</FormButton>
      <Modal modal={modal} setModal={setModal}>
      <FormItem 
          title='Registration'
          info_text='By registering on the site, you agree to our Rules and Privacy Policy and agree to receive newsletters'
          button_text={{ submit: 'Registration', redirect: 'Login' }}
          type='registration'
        />
      </Modal>
      
      <FormItem title = 'Login'
      info_text='Reset password'
      button_text = {{submit:'Login', redirect: 'Registration'}}
      type = 'login'
       />
      <FormItem title = 'Reset password'
      info_text='The temporary password is valid for 24 hours.'
      button_text = {{submit:'Send'}}
      type = 'reset_password'
      add_text = 'To receive a temporary password, you must enter the email address you provided during registration.' />
    </div>
  );
}

export default App;

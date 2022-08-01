import { useContext, useState } from 'react';
import emailjs from 'emailjs-com';
import { FormStyle } from './styles';
import { LanguageContext } from '../../providers/language';

function ContactForm() {
  const { language } = useContext(LanguageContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_6p6lwyf', e.target, '2jD8IUQJSh8a4Vvem')
      .then(
        (result) => {
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <FormStyle onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            {language ? 'Seu nome:' : 'Your Name:'}
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email">
            {language ? 'Seu Email:' : 'Your Email:'}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="subject">
            {language ? 'Assunto:' : 'Subject:'}
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="Message">
            {language ? 'Sua Mensagem' : 'Your Message:'}
            <textarea
              type="text"
              id="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">{language ? 'Enviar' : 'Send'}</button>
      </FormStyle>
    </div>
  );
}

export default ContactForm;

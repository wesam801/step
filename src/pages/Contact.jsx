import React from 'react';
import '../styles/global.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkrwwld');

  if (state.succeeded) {
    return (
      <div className="p-8 mt-10">
        <div className="mx-auto p-4 rounded-md shadow-lg bg-gray-50">
          <h1 className="text-2xl font-bold text-indigo-500 mb-4 text-center">
            شكرًا لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">تواصل معنا</h2>
      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">دعنا نتحدث عن كل ما يهمك!</h3>
          <p className="contact__details">تواصل عبر البريد الإلكتروني 👋</p>
        </div>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="أدخل اسمك"
                id="name"
                name="name"
              />
            </div>
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="أدخل بريدك الإلكتروني"
                id="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="أدخل الموضوع"
              id="subject"
              name="subject"
            />
          </div>
          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="اكتب رسالتك"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="btn" disabled={state.submitting}>
            إرسال
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
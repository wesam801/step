import React from 'react';

const faqData = [
  {
    question: 'How can I create an account?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'Is there a mobile app available?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How can I reset my password?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How do I update my account information?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How do I update my account information?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    question: 'How do I update my account information?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const FAQItem = ({ question, answer }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
    <p className="text-sm text-gray-600 mt-4">{answer}</p>
  </div>
);

const Faq = () => {
  return (
    <div className="p-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Frequently asked questions
            </h2>
            <p className="text-sm text-gray-600 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas.
            </p>
          </div>

          <div className="space-y-8 lg:col-span-2 max-lg:mt-6">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function FAQs (){
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I buy a pet?",
            answer: "To buy a pet, simply browse the available pets, choose your desired one, and proceed to payment."
        },
        {
            question: "How do I post a review?",
            answer: "Go to the pet's details page, and use the review form to post your feedback."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept all major credit cards, Easypaisa, Jazzcash and Cash On Delivery."
        },
        {
            question: "Can I delete a pet after uploading?",
            answer: "Yes, you can easily delete any pet after uploading it on website."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can contact customer support via our 'Contact Us' page or by emailing petsforsale.official@gmail.com"
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 colo'>
        <Link to='/Home'><img src='./logo-pets.png' className='login_log' style={{marginLeft:'-1rem'}} alt='Logo' /></Link>
        </div>
        </div>
        <div className="faq-container mt-3">
            <h1 className="faq-heading">Frequently Asked Questions</h1>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}

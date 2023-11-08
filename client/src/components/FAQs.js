import React from "react";
import './About.css';

function FAQs() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>FAQs (Frequently Asked Questions)</h1>
      </div>

      <div className="about-box">
        <h2>How do I place an order?</h2>
        <p>
          To place an order, simply browse our selection of plants, add your desired items to the cart, and proceed to the checkout. Follow the prompts to complete your purchase.
        </p>
      </div>

      <div className="about-box">
        <h2>What payment methods do you accept?</h2>
        <p>
          We accept major credit and debit cards, including Visa, MasterCard, and American Express, as well as PayPal for a secure and convenient checkout process.
        </p>
      </div>

      <div className="about-box"> {/* Fix the missing = sign here */}
        <h2>What is your return policy?</h2>
        <p>
          We want you to be happy with your purchase. If your plant arrives damaged or you're unsatisfied for any reason, please contact our customer support within 30 days of receiving your order, and we'll assist you with returns and refunds.
        </p>
      </div>

      <div className="about-box">
        <h2>How do I care for my new plants?</h2>
        <p>
          We provide care instructions with every plant. You can also find helpful care tips on our website. If you have specific questions, feel free to reach out to our plant experts.
        </p>
      </div>

      <div className="about-box">
        <h2>Do you offer international shipping?</h2>
        <p>
          Currently, we only offer shipping within the USA. We're working to expand our service to more locations in the future.
        </p>
      </div>

      <div className="about-box">
        <h2>Can I track my order?</h2>
        <p>
          Yes, you can track your order. Once your order ships, you'll receive a tracking number via email. You can use this number to monitor your order's progress.
        </p>
      </div>

      <div className="about-box">
        <h2>How can I contact your customer support?</h2>
        <p>
          For any inquiries or assistance, please visit our Contact Us page, where you'll find multiple ways to reach our customer support team.
        </p>
      </div>

      <div className="about-box">
        <h2>Are the plants safe for pets and children?</h2>
        <p>
          The safety of our plants is a priority. We provide information on plant toxicity on each product page. If you have specific concerns or questions, please don't hesitate to ask our experts.
        </p>
      </div>

      <div className="about-box">
        <h2>Have More Questions?</h2>
        <p>
          If you have more questions or need further assistance, please feel free to contact us. Our friendly and knowledgeable team is here to help!
        </p>
      </div>
    </div>
  );
}

export default FAQs;

import React, { useState } from "react";
import ChatbotContainer from "../modules/chatbotembedding";
import MyComponent from "../modules/chatbotembedding/components/chatbot";
import UserForm from "../modules/chatbotembedding";
import UserForm1 from "../modules/chatbotembedding/components/chatbot";

const Menu: React.FC = () => {
  return (
    <div className="relative">
      <div className="mt-5 ml-8">
        <UserForm/>
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import CustomContainer from "../../Styles/CustomContainer";
import CardSection from "../CardSection/CardSection";
import ChartSection from "../ChartSection/ChartSection";
import FAQ from "../FAQsection/FAQ";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MessageSection from "../MessageSection/MessageSection";
import PaymentSection from "../PaymentSection/PaymentSection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <CustomContainer>
        <CardSection />
        <ChartSection />
        <MessageSection />
        <PaymentSection />
        <FAQ />
      </CustomContainer>
        <Footer/>
    </div>
  );
};

export default HomePage;

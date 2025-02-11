import React from "react";
import ContactForm from "./ContactForm";

function page() {
  return (
    <div className="px-20">
      <div className="py-40">
        <h1 className="text-[90px] leading-none">Your vision, our</h1>
        <h1 className="text-[90px] leading-none">expertise, let's create </h1>
        <h1 className="text-[90px] leading-none">impact. </h1>
      </div>
      <div className="w-1/2 ml-auto text-[18px] ">
        <p>
          Do you have a project, a technical challenge, or an idea to bring to
          life? The Trikon Innovations team is here to support you in achieving
          your ambitions in digital solutions. Whether you want to discuss a
          software proof of concept, explore digital opportunities, or simply
          seek expert advice, feel free to contact us. Together, let's bring
          your ideas to life with the help of our software development experts.
        </p>
      </div>
      {/* <ContactForm /> */}
    </div>
  );
}

export default page;

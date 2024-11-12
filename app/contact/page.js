"use client";
import React, { useEffect, useState } from "react";
import FormInput from "../components/contact-components/form-inputs";
import FormSelect from "../components/contact-components/form-select";
import OurProps from "../props/contact-props/props";
import Info from "../components/contact-components/info"
import ButtonComponenet from "../components/foundation-components/button";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    comments: "",
    location: "",
  });
  const [finalFormData, setFinalFormData] = useState({});
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    if (finalFormData.length > 0) {
      setSubmit(true);
    }
  }, [finalFormData]);
  useEffect(() => {
    console.log(finalFormData);
  }, [finalFormData]);
  useEffect(() => {
    console.log(formData);
  }, [finalFormData]);

  function updateForm(event) {
    setSubmit(true);
    event.preventDefault();
    setFinalFormData((prevData) => ({
      ...prevData,
      ...formData,
    }));
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      comments: "",
      location: "",
    });
  }
  function Submited() {
    if (submit) {
      return (
        <h1 className="text-[#79C35C] p2">Your Message Has Been Submitted</h1>
      );
    } else {
      return;
    }
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSubmit(false);
  }
  return (
    <div className="flex flex-col space-y-9">
      <Info
        {...OurProps.Info}
        />
      <form
        onSubmit={updateForm}
        className="flex flex-col space-y-4 w-full custom-padding"
      >  
        <FormInput {...OurProps.Name} theOnChange={handleChange} theValue={formData.name}/>
        <FormInput {...OurProps.Email} theOnChange={handleChange} theValue={formData.email}/>
        <FormInput {...OurProps.PhoneNumber} theValue={formData.phoneNumber}
          theOnChange={(e) => { const numericValue = e.target.value.replace(/[^0-9]/g, ""); handleChange({
              target: { name: "phoneNumber", value: numericValue },
            });
          }}
        />
        <FormSelect {...OurProps.Location} theOnChange={handleChange} theValue={formData.location}
        />
        <FormInput {...OurProps.Comments} theOnChange={handleChange} theValue={formData.comments}
        />
        <ButtonComponenet
        CTA = "SUBMIT"
        />
        <Submited/>
      </form>
    </div>
  );
};

export default Contact;

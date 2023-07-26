import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // You can perform your form submission logic here
    console.log(values);
    resetForm();
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-center text-4xl font-bold text-[#001b5e]">
        Contact
      </h1>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="uppercase text-sm py-2">
                Name
              </label>
              <Field
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
                id="name"
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="uppercase text-sm py-2">
                Phone Number
              </label>
              <Field
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
                id="phone"
              />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="email" className="uppercase text-sm py-2">
                Email
              </label>
              <Field
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="email"
                id="email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="subject" className="uppercase text-sm py-2">
                Subject
              </label>
              <Field
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="subject"
                id="subject"
              />
              <ErrorMessage name="subject" component="div" className="error" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="uppercase text-sm py-2">
                Message
              </label>
              <Field
                as="textarea"
                className="border-2 rounded-lg p-3 flex border-gray-300"
                name="message"
                id="message"
                rows="10"
              />
              <ErrorMessage name="message" component="div" className="error" />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#001b5e] text-gray-100 mt-4 p-4 w-full rounded-lg "
          >
            Send Message
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Contact;

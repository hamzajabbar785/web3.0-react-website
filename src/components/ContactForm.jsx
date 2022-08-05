import React from "react";
import GradientBtn from "./GradientBtn";

function ContactForm() {
  return (
    <div className="p-4 text-left">
      <form
        action="https://getform.io/f/d3b537c4-c052-48fd-b252-d0c9e2660859"
        method="POST"
      >
        <div className="grid lg:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="text-sm capitalize py-2 font-light">name</label>
            <input
              type="text"
              name="name"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2 lg:col-span-1">
            <label className="text-sm capitalize py-2 font-light">phone</label>
            <input
              type="text"
              name="phone"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm capitalize py-2 font-light">email</label>
            <input
              type="text"
              name="email"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="text-sm capitalize py-2 font-light">
              message
            </label>
            <textarea
              name="message"
              rows="10"
              className="border-2 text-gray-900 rounded-lg p-3 flex focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <GradientBtn className="ml-4 mt-4 capitalize" title="send message" />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

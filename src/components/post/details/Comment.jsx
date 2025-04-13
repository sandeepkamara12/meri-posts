import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { parsePhoneNumberFromString } from "libphonenumber-js";

const Comment = () => {
    const formik = useFormik({
        initialValues:{
          name:"",
          email:"",
          phone:"",
          message:""
        },
        validationSchema:Yup.object({
          name:Yup.string().min(3, "Name must be at least 3 characters")
          .max(50, "Name cannot exceed 50 characters").required("Author name is required"),
          email:Yup.string().email("Invalid email format").required("Author email is required"),
          // phone:Yup.string().matches(/^[0-9]{10}$/, "Phone number must be 10 digits").required("Author phone is required"),
          phone: Yup.string()
          .test("valid-phone", "Invalid phone number", (value) => {
            if (!value) return false;
            const phoneNumber = parsePhoneNumberFromString(value);
            return phoneNumber ? phoneNumber.isValid() : false;
          })
          .required("Author phone is required"),
          message:Yup.string()
        })
    })
    return (
        <div className="py-10 lg:py-14 w-full">
                <div className="">
                <h1 className="text-xl font-bold md:text-2xl md:leading-tight dark:text-white">
                    Leave a reply:
                    </h1>
                <p className=" mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Your email address will not be published.
                    </p>
                </div>

                <div className="mt-12">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid gap-4 lg:gap-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm text-gray-700 font-medium">Name</label>
                                    <input type="text" name="name" id="name" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    {
                                        formik.touched.name && formik.errors.name ? (
                                            <p className="text-xs text-red-600 mt-2">
                                                    {formik.errors.name}
                                            </p>
                                        ) : null
                                    }
                                </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-700 font-medium">Email</label>
                                <input type="email" name="email" id="email" autoComplete="email" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                {
                                    formik.touched.email && formik.errors.email ? (
                                        <p className="text-xs text-red-600 mt-2">
                                                {formik.errors.email}
                                        </p>
                                    ) : null
                                }
                            </div>

                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm text-gray-700 font-medium">Phone</label>
                                    <input type="tel" name="phone" id="phone" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                    {
                                    formik.touched.phone && formik.errors.phone ? (
                                        <p className="text-xs text-red-600 mt-2">
                                                {formik.errors.phone}
                                        </p>
                                    ) : null
                                }
                                </div>
                            </div>                            

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-700 font-medium">Message</label>
                                <textarea id="message" name="message" rows="6" className="resize-none py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"></textarea>
                            </div>
                        </div>

                        <div className="mt-6 grid">
                            <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Send message</button>
                        </div>

                       
                    </form>
                </div>
        </div>
    );
}

export default Comment;

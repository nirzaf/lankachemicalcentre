"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  userType: z.string().min(1, "Please select user type"),
  district: z.string().min(1, "Please select district"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            For product enquiries, quotations, or technical support, please reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl border">
              <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm mb-2">Mon-Fri from 8:30am to 5:00pm</p>
              <a href="tel:+94762347283" className="text-green-700 font-semibold hover:underline">+94 76 234 7283</a>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
              <p className="text-gray-600 text-sm mb-2">We aim to reply within 24 hours</p>
              <a href="mailto:contact@lankachemicalcentre.com" className="text-blue-700 font-semibold hover:underline">contact@lankachemicalcentre.com</a>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Business Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lanka Chemical Centre<br/>
                Anuradhapura Road,<br/>
                Horawapothana,<br/>
                Sri Lanka.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-2xl border shadow-sm h-full">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Sent Successfully!</h3>
                  <p className="text-gray-600 mb-8 max-w-sm">
                    Thank you for reaching out. Our representative will review your message and contact you shortly.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-green-700 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Enquiry</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input 
                          {...register("name")}
                          type="text" 
                          disabled={isSubmitting}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input 
                          {...register("phone")}
                          type="tel" 
                          disabled={isSubmitting}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input 
                          {...register("email")}
                          type="email" 
                          disabled={isSubmitting}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">I am a... *</label>
                        <select 
                          {...register("userType")}
                          disabled={isSubmitting}
                          className={`w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:outline-none ${errors.userType ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                        >
                          <option value="">Select an option</option>
                          <option value="farmer">Farmer / Grower</option>
                          <option value="plantation">Plantation Buyer</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.userType && <p className="text-red-500 text-xs mt-1">{errors.userType.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">District *</label>
                      <select 
                        {...register("district")}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:outline-none ${errors.district ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                      >
                        <option value="">Select your district</option>
                        <option value="Ampara">Ampara</option>
                        <option value="Anuradhapura">Anuradhapura</option>
                        <option value="Colombo">Colombo</option>
                        <option value="Gampaha">Gampaha</option>
                        <option value="Kandy">Kandy</option>
                        <option value="Kurunegala">Kurunegala</option>
                        <option value="Matale">Matale</option>
                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                        <option value="Polonnaruwa">Polonnaruwa</option>
                        <option value="Ratnapura">Ratnapura</option>
                      </select>
                      {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message / Product Required *</label>
                      <textarea 
                        {...register("message")}
                        rows={4}
                        disabled={isSubmitting}
                        placeholder="Provide details about your requirement..."
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none ${errors.message ? 'border-red-500 focus:ring-red-200' : 'focus:ring-green-200 focus:border-green-500'} disabled:bg-gray-50`}
                      ></textarea>
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                    </div>

                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg flex justify-center items-center transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" /> Send Enquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

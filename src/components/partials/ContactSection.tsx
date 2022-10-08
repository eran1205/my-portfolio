import Image from 'next/image';
import React, { useRef } from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const form = useRef();
 
  const sendEmail = (e: any) => {
    console.log('Trying to send an email')
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs.sendForm('service_vovtsem', 'template_wzge6a4', form.current, '7tI7dnFEkMx7JqA5K')
      .then((result) => {
          // show the user a success message
          console.log('Succeed to send an email')
      }, (error) => {
          // show the user an error
          console.log('Failed to send an email')
      });
  };
  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <Input placeholder="Your Name" />
              <Input placeholder="Email Address" />
            </div>

            <div className="mt-8">
              <Input placeholder="Subject" />
            </div>
            <div className="mt-8">
              <TextArea placeholder="Message" />
            </div>
            <div className="mt-8">
              <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactSection;

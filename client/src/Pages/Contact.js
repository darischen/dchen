import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import '../App.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-[#0073e6]" size={24} />,
      label: 'Email',
      value: 'daris.chen@gmail.com',
      href: 'mailto:daris.chen@gmail.com'
    },
    {
      icon: <Phone className="text-[#0073e6]" size={24} />,
      label: 'Phone',
      value: '(562) 386-3975',
      href: 'tel:+15623863975'
    },
    {
      icon: <Github className="text-[#0073e6]" size={24} />,
      label: 'GitHub',
      value: 'github.com/darischen',
      href: 'https://github.com/darischen'
    },
    {
      icon: <Linkedin className="text-[#0073e6]" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/darischen',
      href: 'https://www.linkedin.com/in/darischen'
    },
    {
      icon: <MapPin className="text-[#0073e6]" size={24} />,
      label: 'Location',
      value: 'San Diego, CA',
      href: null
    }
  ];

  return (
    <div className="section">
      <h1 className="section-title">Contact Me</h1>
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-8">
          <div className="grid gap-6">
            {contactInfo.map((item, index) => (
              item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  {item.icon}
                  <div>
                    <div className="font-semibold text-gray-700">{item.label}</div>
                    <div className="text-[#0073e6]">{item.value}</div>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg"
                >
                  {item.icon}
                  <div>
                    <div className="font-semibold text-gray-700">{item.label}</div>
                    <div className="text-gray-600">{item.value}</div>
                  </div>
                </div>
              )
            ))}
          </div>
          
          <div className="mt-12 text-center">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
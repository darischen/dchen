import React from 'react';
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import '../App.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-white" size={24} />, // White icon for contrast
      label: 'Email',
      value: 'daris.chen@gmail.com',
      href: 'mailto:daris.chen@gmail.com',
      bgColor: 'bg-blue-500' // Background color
    },
    {
      icon: <Phone className="text-white" size={24} />,
      label: 'Phone',
      value: '(562) 386-3975',
      href: 'tel:+15623863975',
      bgColor: 'bg-green-500'
    },
    {
      icon: <Github className="text-white" size={24} />,
      label: 'GitHub',
      value: 'github.com/darischen',
      href: 'https://github.com/darischen',
      bgColor: 'bg-gray-800'
    },
    {
      icon: <Linkedin className="text-white" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/darischen',
      href: 'https://www.linkedin.com/in/darischen',
      bgColor: 'bg-blue-700'
    },
    {
      icon: <MapPin className="text-white" size={24} />,
      label: 'Location',
      value: 'San Diego, CA/Cerritos, CA',
      href: null,
      bgColor: 'bg-red-500'
    }
  ];

  return (
    <div className="section">
      <h1 className="section-title text-center text-3xl font-bold mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contactInfo.map((item, index) => (
          <div key={index} className={`rounded-lg shadow-md p-6 flex items-center gap-4 ${item.bgColor} text-white`}> 
            {item.icon}
            <div>
              <div className="font-semibold">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="underline hover:text-gray-200 transition"
                >
                  {item.value}
                </a>
              ) : (
                <div>{item.value}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

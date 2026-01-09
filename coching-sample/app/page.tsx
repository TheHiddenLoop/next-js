"use client"

import React, { useState } from 'react';
import { Menu, X, ChevronRight, BookOpen, Users, Video, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Award, Target, Heart, Clock, Star, TrendingUp } from 'lucide-react';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                BrightPath Academy
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Teachers', 'Blogs', 'Videos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-700 hover:text-indigo-600 font-medium transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-indigo-600' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Teachers', 'Blogs', 'Videos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-700 hover:text-indigo-600 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nurturing Minds,
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Building Futures
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering students through personalized guidance, quality education, and unwavering support on their academic journey
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Get in Touch
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '5000+', label: 'Students Taught' },
              { number: '50+', label: 'Expert Teachers' },
              { number: '95%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About BrightPath Academy</h2>
            <p className="text-xl text-gray-600">Your trusted partner in academic excellence and personal growth</p>
          </div>

          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12">
            At BrightPath Academy, we believe that every student has the potential to excel. Our institute was founded with a simple yet powerful mission: to provide quality education that goes beyond textbooks, fostering critical thinking, creativity, and confidence in every learner.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Our Mission',
                description: 'To empower students with knowledge, skills, and values that prepare them for academic success and life beyond the classroom.'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Our Vision',
                description: 'To be a beacon of educational excellence, where every student receives personalized attention and mentorship to reach their full potential.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Our Philosophy',
                description: 'We believe in concept-based learning, regular doubt-solving sessions, and creating a supportive environment where students feel valued and motivated.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Educators</h2>
            <p className="text-xl text-gray-600">Experienced mentors dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Dr. Rajesh Kumar',
                subject: 'Mathematics',
                experience: '15+ years of teaching experience. Ph.D. in Mathematics from IIT Delhi. Specializes in making complex concepts simple and engaging.',
                emoji: '👨‍🏫'
              },
              {
                name: 'Prof. Priya Sharma',
                subject: 'Physics',
                experience: '12 years in competitive exam coaching. M.Sc. in Physics. Known for innovative teaching methods and student-centric approach.',
                emoji: '👩‍🏫'
              },
              {
                name: 'Mr. Amit Verma',
                subject: 'Chemistry',
                experience: '10 years of teaching excellence. Gold Medalist in Chemistry. Passionate about practical learning and real-world applications.',
                emoji: '👨‍🔬'
              },
              {
                name: 'Ms. Anjali Reddy',
                subject: 'Biology',
                experience: '8 years of dedicated teaching. M.Sc. in Biotechnology. Focuses on conceptual clarity and connecting theory to practice.',
                emoji: '👩‍🔬'
              }
            ].map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-48 flex items-center justify-center text-7xl">
                  {teacher.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                  <div className="text-indigo-600 font-semibold mb-3">{teacher.subject}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{teacher.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Resources & Tips</h2>
            <p className="text-xl text-gray-600">Insights and guidance to support your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Study Tips',
                icon: <BookOpen className="w-6 h-6" />,
                title: '5 Effective Study Techniques for Better Retention',
                description: 'Discover scientifically proven methods to improve your memory and retention. Learn how active recall, spaced repetition, and the Feynman technique can transform your study sessions.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                category: 'Exam Preparation',
                icon: <Clock className="w-6 h-6" />,
                title: 'How to Manage Exam Stress and Stay Focused',
                description: 'Practical tips for managing anxiety during exam season. Learn breathing techniques, time management strategies, and healthy habits.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                category: 'Motivation',
                icon: <TrendingUp className="w-6 h-6" />,
                title: 'Building Consistency in Your Study Routine',
                description: 'Small, consistent efforts lead to remarkable results. Understand the psychology of habit formation and create a sustainable study routine.',
                color: 'from-orange-500 to-red-500'
              },
              {
                category: 'Learning Strategies',
                icon: <Star className="w-6 h-6" />,
                title: 'The Power of Asking Questions in Learning',
                description: 'Why asking questions is crucial for deep understanding. Learn how to formulate better questions and create a mindset of curiosity.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                category: 'Time Management',
                icon: <Target className="w-6 h-6" />,
                title: 'Balancing School, Coaching, and Self-Study',
                description: 'Effective strategies to manage multiple commitments without burnout. Create a balanced schedule that maximizes productivity.',
                color: 'from-indigo-500 to-blue-500'
              },
              {
                category: 'Subject Mastery',
                icon: <Award className="w-6 h-6" />,
                title: 'Developing Strong Foundations in Mathematics',
                description: 'Mathematics is built on fundamentals. Discover how focusing on basics creates lasting mathematical proficiency.',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((blog, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-r ${blog.color} p-6 text-white`}>
                  <div className="flex items-center space-x-2 mb-2">
                    {blog.icon}
                    <span className="text-sm font-semibold">{blog.category}</span>
                  </div>
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{blog.description}</p>
                  <button className={`text-transparent bg-gradient-to-r ${blog.color} bg-clip-text font-semibold hover:underline inline-flex items-center`}>
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our Teaching Style</h2>
            <p className="text-xl text-gray-600">Watch sample lectures to see how we make learning engaging and effective</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quadratic Equations - Concept Building',
                teacher: 'Dr. Rajesh Kumar',
                subject: 'Mathematics',
                duration: '15 min'
              },
              {
                title: "Newton's Laws of Motion - Interactive Session",
                teacher: 'Prof. Priya Sharma',
                subject: 'Physics',
                duration: '20 min'
              },
              {
                title: 'Organic Chemistry - Basic Concepts',
                teacher: 'Mr. Amit Verma',
                subject: 'Chemistry',
                duration: '18 min'
              }
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 h-56 flex items-center justify-center relative group cursor-pointer">
                  <Video className="w-20 h-20 text-white/90" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ChevronRight className="w-8 h-8 text-indigo-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-indigo-600 text-sm font-semibold mb-2">{video.subject}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm">by {video.teacher}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We're here to answer your questions and support your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Visit Us',
                  content: ['123 Education Street', 'Knowledge Park, City - 110001', 'Near Central Library'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Call Us',
                  content: ['+91 98765 43210', '+91 98765 43211', 'Mon - Sat: 9:00 AM - 6:00 PM'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: 'Email Us',
                  content: ['info@brightpathacademy.com', 'support@brightpathacademy.com', 'We respond within 24 hours'],
                  color: 'from-orange-500 to-red-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">BrightPath</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                Dedicated to nurturing young minds and building bright futures through quality education.
              </p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Youtube className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {['Home', 'About Us', 'Our Teachers', 'Educational Blogs'].map((link, index) => (
                  <li key={index}>
                    <button onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))} className="hover:text-indigo-400 transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                {['Demo Videos', 'Contact Us', 'FAQs', 'Student Testimonials'].map((link, index) => (
                  <li key={index}>
                    <button className="hover:text-indigo-400 transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-sm">
                <li>📍 123 Education Street</li>
                <li>📞 +91 98765 43210</li>
                <li>📧 info@brightpathacademy.com</li>
                <li>🕐 Mon - Sat: 9 AM - 6 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 BrightPath Academy. All rights reserved. Empowering students, building futures.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
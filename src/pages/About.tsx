
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-neubrutalism-dark text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-display mb-6 animate-fade-in">
              About Me
            </h1>
            <p className="max-w-2xl mx-auto text-lg animate-fade-in" style={{animationDelay: '100ms'}}>
              Designer, writer, and digital enthusiast exploring the intersection of creativity and technology.
            </p>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-8/12">
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal mb-8 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-6">
                    <img 
                      src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&auto=format&fit=crop" 
                      alt="Sam Morgan" 
                      className="w-full h-auto border-4 border-neubrutalism-dark transform rotate-[-2deg]"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h2 className="text-2xl font-display mb-4">Sam Morgan</h2>
                    <p className="text-neubrutalism-gray text-sm mb-2">Digital Creator & Designer</p>
                    <p className="mb-4">
                      Hi there! I'm Sam, a digital designer and writer with a passion for creating 
                      experiences that stand out from the crowd. With over 8 years of experience 
                      in the design industry, I've worked with startups, agencies, and Fortune 500 
                      companies to create memorable digital experiences.
                    </p>
                    <p className="mb-4">
                      When I'm not designing or writing, you can find me exploring new hiking trails, 
                      experimenting with film photography, or searching for the perfect cup of coffee 
                      in my city.
                    </p>
                    <div className="flex gap-4">
                      <a href="https://github.com" className="neu-button p-2">
                        <Github size={20} />
                      </a>
                      <a href="https://twitter.com" className="neu-button p-2">
                        <Twitter size={20} />
                      </a>
                      <a href="https://instagram.com" className="neu-button p-2">
                        <Instagram size={20} />
                      </a>
                      <a href="mailto:hello@example.com" className="neu-button p-2">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal mb-8 p-6">
                <h2 className="text-2xl font-display mb-4">My Story</h2>
                <div className="space-y-4">
                  <p>
                    I started my journey in digital design back in 2015, when I graduated with a degree 
                    in Interactive Media Design. My first role was at a small startup where I had to wear 
                    many hats - from UI designer to occasional frontend developer and even content writer.
                  </p>
                  <p>
                    This blog was born out of my desire to share what I've learned along the way. I write 
                    about design trends, development techniques, and finding balance in our increasingly 
                    digital world. My goal is to create content that's not just informative but also 
                    enjoyable to read.
                  </p>
                  <p>
                    I'm particularly interested in how design influences our daily interactions with 
                    technology, and how we can create more human-centered digital experiences. The 
                    neubrutalist aesthetic of this blog reflects my appreciation for bold, authentic 
                    design that doesn't try to hide what it is.
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6">
                <h2 className="text-2xl font-display mb-6">My Skills & Tools</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Design</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">UI/UX Design</span>
                          <span>95%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '95%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Figma</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">Adobe Creative Suite</span>
                          <span>85%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-3">Development</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">HTML & CSS</span>
                          <span>90%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '90%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">JavaScript / React</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '80%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">WordPress</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full bg-neubrutalism-light h-4 border-2 border-neubrutalism-dark">
                          <div className="bg-neubrutalism-teal h-full" style={{width: '75%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <aside className="md:w-4/12">
              <Newsletter />
              
              <div className="bg-white border-4 border-neubrutalism-dark shadow-brutal p-6 mb-8">
                <h3 className="text-xl font-display mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-bold">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="neu-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-bold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="neu-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-bold">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="neu-input resize-none"
                      required
                    />
                  </div>
                  
                  <button type="submit" className="neu-button">
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-neubrutalism-gray border-4 border-neubrutalism-dark shadow-brutal p-6">
                <h3 className="text-xl font-display text-white mb-4">Fun Facts</h3>
                <ul className="space-y-3 text-white">
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-4 h-4 mt-1 bg-neubrutalism-teal"></span>
                    <span>I've visited 15 countries and counting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-4 h-4 mt-1 bg-neubrutalism-teal"></span>
                    <span>I collect vintage design books</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-4 h-4 mt-1 bg-neubrutalism-teal"></span>
                    <span>I can solve a Rubik's cube in under 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-4 h-4 mt-1 bg-neubrutalism-teal"></span>
                    <span>My coffee order is an oat milk cappuccino</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="inline-block w-4 h-4 mt-1 bg-neubrutalism-teal"></span>
                    <span>I'm learning to play the ukulele</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

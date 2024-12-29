import React, { useState, useEffect } from 'react';
import { About, Education, Navbar, Projects, Skills, Testimonials, Contact } from './components';

const App = () => {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default App;

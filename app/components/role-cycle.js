'use client';

import { Typewriter } from 'react-simple-typewriter';

const RoleCycle = () => {
  return (
    <h2 className="role-cycle">
      <Typewriter
        words={[
          'Frontend Developer',
          'Flutter Developer',
          'MERN Stack Developer',
          'Next.js Developer',
          'React Developer',
          'Python Developer',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}      // Typing speed
        deleteSpeed={50}    // Delete speed
        delaySpeed={2000}   // Wait before deleting
      />
    </h2>
  );
};

export default RoleCycle;
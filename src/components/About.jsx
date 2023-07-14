import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1D1E1F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FADE4B]">
              About Me
            </p>
          </div>

          <div></div>

          {/* was px-4 */}
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi! I'm <span className="text-[#574271] hover:underline decoration-[#574271]">Nathan</span>, nice to meet you. Please take a look around.
              </p>
            </div>

            <div>
              <p>
                I'm an elementary school educator who has embarked on an
                exciting journey into the world of web development. Beyond my
                passion for education, I find joy in sports, fitness, hiking,
                Star Wars, gaming, and all forms of art and creative expression.
                I thrive on solving problems through unconventional thinking and
                have a strong desire to build software that enhances user
                experiences.
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full grid sm:grid-cols-2">
            <div>
              <p>
                With a focus on creating interactive and intuitive
                web applications, I aim to merge functionality with aesthetics to
                make a positive impact in the digital realm, promoting
                accessibility and inclusivity. Join me on this exciting journey
                as we bring innovative ideas to life and empower individuals
                through technology. Together, let's create a better and more
                inclusive digital landscape!"
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;

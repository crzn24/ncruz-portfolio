import React from "react";
import resumepdf from "../assets/NCRUZ-DEV-RESUME2023.pdf"
const Resume = () => {
  return (
    <div name="resume" className="w-full h-screen bg-[#1D1E1F] text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            
            <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-[#FADE4B]">
                    Resume
                </p>
            </div>

            <div className="max-w-[1000px] w-full grid grid-cols-2">
                
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 pl-8 gap-8">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Front-End
                        </h1>
                        <ul className="list-disc">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>TailwindCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                        
                    <div>
                        <h1 className="text-2xl font-bold">
                            Back-End
                        </h1>
                        <ul className="list-disc">
                            <li>Node</li>
                            <li>MongoDB, Mongoose</li>
                            <li>MySQL, Sequelize</li>
                            <li>APIs</li>
                            <li>Express</li>
                        </ul>
                    </div>
                        
                    
                </div>
                
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 pl-8 gap-8">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Additional Skills
                        </h1>
                        <ul className="list-disc">
                            <li>Affinity Designer, Procreate</li>
                            <li>Photoshop</li>
                            <li>Miro</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                    <div>
                <a href={resumepdf} download>
                    <button className='text-white border-2 bg-black border-[#FADE4B] rounded-full hover:border-white hover:shadow-md hover:shadow-[#F8E167] duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Download Resume</button>
                </a>
            </div>

                </div>

            </div>

            {/* <div>
                <a href={resumepdf}>
                    <button className='text-white border-2 bg-black border-[#FADE4B] rounded-full hover:border-white hover:shadow-md hover:shadow-[#F8E167] duration-500 px-4 py-3 my-8 mx-auto flex items-center'>Download my Resume</button>
                </a>
            </div> */}

        </div>
    </div>
  );
};

export default Resume;

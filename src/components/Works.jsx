import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { figma, github, liveserver } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link,figma_code_link, liveserver_code_link }) => {

 

  const openImageInNewTab = () => {

    // Open the image in a new tab when the image is clicked

    window.open(source_code_link, "_blank");

  };

 

  return (

    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>

      <Tilt

        options={{

          max: 45,

          scale: 1,

          speed: 450

        }}

        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"

      >

        <div className="relative w-full h-[230px]">

          <img src={image} alt="image"

            className="w-full h-full object-center rounded-2xl"

            onClick={openImageInNewTab}

          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            <div

              onClick={() => window.open

                (source_code_link, "_blank")}

              className=" mr-1 black-gradient w-9 h-9 rounded-full

            flex justify-center items-center cursor-pointer ">

              <img src={github}

                alt="github"

                className="w-1/2 h-1/2

                object-container"

              />

            </div>

            <a

              href={figma_code_link}

              target="_blank" // Open the link in a new tab

              rel="noopener noreferrer" // Recommended for security

              className=" mr-1 black-gradient w-9 h-9 rounded-full

              flex justify-center items-center cursor-pointer"

            >

              <img src={figma} alt="github" className="w-1/2 h-1/2 object-container" />

              {/* <img src={liveserver} alt="liveserver" className="w-1/2 h-1/2 object-container" /> */}

            </a>

            <a

              href={liveserver_code_link}

              target="_blank" // Open the link in a new tab

              rel="noopener noreferrer" // Recommended for security

              className="black-gradient p-1 w-9 h-9 rounded-full

              flex justify-center items-center cursor-pointer"

            >

             

              <img src={liveserver} alt="liveserver" className="w-3/4 h-3/4 object-container" />

            </a>

          </div>

        </div>

 

        <div className="mt-5">

          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          <p className="mt-2 text-secondary text-[14px]">{description}</p>

        </div>

 

        <div className="mt-4 flex flex-wrap gap-2" >

          {tags.map((tag) => (

            <p key={tag.name} className={`text-[14px] ${tag.color}`}>

              #{tag.name}

            </p>

          ))}

        </div>

 

      </Tilt>

    </motion.div>

 

  )

}

 

const Works = () => {

  return (

    <>

      <motion.div variants={textVariant()}>

        <p className= "sm:text-[18px] text-[29px] ml-[70px] text-secondary uppercase tracking-wider">

          My Work

        </p>

        <h2 className= "text-white ml-[70px] font-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]">

          Projects

        </h2>

      </motion.div>

 

      {/* <div className="w-full flex">

        <motion.p variants={fadeIn("", "", 0.1, 1)}

          className="mt-3 text-black text-[17px] leading-[30px]"

        >

          Following projects showcases my skills and experiences through real-world examples of my work .each project is briefly  described with links to code repositories and live demos in it.

        </motion.p>

      </div> */}

      <div className="mt-20 ml-[70px] flex flex-wrap gap-5">

        {projects.map((project, index) => (

          <ProjectCard

            key={`project-${index}`}

            index={index}

            {...project}

          />

        ))}

      </div>

 

 

    </>

  )

}

 

export default SectionWrapper(Works, "work")
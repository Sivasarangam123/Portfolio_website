import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="ml-[20px] flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology)=>(
        <div className=" mt-[22px] w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>

        </div>
      ))}
      </div>
  )
}

export default SectionWrapper(Tech , "");
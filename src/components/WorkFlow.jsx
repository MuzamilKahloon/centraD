import { CheckCircle2 } from "lucide-react"
import code from '../../public/centra/code.webp'
import { checklistItems } from "../constants"
const WorkFlow = () => {
  return (
    <div>
      <div className="mt-20">
        <h2 className="mt-6 text-3xl tracking-wide text-center sm:text-5xl lg:text-5xl">Accelerating your
             <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text">
                {" "}
                coding workflow</span>
             </h2>
             <div className="flex flex-wrap justify-center">
                <div className="w-full p-2 lg:w-1/2">
                <img src={code} alt="Nothing" />
                </div>  
                <div className="w-full pt-12 lg:w-1/2">
                    {checklistItems.map((item , index) =>(
                        <div key={index} className="flex mb-12">
                            <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full bgrounded-full">
                                <CheckCircle2 />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl ">{item.title}</h5>
                                <p className="text-md text-neutral-500 ">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
      </div>
    </div>
  )
}

export default WorkFlow

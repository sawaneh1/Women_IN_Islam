import React, {useState} from 'react'
import { RadioGroup } from "@headlessui/react";


const QuizCard = ({questions}) => {
  const [selected, setSelected] = useState();

  return (
<div className="w-full max-w-md mx-auto relative mt-2  lg:mt-10">
            

            <div className='items-center flex justify-center '>
           
          <h1 className="text-xl p-5 bg-white mb-5 mt-5 w-full">
            Question -{" "}
            <span className="font-bold" >{questions[0]}</span>
            {
                      
            }
          </h1>
          </div>

          <RadioGroup value={selected}  onChange={setSelected}>
            <RadioGroup.Label className="sr-only">
              Server size
            </RadioGroup.Label>
            <div className="space-y-2" key={questions[1].answer}>
                console.log('question', questions[1]),
{
                console.log('question one', questions[1])

}
              {questions[1].answer ? (
                  <div>
                    <RadioGroup.Option
                      
                      value={questions}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                            : ""
                        }
              ${
                checked
                  ? "bg-sky-900 bg-opacity-75 text-white"
                  : "bg-white"
              }
                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <div className="text-sm">
                                  
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {questions[1].answer}
                                </RadioGroup.Label>

                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked
                                      ? "text-sky-100"
                                      : "text-gray-500"
                                  }`}
                                >
                                  <span>
                                    {/* {plan.ram}/{plan.cpus} */}
                                  </span>{" "}
                                  <span aria-hidden="true">&middot;</span>{" "}
                                  {/* <span>{plan.disk}</span> */}
                                </RadioGroup.Description>
                              </div>
                            </div>
                            {checked && (
                              <div className="flex-shrink-0 text-white">
                                {/* <CheckIcon className="w-6 h-6" /> */}
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  </div>
                ) : null
              }
            </div>
          </RadioGroup>
          <div className='mt-3'>
           <div className='flex justify-center '>
               <button className='bg-slate-900 text-center px-10 text-white rounded-lg font-bold '>skip</button>
           </div>'
           <div className='bg-white flex gap-5 mb-6 relative'>
               <div>
                   back
               </div>
               <div className='text-green-700'>..................................</div>
               <div className='absolute right-1'>next</div>

           </div>
          </div>
        </div>
  )
}

export default QuizCard
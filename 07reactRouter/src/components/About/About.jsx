import React from 'react'

function About() {
  return (
    <div className='py-16 bg-white border-2 border-black'>
      <div className="container mx-auto border-2 border-black">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 border-2 border-black">
          <div className="md:5/12 lg:w-5/12">
            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" />
            </div>
        </div>
        <div className="md:7/12 lg:w-6/12 border-2 border-black">
        <h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>React development is carried out by passionate developers</h2>
        <p className='mt-6 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore enim, quis natus, facilis adipisci debitis assumenda numquam dignissimos iusto sed ipsum dolor consequuntur praesentium autem aut eius eligendi incidunt ad</p>
        <p className='mt-6 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis fugit inventore illo suscipit similique sit odit quas accusantium debitis commodi, quaerat voluptates! Odit alias quos laudantium quo soluta architecto.</p>
        </div>
      </div>
    </div>
  )
}

export default About
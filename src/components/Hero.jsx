import vid1 from '../../public/centra/videoframe_0.png'
import vid2 from '../../public/centra/video2.mp4'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className="text-4xl tracking-wide text-center sm:text-6xl lg:text-6xl">
        CentraD makes your code 
        <span className='p-2 text-transparent bg-orange-500 bg-gradient-to-r from to-red-800 bg-clip-text'>
            {" "} 
            more efficient </span>
      </h1>
      <p className='max-w-4xl mt-10 text-lg text-center text-neutral-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias reprehenderit quam labore. Reprehenderit suscipit praesentium vitae rem quisquam maiores doloribus veritatis dolores cumque? Hic itaque harum ducimus blanditiis corrupti!
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className='px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800'>
            Start for free
        </a>
        <a href="#" className='px-4 py-3 border rounded-md'>
            Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video autoPlay loop muted className='w-1/2 mx-2 my-2 border border-orange-700 rounded-lg shadow-orange-400'>
        <source src={vid2} type='video/mp4' />
        </video>
        <img src={vid1} className='w-1/2 mx-2 my-2 border border-orange-700 rounded-lg shadow-orange-400' alt="" />
      </div>
    </div>
  )
}

export default Hero

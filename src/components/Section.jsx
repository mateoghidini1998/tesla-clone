import React from 'react';
import PropTypes from 'prop-types';
const Section = React.forwardRef(({ handleVideoLoop, title, price, description, mediaType, mediaUrl, priceDescription, link, textColor }, ref) => {  return (
    <section ref={ref} className={`w-full overflow-hidden min-h-screen relative ${textColor}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <div className='font-[Gotham_ssm] flex flex-col items-center absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h1 className=' text-[40px] '>{title}</h1>
          <strong className=' text-[20px] font-[500]'>{price}</strong>
          <small className='text-[80%] font-[200] text-[20px] '>{description}</small>
        </div>
        <div className='flex flex-col absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] items-center px-[10%]'>
            { description !== '' ? 
            <div className="flex mb-[30px] justify-evenly w-full">
            <button className='opacity-80 py-2 px-4 bg-white rounded-[6px] min-w-[229px] min-h-[40px]'>
              <span className='text-black'>Order Now</span>
            </button>
            <button className='opacity-70 py-2 px-4 bg-black min-w-[229px] min-h-[40px] rounded-[6px]'>
              <span className='text-white'>Demo Drive</span>
            </button> 
            </div>
            :
          <div className='w-full mb-[30px]'>
            <button className='opacity-70 py-2 px-4 bg-transparent min-w-[229px] min-h-[40px] rounded-[6px]' style={{border: '3px solid white'}}>
              <span className='text-white'>Demo Drive</span>
            </button> 
          </div>
          }
          <p className=' text-[12px] text-center'>{priceDescription}
          <a href="">{link}</a> 
          </p>
        </div>
        {mediaType === 'video' ?
            <video ref={ref} onEnded={handleVideoLoop} loop className="bg_src w-full h-screen object-cover" preload="auto" data-autoplay-desktop="true" data-autoplay-portrait="true" data-autoplay-mobile="true" muted="muted" data-object-fit="true" src={mediaUrl} data-loaded="true" autoPlay></video>
            :
            <img className='bg_src object-cover w-full h-screen' src={mediaUrl} alt="" />
        }
      </section>
  )
}); 

Section.propTypes = {
    handleVideoLoop: PropTypes.func.isRequired, 
  }

export default Section
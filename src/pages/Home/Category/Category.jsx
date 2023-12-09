
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SharedTitle from '../../../components/SharededTitle/SharedTitle';


const Category = () => {
    return (
 <section>
    {/* first child of section */}
    <SharedTitle 
    subHeading={"From 11.00am to 10.00pm"}
    heading={"Order Online"}
    
    >
    </SharedTitle>

    {/* second child */}
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={slide1} alt=''/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt=''/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt=''/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt=''/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Deserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt=''/>
            <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3>
            </SwiperSlide>
   
      </Swiper>

      {/* third child */}
      {/* <div className='bg-orange-500'>
        <div>
            <div>
                <h3>BISTRO BOSS</h3>
                <p>Dolor et sit amet at ea aliquyam lorem eirmod sed lorem,
                     kasd est voluptua magna amet sed labore duo vero.</p>
            </div>
        </div>
      </div> */}
 </section>
    ); 
};

export default Category;
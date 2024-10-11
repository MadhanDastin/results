// components/CustomCarousel.js
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const carouselItems = [
    {
        image: '/images/Home-carousel-Img-01.png',
        name: '1',
    },
    {
        image: '/images/Home-carousel-Img-02.png',
        name: '2',
    },
    {
        image: '/images/Home-carousel-Img-03.png',
        name: '3',
    },
    {
        image: '/images/Home-carousel-Img-04.png',
        name: '4',
    },
];

const CustomCarousel = () => {
    return (
        <Carousel useKeyboardArrows={true} showThumbs={false} showArrows={false} showStatus={false}>
            {carouselItems.map((item, index) => (
                <div className="slide" key={index}>
                    <Image 
                        className="d-block carousel-image" 
                        src={item.image} 
                        alt={`Slide ${index}`} 
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: '100%', height: '200px' }}
                    />
                </div>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;

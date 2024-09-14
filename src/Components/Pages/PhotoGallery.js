// CarouselComponent.js
import React, { useState, useEffect } from 'react';
import imag1 from "../image/img1.jpg";
import imag2 from "../image/img2.jpeg";
import imag5 from '../image/img3.jpg';
import imag3 from "../image/img4.jpeg";
import imag4 from "../image/img5.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const PhotoGallery = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div>
            {mounted && (
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <div>
                        <spa>Database Workshop -2024</spa>
                        <img src={imag1} alt="Image 1"  />
                        
                    </div>
                    <div>
                        <img src={imag2} alt="Image 2" />
                        
                    </div>
                    <div>
                        <img src={imag3} alt="Image 2" />
                        
                    </div>
                    <div>
                        <img src={imag4} alt="Image 2" />
                        
                    </div>
                    <div>
                        <img src={imag5} alt="Image 2" />
                        
                    </div>
                    
                </Carousel>
            )}
        </div>
    );
};

export default PhotoGallery;

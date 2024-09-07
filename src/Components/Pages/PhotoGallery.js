// CarouselComponent.js
import React, { useState, useEffect } from 'react';
import imag2 from "../image/Photo3.png";
import imag3 from "../image/university.png";
import imag4 from "../image/resource.png";
import img1 from "../image/e.jpg";
import img2 from "../image/f.jpg";
import img3 from "../image/h.jpg";
import img4 from "../image/hd1.jpg";
import img5 from "../image/hd2.jpg";
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
                        <img src={imag2} alt="Image 1"  />
                        
                    </div>
                    <div>
                        <img src={imag3} alt="Image 2" />
                       
                    </div>
                    <div>
                        <img src={img2}alt="Image 3" />
                        
                    </div>
                    <div>
                        <img src={img1}alt="Image 3" />
                        
                    </div>
                    <div>
                        <img src={img4}alt="Image 3" />
                        
                    </div>
                    <div>
                        <img src={img5}alt="Image 3" />
                        
                    </div>
                    <div>
                        <img src={imag4}alt="Image 3" />
                        
                    </div>
                    <div>
                        <img src={img3}alt="Image 3" />
                        
                    </div>
                </Carousel>
            )}
        </div>
    );
};

export default PhotoGallery;

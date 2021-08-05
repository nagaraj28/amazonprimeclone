import React ,{forwardRef, useContext} from "react";
import Card from "../components/cards/cards";
import classes from "./cardContainer.css";
import { Context } from "../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./twoRowedCarousel.module.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Scrollbar,
} from "swiper";
import { Link } from "react-router-dom";

export  const CardContainer=forwardRef((props)=>{
    const section = props.section;
    const type = props.type;
    SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, Scrollbar]);
    const {genreUtil} = useContext(Context);
return(
    <>
    <div  className="cardTitle">
            <h3 >
              {type} in {section.title}
             </h3>
           <Link to="/genre" onClick={()=>{genreUtil(section)}}>
           <p style={{marginTop:"27px",marginLeft:"10px",fontSize:"13px",color:"#79b8f3"}}>See more</p>
           </Link> 
        </div>
    <div>
    <div className="prime">
        <Swiper spaceBetween={5}
        slidesPerView={5}
        slidesPerColumn={1}
        navigation={{ nextEl: ".swiper-button2", prevEl: ".swiper-button2" }}
        navigation
     
        speed={800}
        scrollbar={{ draggable: true, hide: true, el: ".swiper-scrollbar" }}
        onSwiper={(swiper) => swiper}
        onSlideChange={() => "slide change"}
        slidesPerColumnFill={"row"}
        breakpoints={{
            500: {
                slidesPerView:1,
            },
            560: {
                slidesPerView:2
            },
            1000:{
                slidesPerView:4
            },
            
            1400:{
                slidesPerView:5
            }

        }  
        } 
        className={styles.container}>
            {
                section.data.map((dataItem,index)=>{
                    return (
                    <SwiperSlide className={styles.subContainer}>
     <Card className={styles.Slide} dataItem={dataItem} type={type==="Movies"?"movies":"series"}  />
    </SwiperSlide>)
                }
                )
            }
        </Swiper>
    </div>
    </div> 
    </>
)
}
)
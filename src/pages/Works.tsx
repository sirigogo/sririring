import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@library/swiper.scss";
import SwiperCore, { Pagination } from "swiper";
import "@library/pagination.scss";
import { styled } from "styled-components";
import axios from "axios";

SwiperCore.use([Pagination]);

const Works = () => {
  const [works, setWorks] = useState([]);

  const settings = {
    spaceBetween: 35,
    slidesPerView: 4,
    breakpoints: {
      500: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      800: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    wrapperClass: "swiper-wrapper",
    pagination: { clickable: true },
  };

  interface workType {
    dataId: number;
    title: string;
    date: string | null;
    text: string;
    img: string;
    link: string;
  }

  const fetchWorkData = async () => {
    try {
      const response = await axios.get("works.json");
      setWorks(response.data.data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchWorkData();
  }, []);

  return (
    <WorkWrap>
      <h4 className="sectionTitle">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/titleIco.png"}
          alt="리액트 아이콘"
        />
        <p>WORKS</p>
      </h4>
      <div className="swiperWrap">
        <Swiper {...settings}>
          {works.map((data: workType) => (
            <SwiperSlide key={data.dataId}>
              <a href={data.link} target="_blank">
                <div className="imgWrap">
                  <img src={data.img} alt={data.title} />
                  <div>VIEW WEBSITE</div>
                </div>
                <div className="txtWrap">
                  <div>
                    <h4>{data.title}</h4>
                    <span>{data.date}</span>
                  </div>
                  <p>{data.text}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </WorkWrap>
  );
};

const WorkWrap = styled.div`
  .swiperWrap {
    margin-top: 100px;
    padding: 0 50px;
    height: 550px;
    .swiper-container {
      height: 100%;
    }
  }
  .swiper-slide {
    .imgWrap {
      width: 100%;
      height: 320px;
      overflow: hidden;
      position: relative;
      transition: all 0.3s;
      div {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 11;
        transform: translate(-50%, -50%);
        width: 220px;
        height: 63px;
        border: 1px solid #fff;
        color: #fff;
        font-size: 22px;
        display: none;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        transition: all 0.5s;
      }
    }
    &:hover {
      .imgWrap {
        border: 1px solid #fff;
        div {
          display: flex;
        }
        &:after {
          content: "";
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
        }
      }
      img {
        transform: translateY(-50%);
      }
    }
    .txtWrap {
      margin-top: 20px;
      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h4 {
          font-size: 22px;
          color: #fff;
        }
        span {
          font-size: 16px;
          color: #818091;
          font-weight: 700;
        }
      }
      p {
        margin-top: 15px;
        font-size: 16px;
        color: #818091;
        line-height: 24px;
        word-break: keep-all;
      }
    }
  }
  @media (max-width: 1400px) {
    .swiper-slide {
      .imgWrap {
        height: 280px;
        div {
          width: 200px;
          height: 53px;
          font-size: 20px;
        }
      }
      .txtWrap {
        & > div {
          align-items: flex-start;
          flex-direction: column;
          h4 {
            font-size: 18px;
          }
          span {
            font-size: 14px;
            margin-top: 7px;
          }
        }
        p {
          margin-top: 10px;
          font-size: 14px;
          line-height: 24px;
        }
      }
    }
  }
`;

export default Works;

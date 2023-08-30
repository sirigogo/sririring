import { useState } from "react";
import { styled } from "styled-components";

const Carrer = () => {
  const [index, setIndex] = useState(0);

  interface carrerDataType {
    id: number;
    title: string;
    list: itemsProps[];
  }

  interface itemsProps {
    date: string;
    title: string;
    major: string;
    text: string;
  }

  const carrerData: carrerDataType[] = [
    {
      id: 0,
      title: "CAREERS",
      list: [
        {
          date: "2020.12 ~ 2022.12",
          title: "바이브리스",
          major: "웹퍼블리셔",
          text: `php를 기반으로 html, css, javascript를 이용하여 다양한 기업의
          홈페이지를 제작해왔습니다. 이 기간동안 50여개의 프로젝트를
          수행하며 웹 디자인과 기술에 대한 폭넓은 경험을 쌓아왔습니다.`,
        },
        {
          date: "2015.02 ~ 2019.03",
          title: "(사)사회적책임경영품질원",
          major: "기획팀 연구원",
          text: `기획팀에서 활동하면서 컨벤션 및 이사회, 정기총회를 기획하고
          성공적으로 진행하여 다양한 인적 네트워크를 형성했습니다. 이를
          통해 뛰어난 기획력과 소통능력을 갖추게 되었습니다.`,
        },
      ],
    },
    {
      id: 1,
      title: "EDUCATION",
      list: [
        {
          date: "2023.02 ~ 2023.08",
          title: "코드스테이츠",
          major: "웹프론트엔드 과정",
          text: `Javascript, Typescript 등 객체지향언어 학습을 진행하며, 백엔드와 협업하여 리액트를 이용한 프로젝트를 2개 완성하였습니다.`,
        },
        {
          date: "2020.06 ~ 2020.12",
          title: "인컴트랜드",
          major: "스마트웹&콘텐츠개발 과정",
          text: `다양한 스마트기기 플랫폼에 적용가능한 웹기반의 콘텐츠서비스를
        기획, 분석, 설계, 구현 테스트, 배포 및 유지보수하는 학습을
        진행했습니다.`,
        },
        {
          date: "2013.03 ~ 2015.03",
          title: "유한대학교",
          major: "컴퓨터공학과",
          text: `다양한 스마트기기 플랫폼에 적용가능한 웹기반의 콘텐츠서비스를
        기획, 분석, 설계, 구현 테스트, 배포 및 유지보수하는 학습을
        진행했습니다.`,
        },
      ],
    },
  ];

  return (
    <CarrerWrap>
      <h4 className="sectionTitle">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/titleIco.png"}
          alt="리액트 아이콘"
        />
        <p>CAREERS & EDUCATION</p>
      </h4>
      {/* <div className="imgWrap">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/icospace.png"}
            alt="지구 이미지"
          />
        </div> */}
      <div className="inner">
        <ul>
          {carrerData.map((data) => (
            <li
              key={data.id}
              className={index === data.id ? "active" : ""}
              onClick={() => setIndex(data.id)}
            >
              {data.title}
            </li>
          ))}
        </ul>
        <div className="tabBox">
          {carrerData
            .filter((item) => index === item.id)
            .map((item) => (
              <div className="tabContent" key={item.id}>
                {item.list.map((listItem, listItemIndex) => (
                  <div className="tabItem" key={listItemIndex}>
                    <span>{listItem.date}</span>
                    <h5>{listItem.title}</h5>
                    <p>{listItem.major}</p>
                    <p className="carrerTxt">{listItem.text}</p>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </CarrerWrap>
  );
};

const CarrerWrap = styled.div`
  .inner {
    margin-top: 150px;
    ul {
      display: flex;
      margin-bottom: 20px;
      justify-content: center;
      li {
        cursor: pointer;
        margin: 0 10px;
        width: 194px;
        height: 68px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid transparent;
        -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0px;
          bottom: 0px;
          z-index: 1;
          width: 0%;
          height: 1px;
          background: #fff;
          box-shadow: inset 0px 0px 0px #fff;
          display: block;
          -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
          transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        }
        &:after {
          content: "";
          position: absolute;
          right: 0px;
          top: 0px;
          z-index: 1;
          width: 0%;
          height: 1px;
          background: #fff;
          -webkit-transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
          transition: all 0.4s cubic-bezier(0.5, 0.24, 0, 1);
        }
        &.active {
          border: 1px solid rgba(255, 255, 255, 0.8);
        }
        &:hover {
          &::before {
            width: 100%;
          }
          &::after {
            width: 100%;
          }
          border-left: 1px solid #fff;
          border-right: 1px solid #fff;
        }
      }
    }
    .tabContent {
      display: flex;
    }
    .tabItem {
      border: 1px solid #464553;
      padding: 35px 25px;
      color: #fff;
      height: 400px;
      transition: all 0.3s;
      margin: 0 20px;
      span {
        font-size: 16px;
        color: #818091;
      }
      h5 {
        font-size: 23px;
        margin: 20px 0 10px;
        font-weight: 600;
      }
      p {
        font-size: 18px;
        margin-bottom: 20px;
        line-height: 25px;
        word-break: keep-all;
        &:last-child {
          margin-bottom: 0;
          font-size: 16px;
          color: #818091;
        }
      }
      &:hover {
        border: 1px solid #fff;
        box-shadow: 0px 0px 12px 4px rgba(255, 255, 255, 0.25);
      }
      &.swiper-slide-active {
        border: 1px solid #fff;
        box-shadow: 0px 0px 12px 4px rgba(255, 255, 255, 0.25);
      }
    }
  }
  @media (max-width: 1400px) {
    padding: 0 20px;
    .inner {
      margin-top: 100px;
    }
  }
  @media (max-width: 1000px) {
    padding: 0 20px;
    .inner {
      margin-top: 80px;
      .tabItem {
        padding: 25px 20px;
        margin: 0 15px;
      }
    }
  }
  @media (max-width: 750px) {
    padding: 0 20px;
    .inner {
      margin-top: 80px;
      ul {
        li {
          width: 170px;
          height: 48px;
        }
      }
      .tabItem {
        padding: 25px 20px;
        margin: 0 15px;
        span {
          font-size: 15px;
        }
        h5 {
          font-size: 20px;
          margin: 15px 0 8px;
        }
        p {
          font-size: 14px;
          margin-bottom: 15px;
          &:last-child {
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    padding: 0 20px;
    .inner {
      margin-top: 60px;
      ul {
        li {
          width: 170px;
          height: 48px;
        }
      }
      .tabContent {
        flex-direction: column;
      }
      .tabItem {
        padding: 25px 20px;
        margin: 15px 0;
        height: auto;
        span {
          font-size: 15px;
        }
        h5 {
          font-size: 20px;
          margin: 15px 0 8px;
        }
        p {
          font-size: 14px;
          margin-bottom: 15px;
          &:last-child {
            font-size: 14px;
          }
        }
      }
    }
  }
`;

export default Carrer;

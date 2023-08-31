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
          text: `- php 기반 html, css, javascript를 이용해 홈페이지 제작
          - 다양한 기업의 홈페이지 50여개 제작
          - 디자이너, 백엔드 개발자와 협업하여 프로젝트 진행
          - 고객 요구사항을 분석하여 효과적인 사용자 경험과 디자인을 구현
          - 고객 소통 및 응대`,
        },
        {
          date: "2015.02 ~ 2019.03",
          title: "(사)사회적책임경영품질원",
          major: "기획팀 연구원",
          text: `- 기획팀에서 활동하면서 다양한 컨벤션 및 이사회, 정기총회를 기획 
          - 행사 진행 및 관리
          - 고객 소통 및 응대`,
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
          text: `- Javascript, Typescript 등 객체지향언어 학습
          - AWS S3 배포
          - 백엔드 협업 프로젝트 2회 경험
          - 그룹회고 및 활동 모더레이터`,
        },
        {
          date: "2020.06 ~ 2020.12",
          title: "인컴트랜드",
          major: "스마트웹&콘텐츠개발 과정",
          text: `- html, css, javascript 학습
        - 프로젝트 3회 수행
        - 일러스트 및 포토샵으로 디자인 작업 학습
        - 다양한 배포 실습 및 유지복수 학습`,
        },
        {
          date: "2013.03 ~ 2015.03",
          title: "유한대학교",
          major: "컴퓨터공학과 졸업",
          text: `- 컴퓨터 공학 전공으로 학문적 기반을 다지며, 웹 개발 학습
          - 관련 이수 과목을 통해 데이터베이스, 웹 프로그래밍, 소프트웨어 공학 등 다양한 분야에서 지식과 기술을 습득
          - 웹 개발 영역에서의 다양한 역량을 확보`,
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
                    <p className="carrerTxt">
                      {listItem.text.split("\n").map((line) => (
                        <>
                          {line}
                          <br />
                        </>
                      ))}
                    </p>
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
      flex-shrink: 1;
      flex-grow: 1;
      flex-basis: min-content;
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
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 28px;
        word-break: keep-all;
        &:last-child {
          margin-bottom: 0;
          font-size: 18px;
          line-height: 30px;
          word-break: keep-all;
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
      margin-top: 30px;
      ul {
        margin-bottom: 10px;
        li {
          width: 170px;
          height: 48px;
        }
      }
      .tabContent {
        flex-direction: column;
      }
      .tabItem {
        padding: 15px 10px;
        margin: 10px 0;
        height: auto;
        span {
          font-size: 12px;
        }
        h5 {
          font-size: 17px;
          margin: 10px 0 8px;
        }
        p {
          font-size: 12px;
          margin-bottom: 10px;
          &:last-child {
            font-size: 11px;
            line-height: 24px;
          }
        }
      }
    }
  }
`;

export default Carrer;

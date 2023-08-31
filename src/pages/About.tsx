import { styled } from "styled-components";

interface AboutProps {
  isActive: boolean;
}

const About = ({ isActive }: AboutProps) => {
  return (
    <AboutWrap className={`About ${isActive ? "active" : ""}`}>
      <h4 className="sectionTitle">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/titleIco.png"}
          alt="리액트 아이콘"
        />
        <p>ABOUT ME</p>
      </h4>
      <div className="imgWrap">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/siri.jpg"}
          alt="프로필 이미지"
        />
      </div>
      <p>
        <span>안녕하세요 :)</span>
        {/* <span>
          웹프론트엔드 개발자 장근실입니다. <br />
          UI 디자인에 큰 관심을 가지고 있으며, 사용자 경험을 향상시키기 위해
          노력하고 있습니다.
        </span>
        <span>
          화려하고 매력적인 홈페이지를 만드는 것을 즐기며, 웹 기술의 발전에 항상
          관심을 가지고 있습니다.
          <br />
          끊임없이 새로운 기술을 학습하고 적용하여 현실적이고 혁신적인 웹
          애플리케이션을 제작하는 것이 목표입니다.
        </span>
        <span>
          아직 길지 않은 경력이지만, 잘 할 수 있다는 확신과 열정이 있습니다.
        </span> */}
      </p>
      <div className="textWrap">
        <p># 사용자의 빠른 동선 관련 UI 디자인에 관심이 높은</p>
        <p># 문제 해결에 있어 긍정적인 의사소통과 건강한 행동을 유지하는</p>
        <p># 화려하고 매력적인 홈페이지 구현을 즐기는</p>
        <p># 현실적이고, 혁신적인 웹 어플리케이션을 제작하고 싶은</p>
        <p># UI/UX 이해도가 높은 프론트엔드 개발자</p>
      </div>
      <ol className="snsLink">
        <li>
          <a href="https://github.com/sirigogo" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icoGit.png"}
              alt="깃 아이콘"
            />
          </a>
        </li>
        <li>
          <a href="https://sirigogo.tistory.com/" target="_blank">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/icoBlog.png"}
              alt="블로그 아이콘"
            />
          </a>
        </li>
      </ol>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  text-align: center;
  .imgWrap {
    margin: 70px auto 50px;
    width: 300px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 100%;
    filter: drop-shadow(7px 6px 12px rgba(255, 255, 255, 0.25));
    img {
      width: 100%;
      margin-top: -10px;
    }
  }
  p {
    span {
      display: block;
      color: #fff;
      font-size: 20px;
      line-height: 35px;
      word-break: keep-all;
      margin-bottom: 25px;
      &:first-child {
        font-size: 24px;
      }
    }
  }
  .textWrap {
    p {
      color: rgba(255, 255, 255, 0.8);
      font-size: 20px;
      line-height: 40px;
      transition: all 0.3s;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .snsLink {
    justify-content: center;
    margin-top: 30px;
  }
  &.active {
    .textWrap {
      p {
        animation: fadein 1s ease-in-out;
        &:nth-of-type(2) {
          animation: fadein 2s ease-in-out;
        }
        &:nth-of-type(3) {
          animation: fadein 3s ease-in-out;
        }
        &:nth-of-type(4) {
          animation: fadein 4s ease-in-out;
        }
        &:nth-of-type(5) {
          animation: fadein 5s ease-in-out;
        }
      }
    }
    .snsLink {
      animation: fadein 6s ease-in-out;
    }
  }
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  @media (max-width: 1400px) {
    .imgWrap {
      margin: 90px auto 40px;
      width: 320px;
      height: 320px;
    }
    p {
      span {
        font-size: 18px;
        line-height: 30px;
        margin-bottom: 25px;
        &:first-child {
          font-size: 22px;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .imgWrap {
      margin: 70px auto 40px;
      width: 300px;
      height: 300px;
    }
    p {
      span {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 22px;
        &:first-child {
          font-size: 20px;
        }
      }
    }
    .textWrap {
      p {
        font-size: 18px;
        line-height: 35px;
      }
    }
  }
  @media (max-width: 500px) {
    .imgWrap {
      margin: 30px auto 30px;
      width: 200px;
      height: 200px;
    }
    p {
      padding: 0 25px;
      span {
        font-size: 15px;
        line-height: 30px;
        margin-bottom: 22px;
        &:first-child {
          font-size: 20px;
        }
      }
    }
    .textWrap {
      p {
        word-break: keep-all;
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
`;

export default About;

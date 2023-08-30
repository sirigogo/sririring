import { styled } from "styled-components";

const About = () => {
  return (
    <AboutWrap>
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
        <span>
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
        </span>
      </p>
    </AboutWrap>
  );
};

const AboutWrap = styled.div`
  text-align: center;
  .imgWrap {
    margin: 100px auto 50px;
    width: 350px;
    height: 350px;
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
      margin: 80px auto 40px;
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
  }
  @media (max-width: 500px) {
    .imgWrap {
      margin: 60px auto 40px;
      width: 280px;
      height: 280px;
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
  }
`;

export default About;

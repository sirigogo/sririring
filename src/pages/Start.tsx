import Typewriter from "react-ts-typewriter";
import styled from "styled-components";

const Start = () => {
  return (
    <StartWrap>
      <strong className="strongTxt">
        <Typewriter text="<strong> Hello </strong>" loop={false} speed={30} />
      </strong>
      <h1 className="h1Txt">
        <Typewriter
          text="<h1> I’m  an Interactive Front-End Developer </h1>"
          delay={50}
          loop={false}
          speed={50}
        />
      </h1>
      <span className="spanTxt">
        <Typewriter
          text="<span> GEUNSIL JANG </span>"
          delay={100}
          loop={false}
          speed={50}
        />
      </span>
    </StartWrap>
  );
};

const StartWrap = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  span {
    &.spanTxt {
      color: #464553;
      font-size: 30px;
    }
  }
  strong {
    &.strongTxt {
      color: #818091;
      font-size: 44px;
    }
  }
  h1 {
    &.h1Txt {
      color: #fff;
      font-size: 50px;
      font-weight: 700;
      margin: 35px 0 30px;
    }
  }
  @media (max-width: 1400px) {
    span {
      &.spanTxt {
        font-size: 28px;
      }
    }
    strong {
      &.strongTxt {
        font-size: 42px;
      }
    }
    h1 {
      &.h1Txt {
        font-size: 48px;
        margin: 35px 0 30px;
      }
    }
  }
  @media (max-width: 1200px) {
    span {
      &.spanTxt {
        font-size: 22px;
      }
    }
    strong {
      &.strongTxt {
        font-size: 35px;
      }
    }
    h1 {
      &.h1Txt {
        font-size: 37px;
        margin: 30px 0 30px;
      }
    }
  }
  @media (max-width: 900px) {
    span {
      &.spanTxt {
        font-size: 20px;
      }
    }
    strong {
      &.strongTxt {
        font-size: 32px;
      }
    }
    h1 {
      &.h1Txt {
        font-size: 35px;
        margin: 30px 0 30px;
        line-height: 50px;
        word-break: keep-all;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 0 20px;
    span {
      &.spanTxt {
        font-size: 18px;
      }
    }
    strong {
      &.strongTxt {
        font-size: 30px;
      }
    }
    h1 {
      &.h1Txt {
        font-size: 33px;
        margin: 30px 0 30px;
        line-height: 50px;
        word-break: keep-all;
      }
    }
  }
`;

export default Start;

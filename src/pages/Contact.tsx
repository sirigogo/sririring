import Footer from "@global/Footer";
import { styled } from "styled-components";

const Contact = () => {
  return (
    <ContactWrap>
      <h2>
        팀원들의 고민을 먼저 물어보고, <br />
        함께 해결하는 웹프론트엔드개발자, <br />
        장근실입니다. <br />
      </h2>
      <ul>
        <li>
          <a href="mailto:gsjang94@gmail.com">gsjang94@gmail.com</a>
        </li>
        <li>010.2014.0406</li>
      </ul>
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
      <Footer />
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  padding-right: 100px;
  text-align: right;
  h2 {
    font-size: 40px;
    color: #fff;
    margin-bottom: 200px;
    line-height: 55px;
  }
  ul {
    & > li {
      font-size: 22px;
      letter-spacing: 1px;
      margin-bottom: 30px;
      color: #818091;
      a {
        color: #818091;
        transition: all 0.3s;
      }
      &:hover {
        a {
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 1400px) {
    h2 {
      font-size: 35px;
      margin-bottom: 140px;
      line-height: 55px;
    }
    ul {
      & > li {
        font-size: 22px;
        margin-bottom: 25px;
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    padding-right: 0;
    text-align: center;
    h2 {
      font-size: 30px;
      margin-bottom: 120px;
      line-height: 50px;
    }
    ul {
      & > li {
        font-size: 22px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }
    }
  }
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    padding-right: 0;
    text-align: center;
    h2 {
      font-size: 23px;
      margin-bottom: 100px;
      line-height: 40px;
    }
    ul {
      & > li {
        font-size: 22px;
        letter-spacing: 1px;
        margin-bottom: 30px;
      }
    }
  }
`;

export default Contact;

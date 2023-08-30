import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap>
      <div className="header-inner">
        <h1>
          <a href="#page1" className="list page1">
            GEUNSIL
          </a>
        </h1>
        <ul className="headerMenu">
          <li>
            <a href="#page2" className="list page2">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#page3" className="list page3">
              SKILLS
            </a>
          </li>
          <li>
            <a href="#page4" className="list page4">
              CARRER
            </a>
          </li>

          <li>
            <a href="#page5" className="list page5">
              WORKS
            </a>
          </li>
          <li>
            <a href="#page6" className="list page6">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  .header-inner {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  a {
    color: #fff;
    opacity: 0.7;
    font-size: 18px;
    transition: all 0.3s;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 50%;
      left: 0px;
      width: 100%;
      height: 1px;
      background: #fff;
      display: block;
      -webkit-transform-origin: left top;
      -ms-transform-origin: left top;
      transform-origin: left top;
      -webkit-transform: scale(0, 1);
      -ms-transform: scale(0, 1);
      transform: scale(0, 1);
      -webkit-transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
      transition: transform 0.4s cubic-bezier(1, 0, 0, 1);
    }
    &.active {
      opacity: 1;
    }
  }
  h1 {
    a {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: 2px;
    }
  }
  ul {
    display: flex;
    li {
      &:hover {
        a {
          opacity: 1;
          &::before {
            -webkit-transform-origin: right top;
            -ms-transform-origin: right top;
            transform-origin: right top;
            -webkit-transform: scale(1, 1);
            -ms-transform: scale(1, 1);
            transform: scale(1, 1);
          }
        }
      }
    }
    a {
      padding: 0 20px;
    }
  }
  @media (max-width: 1400px) {
    height: 90px;
    .header-inner {
      max-width: 90%;
    }
    a {
      font-size: 17px;
    }
    h1 {
      a {
        font-size: 21px;
      }
    }
  }
  @media (max-width: 950px) {
    height: 90px;
    .header-inner {
      max-width: 90%;
    }
    a {
      font-size: 16px;
    }
    h1 {
      a {
        font-size: 20px;
      }
    }
  }
  @media (max-width: 600px) {
    height: 80px;
    .header-inner {
      max-width: 90%;
    }
    h1 {
      a {
        font-size: 19px;
      }
    }
    ul {
      a {
        padding: 0;
        margin: 0 8px;
        color: transparent;
        width: 18px;
        height: 18px;
        border: 1px solid #414051;
        display: block;
        transform: rotate(45deg);
        &.active {
          border: 1px solid #fff;
          box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.8);
        }
      }
      li {
        &:hover {
          a {
            &::before {
              opacity: 0;
              display: none;
            }
            &.active {
              &::before {
                opacity: 0;
                display: none;
              }
            }
          }
        }
      }
    }
  }
`;

export default Header;

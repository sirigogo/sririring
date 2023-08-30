import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterWrap>COPYRIGHT © 2023 Geunsil Jang ALL RIGHTS RESERVED.</FooterWrap>
  );
};

const FooterWrap = styled.div`
  color: #818090;
  font-size: 22px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export default Footer;

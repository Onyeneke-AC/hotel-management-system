import styled, { css } from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: auto;
  width: auto;
  ${(props) =>
    props.type === "login" &&
    css`
      height: 320px;
      margin-bottom: -50px;
    `}
`;

function Logo({ type }) {
  const src = "/timeless-logo.png";
  return (
    <StyledLogo>
      <Img src={src} alt="Logo" type={type} />
    </StyledLogo>
  );
}

export default Logo;

import Styled from "styled-components";

const Title = Styled.span`
  font-family: 'Shadows Into Light', cursive;
`;

const RightIcon = Styled.div`
  position: absolute;
  right: ${props => props.index * 5}%;
  display: block;
`;

const MainDiv = Styled.div`
  display: flex;
  justify-content: center;
  margin: 3% 5%;
  flex-wrap: wrap;
`;

const CardImg = Styled.img`
  width: 100%;
  height: 100%;
`;

const LoginDiv = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30%;
`;

export { Title, RightIcon, MainDiv, CardImg, LoginDiv };

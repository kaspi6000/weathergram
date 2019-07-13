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
`;

const CardImg = Styled.img`
  width: 100%;
  height: 78%;
`;

export { Title, RightIcon, MainDiv, CardImg };

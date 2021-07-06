import styled from 'styled-components';


export const HomeSect = styled.div`

color: #fff;                
background: ${({ lightBg}) => (lightBg ? '#101522' : 'rgb(31, 233, 162)')};
/* min-height: 100vh; */
justify-self: stretch;
height: 100vh;
img: 
/* flex: 1; */
`
;

export const RequestRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;

`
;

export const RequestColumn = styled.div`
margin-bottom: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const img = styled.img`
height: 100px;
width: auto;
`



export default HomeSect;

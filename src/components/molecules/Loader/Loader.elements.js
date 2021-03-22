import styled, {keyframes} from 'styled-components';

const flip = keyframes`
    0%{
      transform: perspective( 600px )
      rotateY( -0deg );
  }
    
  20%{
    background:darken(#ecf0f1,10%);
  }
  
  29.9%{
      background:darken#ecf0f1,10%);
  }
  30%{
      transform: perspective( 200px )
      rotateY( -90deg );
      background:#ecf0f1;
  }
  
  54.999%{
    opacity:1;
  }
  55%{
    opacity:0;
  }
  
  60%{
    transform: perspective( 200px )
    rotateY( -180deg );
    background:#ecf0f1;
  }
  
  100%{
    transform: perspective( 200px )
    rotateY( -180deg );
    background:#ecf0f1;
  }
`

export const Book=styled.div`
  top: 10%;
  transform: translateY(-50%);
  position:relative;
  margin:0 auto;
  border:5px solid #3498db;
  width:100px;
  height:60px;
`;

export const BookPage=styled.div`
    position:absolute;
  left:50%;
  top:-5px;
  margin:0 auto;
  border-top:5px solid #3498db;
  border-bottom:5px solid #3498db;
  border-right:5px solid #3498db;
  background:#ecf0f1;
  width:50px;
  height:60px;
  transform-origin:0% 50%;
  animation:${flip} 1.2s infinite linear;
  animation-fill-mode:forwards;

  @for $i from 1 through 3 {
    &:nth-child(#{$i}) { 
      z-index:-$i;
      animation-delay:1.4s*$i;
    }
  }
`;

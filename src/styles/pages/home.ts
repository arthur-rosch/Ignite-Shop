import { styled } from "..";

export const HomeContainer = styled('main', {
  gap:'3rem',
  display:'flex',
  
  width:'100%',
  minHeight:656,
  marginLeft:'auto',
  maxWidth:'calc(100vw - ((100vw - 1180px) / 2))',
});

export const Product = styled('a',{
  padding:'0.25rem',
  position:'relative',

  display:'flex',
  alignItems:'center',
  justifyContent: 'center',
  
  borderRadius:8,
  cursor:'pointer',
  overflow:'hidden',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  img:{
    objectFit:'cover',
  },

  footer:{
    padding:'2rem',

    left: '0.25rem',
    bottom:'0.25rem',
    right: '0.25rem',
    position:'absolute',

    borderRadius:6,

    display:'flex',
    alignItems:'center',
    justifyContent: 'space-between',

    backgroundColor:'rgba(0, 0, 0, 0.6)',

    opacity: 0,
    transform: 'translateY(110%)',
    transition:'all 0.2s ease-in-out',

    strong:{
      fontSize:'$lg',
    },

    span:{
      fontSize:'$xl',
      fontWeight:'bold',
      color:'$green300',
    }
  },

  '&:hover':{
    footer:{
      opacity: 1,
      transform: 'translateY(0%)',
    }
  }
});
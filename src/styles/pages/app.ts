import { styled } from "..";

export const Container = styled('div', {
  minHeight: '100vh',

  display: 'flex',
  alignItems:'flex-start',
  justifyContent:'center',
  flexDirection: 'column',
})

export const Header = styled('header', {
  width: '100%',
  maxWidth:1100,

  margin:'0 auto',
  padding: '2rem 0 ',
})
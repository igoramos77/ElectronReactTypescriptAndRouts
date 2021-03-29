import styled from 'styled-components';

/*
 * Layout -----
 * AS = Aside
 * MH = MainHeader
 * CT = Content
 */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 240px auto;
  grid-template-rows: auto;
  grid-template-areas:
  'AS CT';
  height: 100vh;
  width: 100%;
  background: #fff;
  overflow-x: hidden;

  /* TABLET */
  @media (max-width: 768px) {
    
  }

  /* MOBILE */
  @media (max-width: 480px) {
    grid-template-columns: 90px auto;
    grid-template-rows: auto;
    grid-template-areas:
    'MH MH'
    'CT CT';
  }
`;
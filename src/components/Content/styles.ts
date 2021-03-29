import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;

  /* MOBILE */
  @media (max-width: 480px) {
    padding: 30px 1rem;
  }
`;
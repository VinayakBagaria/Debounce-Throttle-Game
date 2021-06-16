import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 12% 8% 4%;
  background-color: var(--body-background);
`;

export const EachSection = styled.section`
  margin-bottom: 7rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h2`
  color: var(--text-color);
  margin-bottom: 3.5rem;
  text-align: center;
  font-size: 2.4rem;
`;

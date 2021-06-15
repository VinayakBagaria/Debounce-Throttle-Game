import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16%;
  > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

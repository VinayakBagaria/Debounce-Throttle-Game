import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16%;
  > *:not(:last-child) {
    margin-right: 3rem;
  }
`;

export const RightSide = styled.div`
  width: 350px;
  > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: var(--header-background);
  border-bottom: 1px solid var(--header-bottom);
  color: var(--header-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1.2rem 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  padding: 0.25rem;
  color: inherit;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  svg {
    height: 24px;
    width: 24px;
  }
`;

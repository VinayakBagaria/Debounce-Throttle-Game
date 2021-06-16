import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  border: 1px solid var(--slider-track);
  padding: 1.2rem 1rem 1rem;
`;

export const Legend = styled.legend`
  color: var(--subtext-color);
  padding: 0 0.25rem;
  font-weight: 600;
`;

export const Label = styled.label`
  color: var(--text-color);
  font-size: 0.88rem;
  padding-bottom: 0.6rem;
  display: block;
`;

export const Input = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  &::-webkit-slider-runnable-track {
    background-color: var(--slider-track);
    height: 0.25rem;
    border-radius: 2rem;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: rgba(255, 77, 77);
    margin-top: -7px;
  }
`;

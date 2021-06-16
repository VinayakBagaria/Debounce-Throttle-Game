import styled from 'styled-components';

const Wrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid var(--slider-track);
  }
`;

const TableData = styled.td`
  color: var(--text-color);
  padding: 10px 6px;
  &[data-type='counter'] {
    display: flex;
    justify-content: flex-end;
    color: var(--text-color);
  }
`;

interface CounterProps {
  buttonCounter: number;
  eventCounter: number;
}

const Counter = ({ buttonCounter, eventCounter }: CounterProps) => {
  return (
    <Wrapper>
      <tbody>
        <tr>
          <TableData>Button clicked:</TableData>
          <TableData data-type="counter">
            <strong>{buttonCounter} time(s)</strong>
          </TableData>
        </tr>
        <tr>
          <TableData>Event handler called:</TableData>
          <TableData data-type="counter">
            <strong>{eventCounter} time(s)</strong>
          </TableData>
        </tr>
      </tbody>
    </Wrapper>
  );
};

export default Counter;

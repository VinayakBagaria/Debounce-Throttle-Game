import styled from 'styled-components';

const Wrapper = styled.table`
  border-collapse: collapse;
  tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const TableData = styled.td`
  color: darkgrey;
  padding: 12px 6px;
  &[data-type='counter'] {
    display: flex;
    justify-content: flex-end;
    color: whitesmoke;
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

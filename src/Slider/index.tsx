import * as SliderStyles from './styles';

interface SliderProps {
  legendName: string;
  timer: number;
  onChange(newTimer: number): void;
}

const Slider = ({ legendName, timer, onChange }: SliderProps) => (
  <SliderStyles.FieldSet>
    <SliderStyles.Legend>{legendName}</SliderStyles.Legend>
    <SliderStyles.Label>Duration: {timer}ms</SliderStyles.Label>
    <SliderStyles.Input
      type="range"
      min="100"
      max="2000"
      step="100"
      value={timer}
      onChange={(event) => onChange(parseInt(event.target.value, 10))}
    />
  </SliderStyles.FieldSet>
);

export default Slider;

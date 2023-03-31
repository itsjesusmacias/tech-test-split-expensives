interface TextFieldProps {
  label?: string;
  type: string;
  name?: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  min?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  type,
  name,
  onChange,
  value,
  min,
}) => (
  <>
    {label && <label htmlFor="username">{label}</label>}
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
    />
  </>
);
export { TextField };

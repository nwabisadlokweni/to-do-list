import styled from "styled-components";

const Base = styled.a`
  font-weight: 700;
  display: inline-block;
  background: #eee;
  padding: 1rem;
  text-transform: uppercase;
  user-select: none;
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: ${(props) => (props.disabled ? "#999" : "#222")};

  &:hover {
    bockground: ${(props) => (props.disabled ? "#EEE" : "#BBB")};
  }

  &:active {
    bockground: ${(props) => (props.disabled ? "#EEE" : "#999")};
  }
`;

const Link = (props) => {
  const { children, disabled, url, fullWidth } = props;
  return (
    <Base
      fullWidth={fullWidth}
      href={disabled ? undefined : url}
      disabled={disabled}
    >
      {children}
    </Base>
  );
};

export default Link;

import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
  margin-right: auto;
  margin-left: auto;
  max-width: 460px;
`;

type InputProps = {
  type: string;
};

export const Input = styled.input.attrs(({ type }: InputProps) => ({
  type: type || 'text',
}))`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  margin-top: 0.25em;
  background-color: #fff;
  border: 2px solid #8b8a8b;
  border-radius: 4px;
  &:focus {
    border-color: hsl(245, 100%, 42%);
    box-shadow: 0 0 0 3px hsla(245, 100%, 82%, 0.8);
    outline: 3px solid transparent;
  }
`;
export const Label = styled.label`
  padding: 0.25em;
  font-weight: bold;
`;
export const Paragraph = styled.p`
  font-size: 0.75em;
  color: orange;
`;

export const Select = styled.select`
  font-size: 16px;
  font-size: max(16px, 1em);
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid #8b8a8b;
  border-radius: 4px;
  &:focus {
    border-color: hsl(245, 100%, 42%);
    box-shadow: 0 0 0 3px hsla(245, 100%, 82%, 0.8);
    outline: 3px solid transparent;
  }
`;

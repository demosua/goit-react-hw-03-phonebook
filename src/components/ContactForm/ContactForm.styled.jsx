import styled from '@emotion/styled';

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;

`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 5px;
  border: 1px {theme.colors.textColor} solid;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 0.03em;
  outline: none;


  &:focus {
    border: 1px solid #2f8cb8b2;
    box-shadow: 0px 0px 4px 2px #2f8cb8b2;
  }
`;

export const Button = styled.button`

  background-color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    
  }
`;
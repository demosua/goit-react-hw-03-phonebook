import styled from '@emotion/styled';


export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const Text = styled.span`
  margin-right: 10px;
`;

export const Avatar = styled.span`
  margin-right: 10px;
`;

export const Name = styled.span`

`;

export const Number = styled.span`
  margin-left: auto;
`;

export const Phone = styled.a`
  margin-left: 10px;
`;

export const Trash = styled.span`
margin-left: 10px;
cursor: pointer;
`;

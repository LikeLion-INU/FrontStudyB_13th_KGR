import React from 'react';
import styled from 'styled-components';

const WindowFrame = ({ title, children }) => (
  <WindowBox>
    <TitleBar>
      <span>{title}</span>
      <CloseBtn>✕</CloseBtn>
    </TitleBar>
    <Content>{children}</Content>
  </WindowBox>
);

export default WindowFrame;

const WindowBox = styled.div`
  width: 800px;              
  height: 600px;
  background-color: #fcd7e4;
  border: 2px solid #cfa2b2;
  box-shadow: 5px 5px 0px #f6b6cc;
  margin: 40px auto;         // 가운데 정렬
  display: flex;
  flex-direction: column;

`;

const TitleBar = styled.div`
  background-color: #f6b6cc;
  color: white;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const Content = styled.div`
  flex:1;
  padding: 30px;
  font-size: 16px;
  background-color: #ffeef5;
  overflow-y:auto;
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const PostWritePage = ({ setPosts }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    setPosts((prev) => [...prev, { id: Date.now(), title, content }]);
    navigate('/');
  };

  return (
    <Wrapper>
      <Card>
        <h2>글쓰기</h2>
        <Label>제목</Label>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Label>내용</Label>
        <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <SaveButton onClick={handleSubmit}>저장</SaveButton>
      </Card>
    </Wrapper>
  );
};

export default PostWritePage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  font-family: 'Gulim', '굴림', sans-serif;
`;

const Card = styled.div`
  width: 500px;
  background-color: #fff0f6;
  border: 3px solid #ecbfd4;
  border-radius: 18px;
  padding: 30px;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-family: 'Gulim', '굴림', sans-serif;
  border: 2px inset #f291b5;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 8px;
  font-family: 'Gulim', '굴림', sans-serif;
  border: 2px inset #f291b5;
  border-radius: 8px;
`;

const SaveButton = styled.button`
  margin-top: 20px;
  background-color: #ffc9de;
  border: 2px outset #f291b5;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ffb5d1;
  }
`;



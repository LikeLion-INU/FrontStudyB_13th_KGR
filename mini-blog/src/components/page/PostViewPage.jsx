import React, {useState} from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const PostViewPage = ({ posts }) => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const post = posts.find(p => p.id === Number(postId)) || { title: '글 없음', content: '내용이 없습니다.' };

  const handleAddComment = () => {
  if (newComment.trim()) {
    setComments(prev => [...prev, newComment.trim()]);
    setNewComment('');
    }
  };

  const handleDeleteComment = (index) => {
    setComments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      <Card>
        <h2>{post.title}</h2>
        <Content>{post.content}</Content>
        <CommentInput
  value={newComment}
  onChange={(e) => setNewComment(e.target.value)}
  placeholder="댓글을 입력하세요"
/>
<SaveButton onClick={handleAddComment}>댓글 작성</SaveButton>

<CommentList>
  {comments.map((comment, index) => (
    <CommentItem key={index}>
      {comment}
      <DeleteCommentBtn onClick={() => handleDeleteComment(index)}>삭제</DeleteCommentBtn>
    </CommentItem>
  ))}
</CommentList>

      </Card>
    </Wrapper>
  );
};

export default PostViewPage;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
  font-family: 'Gulim', '굴림', sans-serif;
`;

const Card = styled.div`
  width: 500px;
  background-color: #fff0f6;
  border: 4px solid #ecbfd4;
  border-radius: 18px;
  padding: 30px;
  
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

const Content = styled.p`
  font-size: 15px;
  white-space: pre-wrap;
  line-height: 1.6;
`;
const CommentInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 16px;
  border: 2px inset #f291b5;
  border-radius: 8px;
  font-family: 'Gulim', '굴림', sans-serif;
`;

const CommentList = styled.ul`
  margin-top: 16px;
  padding-left: 0;
  list-style: none;
`;

const CommentItem = styled.li`
  margin-bottom: 8px;
  background-color: #fff8fb;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ecbfd4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

const DeleteCommentBtn = styled.button`
  background: none;
  border: none;
  color: #d94a9a;
  font-weight: bold;
  cursor: pointer;
  font-size: 12px;
  &:hover {
    text-decoration: underline;
  }
`;

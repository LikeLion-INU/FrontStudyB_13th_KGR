import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import icon7 from '../../assets/image 7.svg';

const MainPage = ({ posts = [], setPosts }) => {
  const navigate = useNavigate();

  // 글 삭제 함수
  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <Wrapper>
      <Container>
        <Header>MiniBlog</Header>

        <InnerBox>
          <IconBar>
            <IconImage src={icon7} alt="icon" />
            ////////////////
          </IconBar>

          <WriteBar>
            <WriteButton onClick={() => navigate('/post-write')}>Post</WriteButton>
          </WriteBar>

          <ContentBox>
            <Sidebar>
              <ProfileImage />
              <ProfileName>HelloKitty ❤</ProfileName>
            </Sidebar>

            <MainContent>
              <PostList>
                {posts.map((post) => (
                  <PostCard key={post.id}>
                    <Thumbnail />
                    <h4>{post.title}</h4>
                    <p>{post.content}</p>
                    <More onClick={() => navigate(`/post/${post.id}`)}>더보기</More>
                    <DeleteButton onClick={() => handleDelete(post.id)}>삭제</DeleteButton>
                  </PostCard>
                ))}
              </PostList>
            </MainContent>
          </ContentBox>
        </InnerBox>
      </Container>
    </Wrapper>
  );
};

export default MainPage;

// 스타일 컴포넌트
const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 40px 20px;
  font-family: 'Gulim', '굴림', sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 600px;
  border: 3px solid #e7b8d6;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
`;

const InnerBox = styled.div`
  border: 3px solid #e7b8d6;
  margin: 12px 16px;
  border-radius: 8px;
  background-color: #fff;
`;

const Header = styled.div`
  background: linear-gradient(to bottom, #f8b4db, #fdd3ea);
  border: 3px solid #e7b8d6;
  padding: 16px;
  margin: 12px 16px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
`;

const IconBar = styled.div`
  display: flex;
  gap: 10px;
  padding: 8px 16px;
  border-bottom: 3px solid #ecbfd4;
  align-items: center;
  height: 56px;
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
`;

const WriteBar = styled.div`
  padding: 16px;
  border-bottom: 3px solid #ecbfd4;
  display: flex;
  justify-content: flex-start;
`;

const WriteButton = styled.span`
  font-size: 14px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Gulim', '굴림', sans-serif;
  &:hover {
    color: #d94a9a;
  }
`;

const ContentBox = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 140px;
  background-color: #ffdef1;
  padding: 16px;
  text-align: center;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('/profile.jpg');
  background-size: cover;
  margin: 0 auto 10px;
  border-radius: 8px;
`;

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const MainContent = styled.div`
  flex: 1;
  padding-left: 12px;
`;

const PostList = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const PostCard = styled.div`
  width: 160px;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  border-radius: 8px;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 8px;
  margin: 0 auto 8px;
`;

const More = styled.div`
  font-size: 12px;
  margin-top: 4px;
  color: #444;
  text-decoration: underline;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-top: 6px;
  background-color: #ffe1ea;
  border: 1px solid #f5a8c6;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background-color: #ffccdd;
  }
`;

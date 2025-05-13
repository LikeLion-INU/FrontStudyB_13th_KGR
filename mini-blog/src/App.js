import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/page/MainPage';
import PostWritePage from './components/page/PostWritePage';
import PostViewPage from './components/page/PostViewPage';

const App = () => {
  const [posts, setPosts] = useState([]); // 게시글 목록 상태

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage posts={posts} setPosts={setPosts} />} />
        <Route path="/post-write" element={<PostWritePage setPosts={setPosts} />} />
        <Route path="/post/:postId" element={<PostViewPage posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

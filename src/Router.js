import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import UserInfo from './pages/Login/UserInfo';
import Landing from './pages/Landing/Landing';
import Applies from './pages/Applies/Applies';
import Post from './pages/Post/Post';
import PostDetail from './pages/Post/PostDetail';
import MyLists from './pages/MyLists/MyLists';
import Applicants from './pages/MyLists/Applicatns';
import PostInfo from './pages/PostInfo/PostInfo';
import Select from './pages/Select/Select';
import Review from './pages/Review/Review';
import UnAuthorized from './pages/UnAuthorized/UnAuthorized';
import KakaoRedirect from './pages/Login/kakao/KakaoRedirect';

import { PostProvider } from './context/PostContext';
import AppliesInfo from './pages/Applies/AppliesInfo';
import { ReadProvider } from './context/ReadContext';

const Router = () => {
	return (
		<PostProvider>
			<ReadProvider>
				<Routes>
					<Route path="/" element={<Main />} />

					<Route path="/login" element={<Login />} />
					<Route path="/login/userinfo" element={<UserInfo />} />
					<Route path="/authkakao" element={<KakaoRedirect />} />

					<Route path="/mylists" element={<MyLists />} />
					<Route path="/mylists/:postId" element={<PostInfo />} />
					<Route path="/mylists/:postId/applicants" element={<Applicants />} />

					<Route path="/applies" element={<Applies />} />
					<Route path="/applies/:postId" element={<AppliesInfo />} />

					<Route path="/posts/:postid" element={<PostInfo />} />

					<Route path="/post" element={<Post />} />
					<Route path="/post/detail" element={<PostDetail />} />

					<Route path="/select" element={<Select />} />

					<Route path="/landing" element={<Landing />} />

					<Route path="/review" element={<Review />} />

					<Route path="/unauthorized" element={<UnAuthorized />} />
					<Route path="notFound" element={<NotFound />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</ReadProvider>
		</PostProvider>
	);
};

export default Router;

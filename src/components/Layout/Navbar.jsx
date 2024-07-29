import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	// let token = undefined;
	let token = 'token';

	return (
		<div className={`h-[72px] absolute top-0 flex justify-between px-[15vw] items-center w-full z-10`}>
			<Link to="/">
				<img src="/img/logo.svg" alt="메인 Logo" />
			</Link>

			<div className="flex-template gap-5 text-Blue-400">
				{token && (
					<>
						<Link to="/" className="flex gap-2">
							<img src="/img/navbarHome.svg" />
							Home
						</Link>
						<img src="/img/navbarLine.svg" />
						<Link to="/applicants" className="flex gap-2">
							<img src="/img/navbarPar.svg" />
							지원자 List
						</Link>
						<img src="/img/navbarLine.svg" />
						<Link to="/mylists" className="flex gap-2">
							<img src="/img/navbarPost.svg" />
							작성한 글
						</Link>
						<img src="/img/navbarLine.svg" />
					</>
				)}
				<Link to="/login" className="bg-Blue-200 py-2 px-4 rounded-3xl text-white">
					{token ? '로그아웃' : '로그인'}
				</Link>
			</div>
		</div>
	);
};

export default Navbar;

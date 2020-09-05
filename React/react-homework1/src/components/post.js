import React from 'react';

const Post = (props) =>{
	return(
		<div className="container">
			<div className="post">
				<div className="user__info">
					<div>
					  <img className="avatar" src={props.author.photo} />
					</div>
					<div className="profile__info">
					  <p className="name">{props.author.name}</p> 
					  <p className="nickname">{props.author.nickname}</p> 
					  <p className="date">{props.date}</p>
					</div>
				</div>
				<div className="post__info">
					<p className="post_content">{props.content}</p>
					<div className="post_image">
					  <img src={props.image} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Post;
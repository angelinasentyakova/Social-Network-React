import React from "react";
import "./MyPosts.css";
import MyPostsFormRedux from "./Post/MyPostsForm";
import Post from "./Post/Post";

const MyPosts = React.memo(props => {
  console.log('efee')
  let postElements = props.profile.postsData.map(el => <Post message={el.message} img="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg" />)
  
  let onAddPost = (values) => {
    props.addPost(values.newPostBody);
  }
  
  return (
    <div className="posts">
      <div className="new-post">
        <MyPostsFormRedux onSubmit={onAddPost} />
      </div>
      <div className="posted-posts">
        {[postElements ]}
      </div>
    </div>
  );
});

export default MyPosts;
import "./Post.css";

const Post = (props) => {
  return (
    <div className="posted-post">
      <div className="post-img-wrapper">
        <img src={props.img}></img>
      </div>
      <div className="post-message">{props.message}</div>
    </div>
  );
};

export default Post;

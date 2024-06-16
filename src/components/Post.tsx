import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { PostType as PostTypesProps } from "../types/Posttypes";

function Post({ id, author, body }: PostTypesProps) {
  return (
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.author}>{author}</p>
        <p className={styles.text}>{body}</p>
      </Link>
    </li>
  );
}

export default Post;

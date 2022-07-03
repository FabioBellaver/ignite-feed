import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../avatar/avatar";

import styles from "./comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
  commentDate: Date;
}

export function Comment({
  content,
  onDeleteComment,
  commentDate,
}: CommentProps) {
  const [cheerCount, setCheerCount] = useState(0);
  const commentDateFormatted = format(commentDate, "LLLL d',' hh:mm'h ago'");
  const commentDateRelativeToNow = formatDistanceToNow(commentDate, {
    addSuffix: true,
  });

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleCheerComment = () => {
    setCheerCount((state) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fabiobellaver.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fábio Bellaver</strong>
              <time
                title={commentDateFormatted}
                dateTime={commentDate.toISOString()}
              >
                {commentDateRelativeToNow}
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleCheerComment}>
            <ThumbsUp />
            Cheer <span>{cheerCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

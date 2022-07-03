import { format, formatDistanceToNow } from "date-fns";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";

import { Avatar } from "../avatar/avatar";
import { Comment } from "../comment/comment";

import styles from "./post.module.css";

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ContentProps {
  type: string;
  content: string;
}

interface PostProps {
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

export function Post({ author, publishedAt, content }: PostProps) {
  const postDateFormatted = format(publishedAt, "LLLL d',' hh:mm'h ago'");

  const postDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, newComment] as any);
    setNewComment("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity("");
    setNewComment(event.target.value);
  };

  const handleNewCommentInvalid = (
    event: InvalidEvent<HTMLTextAreaElement>
  ) => {
    event.target.setCustomValidity("This field is required!");
  };

  const deleteComment = (commentToDelete: string) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  };

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={postDateFormatted} dateTime={publishedAt.toISOString()}>
            {postDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {content.map((item) => {
            if (item.type === "paragraph") {
              return <p key={item.content}>{item.content}</p>;
            } else if (item.type === "link") {
              return (
                <p key={item.content}>
                  <a href="https://github.com/fabiobellaver" target="_blank">
                    {item.content}
                  </a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Let your feedback</strong>
          <textarea
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="Comment here"
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Publish
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
                commentDate={new Date()}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}

import { Header } from "./components/header/header";
import { Post } from "./components/post/post";
import { Sidebar } from "./components/sidebar/sidebar";

import "./global.css";
import styles from "./app.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/fabiobellaver.png",
      name: "Fábio Bellaver",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "Hey, how are you?" },
      {
        type: "paragraph",
        content:
          "I'm just pushed a new repository to my github, it's a project of a feed, where you can post and comment! Check it out!",
      },
      { type: "link", content: "github.com/fabiobellaver" },
    ],
    publishedAt: new Date("2022-06-28 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/fabiobellaver.png",
      name: "Fábio Bellaver",
      role: "Front End Developer",
    },
    content: [
      { type: "paragraph", content: "i need help!" },
      {
        type: "paragraph",
        content:
          "i'm wondering if i can create my own website, someone can help me?",
      },
      { type: "link", content: "github.com/fabiobellaver" },
    ],
    publishedAt: new Date("2022-07-1 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

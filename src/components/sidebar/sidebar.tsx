import styles from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../avatar/avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1624696941338-934bf86c28b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="user cover image"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/fabiobellaver.png" />
        <strong>Fábio Bellaver</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edit your profile
        </a>
      </footer>
    </aside>
  );
}

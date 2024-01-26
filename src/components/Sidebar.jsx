import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1506878206813-92402b8ded23?q=40&w=500"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/sidneyspe.png" />
        <strong> Sidney Pimentel </strong>
        <span> QA Engineer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}

import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sidneyspe.png",
      name: "Sidney Pimentel",
      role: "QA Engineer",
    },
    content: [
      { type: "paragraph", content: "Novo curso! 👋" },
      { type: "paragraph", content: "Testando a aplicação!" },
      { type: "link", url: "#", content: "Link para o curso" },
      { type: "tags", content: ['#curso', '#estudo'] },

    ],
    publishedAt: new Date("2024-01-12 08:13:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/brunojclementino.png",
      name: "Sidney Pimentel",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Estudando React + Vite 👋" },
      { type: "paragraph", content: "Publicando aqui no feed!" },
      { type: "link", url: "#", content: "Click aqui para acessar" },
      { type: "tags", content: ['#react', '#vite', '#curso', '#estudo'] },
    ],
    publishedAt: new Date("2024-01-25 01:13:30"),
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

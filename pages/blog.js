import styles from "../styles/Blog.module.css";
function blogPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Heading</h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        deserunt aliquid dignissimos itaque eum, cupiditate alias, iusto
        doloribus cumque voluptatem quisquam aut porro sequi ipsum hic error
        voluptatibus, nesciunt pariatur!
      </article>
    </div>
  );
}

export default blogPage;

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BlogCard.module.css';

export default function BlogCard({
  title,
  datePublished,
  coverPhoto,
  slug,
  author,
}) {
  return (
    <div className={styles.card}>
      <Link href={'/posts/' + slug}>
        <div className={styles.imageContainer}>
          {/* <Image src={coverPhoto} alt="" /> */}
          <h1>{author}</h1>
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
}

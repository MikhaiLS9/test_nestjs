import Image from "next/image";
import styles from "./ButtonLikes.module.css";

interface ButtonLikesProps {
  count: number;
}

function ButtonLikes({ count }: ButtonLikesProps): JSX.Element {
  return (
    <button className={styles.like_button}>
      {count}
      <Image src="/like.svg" width={16} height={16} alt="like" />
    </button>
  );
}

export default ButtonLikes;

import Image from "next/image";
import styles from "./ItemCompressed.module.css";
import { ItemCompressedProps } from "./ItemCompressed.props";
import ButtonLikes from "../ButtonLikes/ButtonLikes";
import BottomItem from "../BottomItem/BottomItem";

export function ItemCompressed({
  header,
  text,
}: ItemCompressedProps): JSX.Element {
  return (
    <div className={styles.item}>
      <div className={styles.image_background}>
        <Image
          className={styles.image}
          src="/catalina.png"
          priority
          width={300}
          height={192}
          alt="Catalina"
        />
      </div>

      <div className={styles.descriprion}>
        <div className={styles.info_date}>
          <p className={styles.text_info}>Front-end · 1 Month Ago</p>
          <ButtonLikes count={4} />
        </div>

        <h2 className={styles.header_item}>{header}</h2>
        <p className={styles.text_item}>{text}</p>
      </div>

      <BottomItem datePost="3 минуты" />
    </div>
  );
}

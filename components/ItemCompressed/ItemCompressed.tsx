import Image from "next/image";
import styles from "./ItemCompressed.module.css";
import Link from "next/link";
import { ItemCompressedProps } from "./ItemCompressed.props";

export function ItemCompressed({header, text} : ItemCompressedProps): JSX.Element {
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
          <span className={styles.text_info}>Front-end · 1 Month Ago</span>
          <button className={styles.like_button}>
            4
            <Image src="/like.svg" width={16} height={16} alt="like" />
          </button>
        </div>
        <h1 className={styles.header_item}>{header}</h1>
        <p className={styles.text_item}>{text}
          
        </p>

        </div>
        
        <div className={styles.bottom_item}>
          <p > 3 минуты</p>{" "}
          <span className={styles.link_item}>
            <Link href={"#"} className={styles.link}>Читать</Link>
            <Image src="/icon_arrow.svg" width={20} height={20} alt="arrow" />
          </span>
      </div>
    </div>
  );
}

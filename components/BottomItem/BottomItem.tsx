import Link from "next/link";
import Image from "next/image";
import styles from "./BottomItem.module.css";

function BottomItem({ datePost }: BottomItemProps): JSX.Element {
  return (
    <div className={styles.bottom_item}>
      <p> {datePost}</p>
      <span className={styles.link_item}>
        <Link href={"#"} className={styles.link}>
          Читать
        </Link>
        <Image src="/icon_arrow.svg" width={20} height={20} alt="arrow" />
      </span>
    </div>
  );
}

export default BottomItem;

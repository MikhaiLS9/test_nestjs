"use client";

import Image from "next/image";
import styles from "./ItemCompressed.module.css";
import { ItemCompressedProps } from "./ItemCompressed.props";
import ButtonLikes from "../ButtonLikes/ButtonLikes";
import BottomItem from "../BottomItem/BottomItem";
import { useEffect, useState } from "react";

export function ItemCompressed({
  header,
  text,
}: ItemCompressedProps): JSX.Element {
  const [countLikes, setCountLikes] = useState<number>(4);

  useEffect(() => {}, [countLikes]);

  const addLikes = () => {
    setCountLikes((prev) => prev + 1);

    console.log("11");
  };

  return (
    <div className={styles.item}>
      <div className={styles.image_background}>
        <Image priority
          src="/catalina.png"
          alt="Catalina"
          layout="fill"
          // objectPosition="center"
          objectFit="contain"
        />
      </div>

      <div className={styles.descriprion}>
        <div className={styles.info_date}>
          <p className={styles.text_info}>Front-end · 1 Month Ago</p>
          <ButtonLikes
            height={16}
            width={16}
            onClick={addLikes}
            count={countLikes}
            isActive={false}
          />
        </div>

        <h2 className={styles.header_item}>{header}</h2>
        <p className={styles.text_item}>{text}</p>
      </div>

      <BottomItem datePost="3 минуты" />
    </div>
  );
}

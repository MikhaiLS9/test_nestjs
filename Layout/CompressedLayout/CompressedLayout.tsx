"use client";

import { Header } from "@/app/Header/Header";
import { MainCompressed } from "@/app/MainCompressed/MainCompressed";
import styles from "./CompressedLayout.module.css";
import ButtonLikes from "@/components/ButtonLikes/ButtonLikes";
import { useState } from "react";
import axios from "axios";

export function CompressedLayout(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const sendLikePost = (id: string) => {
    axios.patch(`https://jsonplaceholder.typicode.com/posts/:id=${id}`);
  };
  const toogleBtn = () => {
    [setIsActive(!isActive)];
    sendLikePost("1");
  };
  return (
    <>
      <Header />
      <MainCompressed />
      <div className={styles.buttons_wrapper}>
        <p>Понравилось? Жми </p>

        <ButtonLikes
          onClick={toogleBtn}
          height={16}
          width={16}
          appearance="white"
          isActive={isActive}
        />
      </div>
    </>
  );
}

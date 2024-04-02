import Headline from "@/components/Headline/Headline";
import Image from "next/image";

import styles from "./Header.module.css";
import Link from "next/link";

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <Headline>.my_blog</Headline>
      <Link href={"#"}>
        <Image src="/icon_github.svg" alt="git" width={24} height={24} />
      </Link>
    </header>
  );
}

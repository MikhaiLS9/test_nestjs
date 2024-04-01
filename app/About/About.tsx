import Headline from "@/components/Headline/Headline";
import Image from "next/image";

// import styles from "./Header.module.css";

export function About(): JSX.Element {
  return (
    <section>
      <Headline>Что такое грид?</Headline>
      <p>
        Грид представляет собой пересекающийся набор горизонтальных и
        вертикальных линий, образующих колонки и строки. Элементы могут быть
        помещены в грид в пределах линий этих колонок и строк. Грид имеет
        следующие особенности:
      </p>
      <p>
        Понравилось? Жми
        <span>
          <button>
            <Image src="/curcle.svg" alt="git" width={48} height={48}></Image>
            <Image src="/like.svg" alt="like" width={16} height={16} />
          </button>
        </span>
      </p>
    </section>
  );
}

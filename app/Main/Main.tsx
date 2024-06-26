import Headline from "@/components/Headline/Headline";
import Image from "next/image";

export function Main(): JSX.Element {
  return (
    <section>
      <Headline tag="h2">Как работать с CSS Grid</Headline>
      <Image
        src="/catalina.png"
        priority
        width={608}
        height={460}
        alt="Catalina"
      />
      <p>
        Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
        сеток в CSS. Гриды подойдут и для верстки основных областей страницы, и
        небольших элементов пользовательского интерфейса. Эта статья даёт общее
        представление о грид-раскладке и новой терминологии, которая является
        частью спецификации CSS Grid Layout Level 1. Более подробно показанные
        возможности будут описаны описаны далее в руководстве.
      </p>
    </section>
  );
}

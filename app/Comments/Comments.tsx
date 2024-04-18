import CommentsForm from "@/components/CommentsForm/CommentsForm";
import Headline from "@/components/Headline/Headline";

// import styles from "./Header.module.css";

export function Comments(): JSX.Element {
  return (
    <section>
      <Headline tag="h3">Комментарии</Headline>
      <div>
        <h3>
          Василий Пупкин
          <span>pupkin@gmail.com</span>
        </h3>
        <p>
          Отличная статья, но не хватает информации о том, как лучше реализовать
          на гридах более сложные конструкции, например layout для интернет
          магазина.
        </p>
      </div>
      <CommentsForm />
    </section>
  );
}

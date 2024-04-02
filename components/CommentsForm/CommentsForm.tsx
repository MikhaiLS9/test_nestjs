function CommentsForm(): JSX.Element {
  return (
    <form action="">
      <input name="name" id="name" placeholder="Имя" />
      <textarea
        name="comments"
        id="comments"
        placeholder="Комментарий"
      ></textarea>
      <button>Отправить</button>
    </form>
  );
}
export default CommentsForm;

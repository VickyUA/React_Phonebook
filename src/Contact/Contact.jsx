import css from "./Contact.module.css";

export default function Contact({ name, number }) {
  return (
    <div className={css.cardWrapper}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button type="button" className={css.btn}>
        Delete
      </button>
    </div>
  );
}

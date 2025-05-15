import css from "./SearchBox.module.css";

export default function SearchBox() {
  return (
    <div className={css.searchWrapper}>
      <label htmlFor="searchValuev">Find contacts by name</label>
      <input type="text" name="searchValue" className={css.input} />
    </div>
  );
}

import css from './ContactToSelect.module.css';

export const ContactToSelect = ({ name, number, remove, id }) => {
  return (
    <div className={css.select}>
      <span className={css.selectName}>
        {name}:{number}
      </span>
      <button className={css.buttonDelete} type="button" onClick={() => remove(id)}>
        Delete
      </button>
    </div>
  );
};

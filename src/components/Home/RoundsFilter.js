import classes from "./RoundsFilter.module.css";

function RoundsFilter(props) {
  function filterChangeHandler(event) {
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className={classes.gamesFilter}>
      <div className={classes.gamesFilterControl}>
        <select value={props.selected} onChange={filterChangeHandler}>
          <option value="1">מחזור 1</option>
          <option value="2">מחזור 2</option>
          <option value="3">מחזור 3</option>
          <option value="4">מחזור 4</option>
        </select>
      </div>
    </div>
  );
}

export default RoundsFilter;

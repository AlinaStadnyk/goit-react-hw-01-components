import css from './Statistics.module.css';
const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== null && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <ul
            className={css.list}
            style={{ backgroundColor: getRandomHexColor() }}
            key={id}
          >
            <li className={css.item}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}> {percentage}%</span>
            </li>{' '}
          </ul>
        ))}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default Statistics;

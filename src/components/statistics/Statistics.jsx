import data from './data.json'
const Statistics = ({title, stats}) => {
      
  return (
      <section className="statistics" >
{title !== null && <h2 className="title">Upload stats</h2>}
        
      <ul className="stat-list" >
        {
          data.map(({ id, label, percentage }) => (
            <ul className="stat-list" key={id}>
            <li className="item" >
              <span className="label">{label}</span>
              <span className="percentage"> {percentage}%</span>
    </li> </ul>
          ))
    }
  </ul>
</section>
    )
}

export default Statistics



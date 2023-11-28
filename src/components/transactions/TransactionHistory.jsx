
import css from './TransactionHistory.module.css'
const Transactions = ({items}) => {
  return (
    <table className={css.history}>
      <thead className={css.header}>
<tr>
<th>Type</th>
          <th>Amount</th>
          
<th>Currency</th>
</tr>
</thead>
      <tbody className={css.body}>
{
          items.map(({ id, type, amount, currency }) => (
            
            <tr className={css.row} key={id}>
 <td className={css.item}>{type}</td>
 <td className={css.item}>{amount}</td>
<td className={css.item}>{currency}</td>
 </tr>
  ))        
}
    
 </tbody>
      
    </table>
  )
}
export default Transactions
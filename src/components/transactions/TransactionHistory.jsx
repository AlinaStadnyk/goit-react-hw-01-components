import transactions from './transactions.json'

const Transactions = () => {
  return (
    <table className="transaction-history" >
      <thead>
<tr>
<th>Type</th>
          <th>Amount</th>
          
<th>Currency</th>
</tr>
</thead>
      <tbody>
{
          transactions.map(({ id, type, amount, currency }) => (
    <tr key={id}>
 <td>{type}</td>
 <td>{amount}</td>
<td>{currency}</td>
 </tr>
  ))        
}
    
 </tbody>
      
    </table>
  )
}
export default Transactions
const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>{sat.map(({id,name,type,launchDate,operational})=> 
     <tr key={id}>
       <td>{name}</td>
       <td> {type} </td>
       <td>{launchDate}</td>
       <td>{operational ? "active" : "inactive"}
         </td>
     </tr>)}
     </tbody>
   </table>
  );
};

export default Table;
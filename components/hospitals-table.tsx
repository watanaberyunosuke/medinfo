import { australia_Hospital } from './types';

interface TableProps {
  data: australia_Hospital[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Object ID</th>
          <th>HSIB ID</th>
          <th>Hospital Name</th>
          <th>Category</th>
          <th>Street</th>
          <th>Postcode</th>
          <th>Suburb</th>
          <th>State</th>
          <th>X Coord</th>
          <th>Y Coord</th>
          <th>Global ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((hospital) => (
          <tr key={hospital.objectid}>
            <td>{hospital.objectid}</td>
            <td>{hospital.hsib_id}</td>
            <td>{hospital.hosp_name}</td>
            <td>{hospital.category}</td>
            <td>{hospital.street}</td>
            <td>{hospital.pcode}</td>
            <td>{hospital.suburb}</td>
            <td>{hospital.state}</td>
            <td>{hospital.xcoord}</td>
            <td>{hospital.ycoord}</td>
            <td>{hospital.globalid}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

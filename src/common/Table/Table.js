import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import classes from "./Table.css";
import TableItem from "./TableItems/TableItem";
import withManagementDataSource from "../ManagementDashboard/withManagementDataSource";

const Table = (props) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(props.elements || [] )
    },[props.elements])
  const content = 
  useMemo(()=> {
    return (
        items.length > 0 ? [...items].map((item, index) => (
          <TableItem
            fieldNames={props.fieldNames}
            key={index}
            object={item}
            action={props.action || false}
            onConsult={() => props.onConsult(item)}
            onDelete={() => props.onDelete(item)}
            onEdit={() => props.onEdit(item)}
          />
        ))
        : 
      (
        <tr style={{ textAlign: "center" }}>
          <td colSpan={6}>Pas de Données</td>
        </tr>
      ));
  },[items])
    
  const titles = useMemo(() => {
    return props.action
      ? [...props.headerTitles, "Action"]
      : [...props.headerTitles];
  }, [props.headerTitles, props.action]);
  return (
    <table className={classes.Table}>
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};

let TableWithManagementData = withManagementDataSource(Table)
export default TableWithManagementData;
TableWithManagementData.propTypes = {
  fieldNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  headerTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  elements: PropTypes.array.isRequired,
  action: PropTypes.bool,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onConsult: PropTypes.func,
}
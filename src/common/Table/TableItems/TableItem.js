import React, { useMemo } from "react";
import PropTypes from "prop-types";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";

const TableItem = (props) => {
    const fieldValues = useMemo(() => {
        return [...props.fieldNames].map(field => {
          if(field.includes('.'))
          {
            const fields = field.split('.');
            return props.object[fields[0]][fields[1]] 
          }
          return props.object[field]
        })
    }, [props.fieldNames,props.object])
  return (
    <tr key={props.key}>
        {
            fieldValues.map((value,index) => (<td key={index}>{isNaN(Date.parse(value))? value : new Date(value).toLocaleDateString()}</td>))
        }
      {
        props.action &&
        <td style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton onClick={props.onConsult}>
            <VisibilityIcon color="primary" />
            </IconButton>
            <IconButton onClick={props.onEdit}>
            <EditIcon color="secondary" />
            </IconButton>
            <IconButton onClick={props.onDelete}>
            <DeleteIcon color="error" />
            </IconButton>
        </td>
      }
    </tr>
  );
};

export default TableItem;

TableItem.propTypes = {
    fieldNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    object: PropTypes.object.isRequired,
    action: PropTypes.bool,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onConsult: PropTypes.func
  };

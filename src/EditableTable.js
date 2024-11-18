import React from 'react';

function EditableTable() {
  return (
    <table>
      <tbody>
        <tr>
          <td contentEditable="true">Cell 1</td>
          <td contentEditable="true">Cell 2</td>
        </tr>
        <tr>
          <td contentEditable="true">Cell 3</td>
          <td contentEditable="true">Cell 4</td>
        </tr>
      </tbody>
    </table>
  );
}

export default EditableTable;

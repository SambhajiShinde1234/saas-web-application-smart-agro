/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const DxTable = ({ columns, data, tableHeadBgColor = '#E8EBF0' }) => {
  return (
    <TableContainer sx={{ overflowX: 'auto', maxWidth: '100%' }}>
      <Table>
        <TableHead sx={{ background: tableHeadBgColor }}>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell key={index} align={item.align} width={item.width}>
                {item.columnName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} hover>
              {columns.map((column, index) => (
                <TableCell key={index} align={column.align}>
                  {row[column.field]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DxTable;

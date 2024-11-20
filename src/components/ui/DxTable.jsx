/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { StyledTableContainer } from '../styled/styled';

const DxTable = ({ columns, data, tableHeadBgColor = '#E8EBF0' }) => {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead sx={{ background: tableHeadBgColor }}>
          <TableRow>
            {columns.map((item, index) => (
              <TableCell key={index} align={item.align} width={item.width}>
                <Typography variant="" noWrap>{item.columnName}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} hover>
              {columns.map((column, index) => (
                <TableCell key={index} align={column.align}>
                  <Typography variant="" noWrap>{row[column.field]}</Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default DxTable;

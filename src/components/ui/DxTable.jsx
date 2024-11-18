/* eslint-disable react/prop-types */
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  overflowX: 'auto',
  maxWidth: '450px',
  [theme.breakpoints.up('xs')]: {
    maxWidth: '600px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '100%',
  },
}));

const DxTable = ({ columns, data, tableHeadBgColor = '#E8EBF0' }) => {
  return (
    <StyledTableContainer>
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
    </StyledTableContainer>
  );
};

export default DxTable;

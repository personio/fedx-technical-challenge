import { useFrontendReleaseManager } from '@/hooks/useFrontendReleaseManager';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export const DeploymentTable = () => {
  const rows = useFrontendReleaseManager() ?? [];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Frontend Name</TableCell>
            <TableCell align='right'>Release ID</TableCell>
            <TableCell align='right'>Release Date</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Assets</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.value?.map((row) => (
            <TableRow
              key={row.frontendName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.frontendName}
              </TableCell>
              <TableCell component='th' scope='row'>
                {row.releaseId}
              </TableCell>
              <TableCell align='right'>{row.releaseDate}</TableCell>
              <TableCell align='right'>{row.status}</TableCell>
              <TableCell align='right'>{JSON.stringify(row.assets)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

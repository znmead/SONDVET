import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Divider, Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Admin() {

  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector(store => store);

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED" })
    dispatch({ type: "FETCH_ALL" })
  }, [])

  const goToUser = (user) => {
    console.log(`You want to view details for person with id of ${user}`)
    history.push(`/userdetails/${user}`)
  };

  return (
    <>
      <h1>All Users</h1>
      <h2>Click On a User to View/Edit Details</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell> Name </StyledTableCell>
              <StyledTableCell> Email </StyledTableCell>
              <StyledTableCell> Phone Number </StyledTableCell>
              <StyledTableCell> Address </StyledTableCell>
              <StyledTableCell> City </StyledTableCell>
              <StyledTableCell> State </StyledTableCell>
              <StyledTableCell> Zip Code </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {(store.allUsers[0] && store.allUsers.map((user) =>
              <StyledTableRow key={user.id} onClick={() => goToUser(user.id)}>
                <StyledTableCell>{user.first_name} {user.last_name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone_number}</StyledTableCell>
                <StyledTableCell>{user.address}</StyledTableCell>
                <StyledTableCell>{user.city}</StyledTableCell>
                <StyledTableCell>{user.state}</StyledTableCell>
                <StyledTableCell>{user.zip}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* END ALL USERS */}
      <h1>Archived Users</h1>
      <h2>Click On a User to View/Edit Details</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell> Name </StyledTableCell>
              <StyledTableCell> Email </StyledTableCell>
              <StyledTableCell> Phone Number </StyledTableCell>
              <StyledTableCell> Address </StyledTableCell>
              <StyledTableCell> City </StyledTableCell>
              <StyledTableCell> State </StyledTableCell>
              <StyledTableCell> Zip Code </StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {(store.archivedUsers[0] && store.archivedUsers.map((user) =>
              <StyledTableRow key={user.id} onClick={() => goToUser(user.id)}>
                <StyledTableCell>{user.first_name} {user.last_name}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone_number}</StyledTableCell>
                <StyledTableCell>{user.address}</StyledTableCell>
                <StyledTableCell>{user.city}</StyledTableCell>
                <StyledTableCell>{user.state}</StyledTableCell>
                <StyledTableCell>{user.zip}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Admin
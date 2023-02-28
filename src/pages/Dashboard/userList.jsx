import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
} from "@mui/material";
import Navbar from "../../components/Navbar/navbar";
import { getLocalData, setLocalData } from "../../Helper/storage";

const Columns = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "email",
    label: "Email",
  },
  {
    id: "action",
    label: "Action",
  },
];
export default function UserList() {
  const [user, setUser] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataSource, setDataSource] = useState("");

  const handleChange = (e) => {
    setDataSource({
      ...dataSource,
      [e.target.name]: e.target.value,
    });
  };
  const edit = (row) => {
    setDataSource(row);
  };
  const remove = (id) => {
    const clone = [...user];
    clone.splice(id, 1);
    setLocalData("user", clone);
  };

  const handleModalState = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleClose = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleUpdate = () => {
    console.log(dataSource);
    let cloneUsers = [...user];
    const userIndex = cloneUsers.findIndex(cloneUser => cloneUser.id === dataSource.id);
    console.log(userIndex);
    cloneUsers[userIndex] = { ...dataSource }
    setLocalData("user",cloneUsers);
    handleClose();
  };

  useEffect(() => {
    let data = getLocalData("user");
    setUser(data);
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", width: "50%" }}>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th colSpan={4}>User Registration Details</th>
            </tr>
            <tr>
              {Columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {user && user.length > 0 ? (
              user.map((row, index) => {
                return (
                  <tr key={index}>
                    {Columns.map((column, index) => (
                      <td key={index}>
                        {column.id === "action" ? (
                          <>
                            <button
                              className="btn btn-outline-primary me-md-2"
                              onClick={() => {
                                handleModalState();
                                edit(row);
                              }}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-outline-danger me-md-2"
                              onClick={() => {
                                remove(row.id);
                              }}
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          row[column.id]
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>User Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <Dialog
            open={isOpenModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Update user details"}
            </DialogTitle>
            <DialogContent>
              <div className="updateData">
                Name:
                <input
                  name="name"
                  type={"text"}
                  value={dataSource.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type={"text"}
                  value={dataSource.email}
                  onChange={handleChange}
                />
                <input
                  name="password"
                  type={"text"}
                  value={dataSource.password}
                  onChange={handleChange}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={handleUpdate} autoFocus>
                Update
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

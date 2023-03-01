import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import Navbar from "../../components/Navbar/navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, updateData } from "../../store/listSlice";

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
  //state
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataSource, setDataSource] = useState("");

  //redux
  const dispatch = useDispatch();
  const user = useSelector((state) => state.list.user);
  console.log("user", user);

  //function
  const handleChange = (e) => {
    setDataSource({
      ...dataSource,
      [e.target.name]: e.target.value,
    });
  };

  const edit = (row) => {
    setDataSource(row);
  };
  const Delete = (idx) => {
    if (window.confirm("Are you sure? delete")) {
      dispatch(deleteData(idx));
    }
  };

  const handleClose = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleUpdate = () => {
    if (window.confirm("Are you sure? update data")) {
      dispatch(updateData(dataSource));
    }
    handleClose();
  };

  const handleModalState = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <Navbar />
      <div className="container-fluid" style={{ textAlign: "center" }}>
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th colSpan={3}>User Registration Details</th>
            </tr>
            <tr className="table-light">
              {Columns.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {user && user.length > 0 ? (
              user.map((row, idx) => {
                return (
                  <tr key={idx}>
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
                                Delete(idx);
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
                <td colSpan={3}>User Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
        <div>
          <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={isOpenModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              <span style={{ textAlign: "center", color: "lightblue" }}>
                Update User Details
              </span>
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
                Email:
                <input
                  name="email"
                  type={"text"}
                  value={dataSource.email}
                  onChange={handleChange}
                />
                Password:
                <input
                  name="password"
                  type={"text"}
                  value={dataSource.password}
                  onChange={handleChange}
                />
              </div>
            </DialogContent>

            <DialogActions>
              <button
                className="btn btn-outline-success"
                onClick={handleUpdate}
              >
                Update
              </button>

              <button className="btn btn-outline-danger" onClick={handleClose}>
                Close
              </button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

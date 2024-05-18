import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { EyeIcon } from "../Icons/EyeIcon";
import { EditIcon } from "../Icons/EditIcon";
import { DeleteIcon } from "../Icons/DeleteIcon";
import { Tooltip } from "@nextui-org/react";
import "../../../App.css";
import "../../../ComponentsStyles/TabsStyle.css";
import "../../../ComponentsStyles/FormLabelStyle.css";
import { NewPersonContext } from "../../Contexts/NewPersonContext";

export let initialUsers = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    salary: "14000zł",
    status: "Aktywny",
    age: "29",
    email: "tony.reichert@example.com",
    peselNumber: "12345678901", // Przykładowa wartość dla peselNumber
    yearsOfExperience: "5", // Przykładowa wartość dla yearsOfExperience
    domicile: "ul. Grzybowska 123, 00-123 Warszawa", // Pełny adres dla domicile
    numberOfKids: "2", // Przykładowa wartość dla numberOfKids
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technolog",
    salary: "4000zł",
    status: "Przerwa",
    age: "25",
    email: "zoey.lang@example.com",
    peselNumber: "98765432109",
    yearsOfExperience: "3",
    domicile: "ul. Krakowska 456, 30-456 Kraków",
    numberOfKids: "0",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Frezer CNC",
    salary: "4000zł",
    status: "Aktywny",
    age: "22",
    email: "jane.fisher@example.com",
    peselNumber: "23456789012",
    yearsOfExperience: "2",
    domicile: "ul. Gdańska 789, 80-789 Gdańsk",
    numberOfKids: "1",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Frezer CNC",
    salary: "4500zł",
    status: "Wakacje",
    age: "28",
    email: "william.howard@example.com",
    peselNumber: "34567890123",
    yearsOfExperience: "4",
    domicile: "ul. Łódzka 101, 90-101 Łódź",
    numberOfKids: "3",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Tokarz CNC",
    salary: "3500zł",
    status: "Aktywny",
    age: "24",
    email: "kristen.cooper@example.com",
    peselNumber: "45678901234",
    yearsOfExperience: "1",
    domicile: "ul. Poznańska 567, 60-567 Poznań",
    numberOfKids: "2",
  },
];

export const columns = [
  { name: "Imie i Nazwisko", key: "name" },
  { name: "Rola", key: "role" },
  { name: "Wypłata", key: "salary" },
  { name: "Status", key: "status" },
  { name: "Wiek", key: "age" },
  { name: "Adres Email", key: "email" },
  { name: "Actions", key: "actions" },
];

export const PeopleData = () => {
  const { newPerson } = useContext(NewPersonContext);
  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    if (newPerson) {
      setUsers((prevUsers) => [
        ...prevUsers,
        { id: prevUsers.length + 1, ...newPerson },
      ]);
    }
  }, [newPerson]);

  const statusColorMap = {
    Aktywny: "#28a745", // Green for success
    Przerwa: "#dc3545", // Red for danger
    Wakacje: "#ffc107", // Yellow for warning
  };

  const deleteUser = (userId) => {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== userId)
    );
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th> {/* For row numbers */}
          {columns.map((column, index) => (
            <th key={index}>{column.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user, rowIndex) => (
          <tr key={user.id}>
            <td>{rowIndex + 1}</td> {/* Row number */}
            {columns.map((column, colIndex) => {
              if (column.key === "actions") {
                return (
                  <td key={colIndex}>
                    <Tooltip
                      color="primary"
                      content={
                        <span style={{ color: "white" }}>Zobacz szczegóły</span>
                      }
                    >
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EyeIcon />
                      </span>
                    </Tooltip>
                    <Tooltip
                      color="secondary"
                      content={
                        <span style={{ color: "white" }}>
                          Edytuj Dane Pracownika
                        </span>
                      }
                    >
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />
                      </span>
                    </Tooltip>
                    <Tooltip
                      color="danger"
                      content={<span style={{ color: "white" }}>Usuń</span>}
                    >
                      <span
                        className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={() => deleteUser(user.id)}
                      >
                        <DeleteIcon />
                      </span>
                    </Tooltip>
                  </td>
                );
              } else if (column.key === "status") {
                // Apply the color based on the status
                return (
                  <td
                    key={colIndex}
                    style={{ color: statusColorMap[user.status] }}
                  >
                    {user[column.key]}
                  </td>
                );
              } else {
                return <td key={colIndex}>{user[column.key]}</td>; // Normal data display
              }
            })}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

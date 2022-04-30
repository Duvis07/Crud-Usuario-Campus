import React, { useState } from "react";
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./Componentes/AddUserForm";
import "./index.css";
import EditUserForm from "./Componentes/EditUserForm";

function App() {
  //se agregan los usuarios
  const usersData = [
    {
      id: uuidv4(),
      name: "Duvan",
      telefono: 34456,
      edad: "33",
      nacionalidad: "Colombia",
    },
    {
      id: uuidv4(),
      name: "Arley",
      telefono: 123333,
      edad: "34",
      nacionalidad: "Turquia",
    },
    {
      id: uuidv4(),
      name: "Isabel",
      telefono: 2113445667,
      edad: "12",
      nacionalidad: "Inglaterra",
    },
    {
      id: uuidv4(),
      name: "Maria",
      telefono: 234567,
      edad: "55",
      nacionalidad: "Canada",
    },
  ];

  //Use state
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  // Eliminar usuario

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Editar usuario
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    telefono: "",
    edad: "",
    nacionalidad: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      telefono: user.telefono,
      edad: user.edad,
      nacionalidad: user.nacionalidad,
    });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <div id="principal">
        {" "}
        <h2>CRUD USUARIOS</h2>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h4>Editar Usuario</h4>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h4>Añadir Usuario</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h4>Usuarios</h4>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./Componentes/AddUserForm";
import "./index.css";
import EditUserForm from "./Componentes/EditUserForm";

function App() {
  /**
   * @author Duvan Botero
   *
   *loadData carga los usuarios y pregunta que si hay usuarios me retorne
   * el array si no hay debe retornarme un array vacio
   */

  const loadData = () => {
    const data = localStorage.getItem("myUsers");
    if (data) {
      const usersArray = JSON.parse(data);
      return usersArray;
    }
    return [];
  };

  /**
   *
   * @author Duvan Botero
   * saveToLocal guarda los usuarios en el localStore
   */

  const saveToLocal = (array) => {
    const str = JSON.stringify(array);
    localStorage.setItem("myUsers", str);
  };

  const [users, setUsers] = useState(loadData);

  /**
   *
   * @author Duvan Botero
   * addUser recibe un  usuario y se le agrega el id de forma aleatoria
   */

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers((prev) => [...prev, user]);
    const prevUsers = loadData();
    saveToLocal([...prevUsers, user]);
    console.log("saved");
  };
  /**
   * @author Duvan Botero
   * deleteUser filtra los usuarios por id y solo me elimina el id del usuario tecleado
   *
   */

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
    const prevUsers = loadData();
    saveToLocal(prevUsers.filter((u) => u.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    telefono: "",
    edad: "",
    nacionalidad: "",
  });
  /**
   * @author Duvan Botero
   * editRow recibe el  usuario a modificar
   */

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
        <h2 id="crud">CRUD USUARIOS</h2>
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
              <h4>A??adir Usuario</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h4>Lista de Usuarios</h4>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;

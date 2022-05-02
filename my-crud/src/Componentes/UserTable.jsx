import React from "react";
/*
Componente que me sirve para pintar los usuarios en la vista
*/
//se llama al props
const UserTable = (props) => (
  //se crean las tablas con  sus correspondientes campos
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Telefono</th>
        <th>Edad</th>
        <th>Nacionalidad</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.telefono}</td>
            <td>{user.edad}</td>
            <td>{user.nacionalidad}</td>
            <td>
              <button
                id="btnBorrar"
                type="button"
                class="btn btn-success"
                onClick={() => props.editRow(user)}
              >
                Editar
              </button>{" "}
              <button
                id="btnEditar"
                type="button"
                class="btn btn-outline-dark"
                onClick={() => props.deleteUser(user.id)}
              >
                Borrar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay usuarios</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;

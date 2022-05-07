import React from "react";

/**
 * @author Duvan Botero
 * UserTable pinta los usuarios en la vista
 */

const UserTable = (props) => (
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

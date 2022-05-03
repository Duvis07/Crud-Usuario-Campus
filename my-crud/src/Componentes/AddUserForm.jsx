import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //captura los usuarios al formulario y los envia al App
  const onSubmit = (data, e) => {
    console.log("onSubmit");
    console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    /*
    Se crea el formulario con  sus correspondientes label y input, ademas
    mediante el  register se le hacen  validaciones de campos obligatorios 
    tipo de input al formulario
    */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        className="Inputs"
        type="text"
        name="name"
        {...register("name", {
          required: { value: true, message: "Campo requerido" },
        })}
      />
      {errors.name && (
        <span className="text-danger text-small d-block mb-2">
          {errors.name.message}
        </span>
      )}
      <label>Telefono</label>
      <input
        type="number"
        name="telefono"
        {...register("telefono", {
          required: { value: true, message: "Campo requerido" },
        })}
      />
      {errors.telefono && (
        <span className="text-danger text-small d-block mb-2">
          {errors.telefono.message}
        </span>
      )}
      <label>Edad</label>
      <input
        type="number"
        name="edad"
        {...register("edad", {
          required: { value: true, message: "Campo requerido" },
        })}
      />
      {errors.edad && (
        <span className="text-danger text-small d-block mb-2">
          {errors.edad.message}
        </span>
      )}
      <label>Nacionalidad</label>
      <input
        type="text"
        name="nacionalidad"
        {...register("nacionalidad", {
          required: { value: true, message: "Campo requerido" },
        })}
      />
      {errors.nacionalidad && (
        <span className="text-danger text-small d-block mb-2">
          {errors.nacionalidad.message}
        </span>
      )}
      <button type="submit">Crear Usuario</button>
    </form>
  );
};

export default AddUserForm;

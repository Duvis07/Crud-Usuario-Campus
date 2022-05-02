import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

//constante para editar los usuarios del  formulario
const EditUserForm = (props) => {
  //constante cuyo fin  es mostrarme un mensaje cuando el  cliente actualiza  un usuario
  const AlertActualizarUsuario = () => {
    swal({
      title: "Usuario Actualizado",
      icon: "success",
      timer: "2000",
    });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: props.currentUser,
  });

  /*
  Me recibe por defecto los valores del  formulario
  */
  setValue("name", props.currentUser.name);
  setValue("telefono", props.currentUser.telefono);
  setValue("edad", props.currentUser.edad);
  setValue("nacionalidad", props.currentUser.nacionalidad);

  //Actualizar usuario mediante el id
  const onSubmit = (data, e) => {
    data.id = props.currentUser.id;

    props.updateUser(props.currentUser.id, data);
    localStorage.removeItem(data.id);
    localStorage.setItem(data.id, JSON.stringify(data));

    e.target.reset();
  };
  //Formulario para actualizar un usuario
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
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
      <button onClick={() => AlertActualizarUsuario()} type="submit">
        Actualizar
      </button>
    </form>
  );
};

export default EditUserForm;

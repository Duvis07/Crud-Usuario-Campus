import React from "react";
import swal from 'sweetalert';
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

const AgregarUsuario=()=>{
  swal({
    title: "Crear Usuario",
    text: "Desea crear el usuario",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Usuario Creado Correctamente", {
        icon: "success",
      });
    } else {
      swal("No se pudo crear el usuario");
     
    }
  });
}

    const {register,formState: { errors },handleSubmit, } = useForm();

    const onSubmit = (data, e) => {
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input 
                type="text" 
                name="name"
                {...register("name", {
                    required: { value: true, message: "campo requerido" },
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
                name="telefono" {...register("telefono", {
                    required: { value: true, message: "campo requerido" },
                  })}
                
                />
           {errors.telefono&& (
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
            <button onClick={()=>AgregarUsuario()} type="submit">Crear Usuario</button>
        </form>
    );
}
  
export default AddUserForm;
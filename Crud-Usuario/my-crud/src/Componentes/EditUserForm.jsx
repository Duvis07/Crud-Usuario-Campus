import React from "react";
import swal from 'sweetalert';

import { useForm } from 'react-hook-form'

const EditUserForm= (props) => {
    const ActualizarUsuario=()=>{
        swal({
          title:"Usuario Actualizado",
          icon:"success",
          timer:"2000"
          });
    }

    const {register,formState: { errors },handleSubmit, setValue} = useForm({
        defaultValues:props.currentUser
    });

    setValue("name", props.currentUser.name)
    setValue("telefono", props.currentUser.telefono)
    setValue("edad", props.currentUser.edad)
    setValue("nacionalidad", props.currentUser.nacionalidad)

    const onSubmit = (data, e) => {
    
        data.id=props.currentUser.id

        props.updateUser(props.currentUser.id,data);
      
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
                    required: { value: true, message: "Campo requerido" },
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
            <button onClick={()=>ActualizarUsuario()} type="submit">Actualizar</button>
        </form>
    );
}
  
export default EditUserForm;
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { subjectSchema, SubjectSchema } from "@/lib/formValidationSchemas";
import { createSubject, updateSubject } from "@/lib/actions";
import { useFormState } from "react-dom";
import { error } from "console";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



const SubjectForm = ({
  type,
  data,
  setOpen,
  relatedData
}: {
  type: "create" | "update";
  data?: any;
  setOpen: Dispatch<SetStateAction<boolean>>;
  relatedData?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubjectSchema>({
    resolver: zodResolver(subjectSchema),
  });
 // AFTER REAC 19 IT'LL BE USEACTIONSTATE
 const [state, formAction] = useFormState(type==="create" ?createSubject : updateSubject, {
    success:false,error:false,});

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    formAction(data)
  });
  const router =useRouter()
  useEffect(()=>{
    if(state.success){

    toast(`la materia a sido ${type ==="create" ? "creada" :"actualizada"}!`);
    setOpen(false);
    router.refresh();
}
  },[state]);
  const { teachers } = relatedData;

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">{type==="create" ? "Crear nueva materia" : "actualizar materia"}</h1>
      
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Nombre de la materia"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        {data && (
        <InputField
          label="id"
          name="id"
          defaultValue={data?.id}
          register={register}
          error={errors?.id}
          hidden
        />
    )}
    <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Maestros</label>
          <select
          multiple
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("teachers")}
            defaultValue={data?.teachers}
          > 
          {teachers.map(
            (teacher:{id:string; name:string; surname:string}) =>(
            <option value={teacher.id}  key = {teacher.id}>
                {teacher.name +" "+teacher.surname}</option>
             )
          )}
          </select>
          {errors.teachers?.message && (
            <p className="text-xs text-red-400">
              {errors.teachers.message.toString()}
            </p>
          )}
        </div>
      </div>
      {state.error && <span className="text-red-500">algo salio mal</span>}
      <button className="bg-verde-300 text-white p-2 rounded-md">
        {type === "create" ? "Agregar" : "Actualizar"}
      </button>
    </form>
  );
};

export default SubjectForm;

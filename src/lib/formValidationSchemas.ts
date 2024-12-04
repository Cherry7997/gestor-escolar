import { z } from "zod";

export const subjectSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "el nombre de la materia es obligatorio!" }),
    teachers:z.array(z.string()), //maestros Ids
  });
   
 export type SubjectSchema = z.infer<typeof subjectSchema>;

 export const classSchema = z.object({
    id: z.coerce.number().optional(),
    name: z.string().min(1, { message: "el nombre de la materia es obligatorio!" }),
    capacity: z.coerce.number().min(1, { message: "el nombre de la capacitacion es obligatoria!" }),
    gradeId: z.coerce.number().min(1, { message: "el grado es obligatorio!" }),
    supervisorId: z.coerce.string().optional(),
  });
   
 export type ClassSchema = z.infer<typeof classSchema>;
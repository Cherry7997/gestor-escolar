export const ITEM_PER_PAGE = 10

type RouteAccessMap = {
  [key: string]: string[];
};

export const routeAccessMap: RouteAccessMap = {
  "/admin(.*)": ["admin"],
  "/estudiante(.*)": ["estudiante"],
  "/docente(.*)": ["docente"],
  "/list/docentes": ["admin", "docente"],
  "/list/estudiantes": ["admin", "docente"],
  "/list/materias": ["admin"],
  "/list/grupos": ["admin", "docente"],
  "/list/examenes": ["admin", "docente", "estudiante"],
  "/list/assignments": ["admin", "docente", "estudiante"],
  "/list/calificaciones": ["admin", "docente", "estudiante"],
  "/list/asistencia": ["admin", "docente", "estudiante"],
  "/list/eventos": ["admin", "docente", "estudiante"],
  "/list/anuncios": ["admin", "docente", "estudiante"],
};
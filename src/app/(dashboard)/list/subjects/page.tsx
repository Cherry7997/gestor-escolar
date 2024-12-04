import FormContainer from "@/components/FormContainer";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Prisma, Subject, Teacher } from "@prisma/client";
<<<<<<< HEAD
import { skip } from "@prisma/client/runtime/library";
import Image from "next/image";

type SubjectList = Subject & {teachers: Teacher[] }; 
=======
import Image from "next/image";

type SubjectList = Subject & {teachers: Teacher[]};
>>>>>>> 048b1095957918719ce4b79a422c0407047fe392

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

<<<<<<< HEAD

=======
>>>>>>> 048b1095957918719ce4b79a422c0407047fe392
  const renderRow = (item: SubjectList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-verdedos-900 text-sm hover:bg-hueso-950"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
<<<<<<< HEAD
      <td className="hidden md:table-cell">
        {item.teachers.map((teacher)=>teacher.name).join(",")}</td>
=======
      <td className="hidden md:table-cell">{item.teachers.map((teacher) => teacher.name).join(",")}</td>
>>>>>>> 048b1095957918719ce4b79a422c0407047fe392
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormContainer table="subject" type="update" data={item} />
              <FormContainer table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
  const SubjectListPage = async ({
    searchParams,
  }:{
    searchParams: {[key : string]: string | undefined};
  }) =>{
    const { page, ...queryParams} = searchParams;
    const p = page ? parseInt(page) : 1;
    //URL PARAMS CONDITION
    const query: Prisma.SubjectWhereInput = {};
    if (queryParams){
      for (const [key, value] of Object.entries(queryParams)){
        if (value !== undefined) {
          switch (key){
            case "search":
              query.name ={contains : value, mode : "insensitive"};
                break;
              default:
                break;
          }
        } 
      }
    }
  
 const [data, count] = await prisma.$transaction([
  prisma.subject.findMany({
      where: query,
      include: {
        teachers: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
  }),
  prisma.subject.count({ where: query }),
 ]);

const SubjectListPage = async ({

  searchParams,
}:{
  searchParams:{[key:string]:string |undefined};
}) => {
  const {page, ...queryParams} =searchParams;
  const p = page? parseInt(page) :1;
  //URL PARAMS CONDITION
  const query: Prisma.SubjectWhereInput= {};
  if(queryParams){
    for (const[key, value] of Object.entries(queryParams)){
      if (value !== undefined){
        switch (key){
              case"search":
              query.name = {contains:value, mode:"insensitive"};
              break;

              default:
              break;
            }
          }
        }
      }
    
  const [data,count] = await prisma.$transaction([

   prisma.subject.findMany({
    where:query,
    include:{
      teachers:true,
    },
    take:ITEM_PER_PAGE,
    skip:ITEM_PER_PAGE * (p - 1),
  }),
   prisma.subject.count({where:query}),
]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Lista de estudiantes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-verdedos-950">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-verdedos-950">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
<<<<<<< HEAD
            {role === "admin" && <FormModal table="subject" type="create" />}
=======
            {role === "admin" && <FormModal table="student" type="create"/>}
>>>>>>> 048b1095957918719ce4b79a422c0407047fe392
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
<<<<<<< HEAD
      <Pagination page={p} count={count} />
=======
      <Pagination page={p} count={count}/>
>>>>>>> 048b1095957918719ce4b79a422c0407047fe392
    </div>
  );
};

export default SubjectListPage;

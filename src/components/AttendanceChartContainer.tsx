import Image from "next/image";
import AttendanceChart from "./AttendanceChart";
import prisma from "@/lib/prisma";

const AttendanceChartContainer = async () => {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

    const lastMonday = new Date(today);
    lastMonday.setDate(today.getDate() - daysSinceMonday);

    const resData = await prisma.attendance.findMany({
        where: {
            date: {
                gte: lastMonday,
            },
        },
        select: {
            date: true,
            present: true,
        },
    });

    const daysOfWeek = ["L", "M", "Mi", "J", "V"];

    const attendanceMap: { [key: string]: { presente: number; ausente: number } } = {
        L: { presente: 0, ausente: 0 },
        M: { presente: 0, ausente: 0 },
        Mi: { presente: 0, ausente: 0 },
        J: { presente: 0, ausente: 0 },
        V: { presente: 0, ausente: 0 },
    };

    resData.forEach((item) => {
        const itemDate = new Date(item.date);
        const itemDayOfWeek = itemDate.getDay();

        // Asegúrate de que solo procesas de lunes (1) a viernes (5)
        if (itemDayOfWeek >= 1 && itemDayOfWeek <= 5) {
            const dayName = daysOfWeek[itemDayOfWeek - 1]; // Usa `itemDayOfWeek` en lugar de `dayOfWeek`

            if (item.present) {
                attendanceMap[dayName].presente += 1;
            } else {
                attendanceMap[dayName].ausente += 1;
            }
        }
    });

    const data = daysOfWeek.map((day) => ({
        name: day,
        presente: attendanceMap[day].presente,
        ausente: attendanceMap[day].ausente,
    }));

    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold">Asistencia</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <AttendanceChart data={data} />
        </div>
    );
};

export default AttendanceChartContainer;

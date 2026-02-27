"use client"
import { useRouter } from "next/navigation";
import DynamicGrid from "./DynamicGrid";

export default function DynamicGridWrapper({ 
    data = [], 
    colGrid = "md:grid-cols-3",
    rowHeight = "300px",
    gap = "gap-4"
}) {
    const router = useRouter()
    
    return (
        <div className="w-full">
            <div 
                className={`grid grid-cols-1 ${colGrid} ${gap} px-4`} 
                style={{ gridAutoRows: rowHeight }}
            >
                {data.map((item) => (
                    <DynamicGrid
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}
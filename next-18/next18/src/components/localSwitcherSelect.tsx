"use client";
import { ChangeEvent, ReactNode, startTransition } from "react";
import { useRouter, usePathname } from "@/navigation";


type Props ={
    children:ReactNode,
    defaultValue: string,
}
export default function LocalSwitcherSelect({children, defaultValue}:Props) {
     const router = useRouter();
     const pathname = usePathname();

     
     const onSelectChange = (event: ChangeEvent<HTMLSelectElement>)=> {
        const nextLocale = event.target.value;
        startTransition(()=>{
            router.replace(pathname, {locale:nextLocale})
        })
     }

    return (
        <label htmlFor="">
            <select name="" id="" className="form-select cursor-pointer" defaultValue={defaultValue} onChange={onSelectChange} >
                {children}
            </select>
        </label>
    );
}



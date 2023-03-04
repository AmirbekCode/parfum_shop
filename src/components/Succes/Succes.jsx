import "./succes.css"
import { useState } from "react"

export default function Succes({on, setOn, none}){
    return(
        <div className={none}>
            <i className="fa-solid fa-check"></i>
            <h4 className="succes_title">
                Buyurtmangiz <br /> Qabul qilindi
            </h4>
            <i class="fa-solid fa-truck-fast"></i>
        </div>
    )
}
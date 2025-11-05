'use client';

import { ReactSVG } from "react-svg";


interface CardProps {
    name: string;
    icon: string;
    color: string;
    onClick?: () => void;
}
export default function Card({ name, icon, color, onClick }: CardProps) {


    return (
        <button className="w-40 h-40 p-4 border-2 border-solid border-gray-400 rounded-sm flex flex-col justify-center items-center cursor-pointer hover:border-blue-500" onClick={onClick}>
            <div >
                <ReactSVG src={icon}
                    beforeInjection={(svg: SVGSVGElement) => {
                        // aplica o fill e color do item
                        svg.setAttribute('fill', color);
                        svg.setAttribute('color', color);
                        svg.setAttribute('width', '64px');
                        svg.setAttribute('height', '64px');
                    }} />
            </div>
            <div><h3>{name}</h3></div>
        </button>
    );
}
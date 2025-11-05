'use client';

import { ReactSVG } from "react-svg";
import Card from "../ui/Card";
import Modal from "./Modal";
import Tool from "../../types";

interface ToolModalProps {
    isOpen: boolean;
    onClose: () => void;
    tool: Tool | null;
    onToolClick: (tool: Tool) => void;
    recent: Tool[]; // renomeado de lastedTools para recent por consistência
}

export default function ToolModal({ isOpen, onClose, tool, onToolClick, recent }: ToolModalProps) {
    if (!tool) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6 flex flex-col  items-center">
                <div className="w-full flex items-center justify-around">
                    <div className="">
                        <ReactSVG
                            src={tool.icon}
                            beforeInjection={(svg) => {
                                svg.setAttribute('fill', tool.color);
                                svg.setAttribute('width', '64px');
                                svg.setAttribute('height', '64px');
                            }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                        
                        <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white  underline border-2 rounded-lg bg-[#10E454] py-2 px-4 hover:text-blue-800"
                        >
                            Acessar
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-lg font-bold mb-4 text-center">ÚLTIMAS FERRAMENTAS VISUALIZADAS</h2>
                    <div className="flex justify-between">
                        {recent.map((tool) => (
                            <Card
                                key={tool.app_id}
                                name={tool.name}
                                icon={tool.icon}
                                color={tool.color}
                                onClick={() => onToolClick(tool)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}
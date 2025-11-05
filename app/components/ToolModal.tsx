'use client';

import { ReactSVG } from "react-svg";
import Card from "./Card";
import Modal from "./Modal";

interface Tool {
    name: string;
    icon: string;
    color: string;
    link: string;
}

interface ToolModalProps {
    isOpen: boolean;
    onClose: () => void;
    tool: Tool | null;
    onToolClick: (tool: Tool) => void;
}

export default function ToolModal({ isOpen, onClose, tool, onToolClick }: ToolModalProps) {
    if (!tool) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <ReactSVG 
                            src={tool.icon}
                            beforeInjection={(svg) => {
                                svg.setAttribute('fill', tool.color);
                                svg.setAttribute('color', tool.color);
                                svg.setAttribute('width', '64px');
                                svg.setAttribute('height', '64px');
                            }} 
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                        <a 
                            href={tool.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            Acessar {tool.name}
                        </a>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-bold mb-4">ÚLTIMAS FERRAMENTAS VISUALIZADAS</h2>
                    <Card 
                        key={0}
                        name={tool.name}
                        icon={tool.icon}
                        color={tool.color}
                        onClick={() => onToolClick(tool)}
                    />
                </div>
            </div>
        </Modal>
    );
}
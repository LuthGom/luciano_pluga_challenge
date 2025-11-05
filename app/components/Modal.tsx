'use client';

import { ReactSVG } from "react-svg";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <div className="flex justify-end">
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
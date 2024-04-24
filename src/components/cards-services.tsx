import { ReactNode } from "react";
import { IoLogoAndroid } from "react-icons/io";

interface CardContainerProps {
    icon: ReactNode; 
    title: string;
    description: string;
}

export function CardService({ icon, title, description }: CardContainerProps) {
    return (
        <div className="flex items-center">
            <div className="bg-blue-primary text-white flex items-center justify-center p-3 rounded text-5xl">
                {icon}
            </div>
            <div className="ml-3">
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-xs text-gray-600">{description}</p>
            </div>
        </div>
    );
}

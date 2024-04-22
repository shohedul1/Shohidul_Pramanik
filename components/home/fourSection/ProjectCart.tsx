'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import clsx from "clsx";
import { Link2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    codepen: string;
}

const ProjectCart: React.FC<{ project: Project }> = ({ project }) => {
    const mainDiv = "relative w-full h-[290px] flex items-center justify-center dark:bg-secondary/40 xl:bg-[100%] xl:bg-no-repeat overflow-hidden";
    const ImageSyle = "absolute top-0 shadow-2xl hover:scale-110 transition-all";
    const linkSyle = "bg-secondary dark:bg-black w-[55px] h-[55px] flex justify-center items-center rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50 duration-200 transition-all"
    const badgeSyle = "uppercase text-sm font-medium mb-2 absolute top-4 left-5";
    
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                <div className={mainDiv}>
                    <Image
                        src={project.image}
                        width={440}
                        height={200}
                        alt="iamge"
                        priority
                        className={ImageSyle}
                    />
                    <div className="flex gap-x-4">
                        <Link
                            className={linkSyle}
                            href={project.link}>
                            <Link2Icon />
                        </Link>
                        <Link
                            className={linkSyle}
                            href={project.codepen}>
                            <Link2Icon />
                        </Link>
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className={badgeSyle}>
                    {project.category}
                </Badge>
                <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>

        </Card>
    );
};

export default ProjectCart;


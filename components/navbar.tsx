import React from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const Navbar = ({ children, className, ...props }: Props) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center container mx-auto">
            <nav {...props} className={"w-full md:w-[350px] p-3 bg-primary-light h-[50px] relative" + className}>
                {children}
            </nav>
        </header>
    );
};

export default Navbar;

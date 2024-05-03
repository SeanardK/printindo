import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;

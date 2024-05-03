import React, { useEffect } from "react";
import Container from "../Container";

function Banner({
    children,
    title,
    subTitle,
    bg_image,
}: {
    title: string | React.ReactNode;
    subTitle: string | React.ReactNode;
    children?: React.ReactNode;
    bg_image?: string;
}) {
    return (
        <div
            style={
                bg_image
                    ? {
                          background: `url('/assets/images/${bg_image}')`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                      }
                    : {}
            }
        >
            <Container>
                <div className="h-[640px] flex justify-center flex-col">
                    <p className="text-[#DF6951] font-bold text-[20px] uppercase">
                        PT Printindo Utama
                    </p>

                    <h1 className="text-[84px] font-bold leading-[89px] my-[27px]">
                        {title}
                    </h1>

                    <p className="font-medium text-[16px]">{subTitle}</p>

                    {children && <div className="mt-[32px]">{children}</div>}
                </div>
            </Container>
        </div>
    );
}

export default Banner;

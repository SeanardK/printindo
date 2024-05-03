import Container from "./Container";

function Footer() {
    return (
        <div className="pt-[50px] pb-[150px]">
            <Container>
                <div className="flex justify-between px-[100px] relative">
                    <div>
                        <svg
                            width="105"
                            height="104"
                            viewBox="0 0 105 104"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <rect
                                width="105"
                                height="104"
                                fill="url(#pattern0_59_7)"
                            />
                            <defs>
                                <pattern
                                    id="pattern0_59_7"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                >
                                    <use
                                        xlinkHref="#image0_59_7"
                                        transform="matrix(0.00444444 0 0 0.00448718 0 -0.00480769)"
                                    />
                                </pattern>
                                <image
                                    id="image0_59_7"
                                    width="225"
                                    height="225"
                                    xlinkHref="data:image/jpeg;base64,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"
                                />
                            </defs>
                        </svg>
                        <p className="text-[13px] font-medium text-[#5E6282]">
                            Your Success Is Our Value
                        </p>

                        <p className="mt-[150px] text-[14px] text-[#5E6282]">
                            All rights reserved@PT Printindo Utama
                        </p>
                    </div>

                    <div>
                        <p className="font-bold text-[21px] text-[#080809] mb-[35px]">
                            Company
                        </p>

                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            About
                        </a>
                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            Service
                        </a>
                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            Clients
                        </a>
                    </div>

                    <div>
                        <p className="font-bold text-[21px] text-[#080809] mb-[35px]">
                            Contact
                        </p>

                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            Help/FAQ
                        </a>
                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            Mobile
                        </a>
                        <a
                            href=""
                            className="mb-[12px] text-[18px] text-[#5E6282] font-medium block"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;

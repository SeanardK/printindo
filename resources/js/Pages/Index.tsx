import Banner from "@/Components/Banner";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

function PageLanding() {
    return (
        <Layout>
            <Head title="Printindo" />
            <Banner
                bg_image="landing_bg.png"
                title={
                    <>
                        Most Advanced <br /> Offset Printing Service <br /> in
                        Indonesia
                    </>
                }
                subTitle={
                    "We redefine excellence in the world of printing. As the largest offset printing company in Indonesia, we combine cutting-edge technology with unmatched expertise to bring your vision to life. Whether it's business cards, brochures, posters, or packaging, our state-of-the-art offset printing presses ensure impeccable quality and vibrant colors that truly stand out."
                }
            >
                <a href="https://wa.me/+6289630866593">
                    <button
                        type="button"
                        className="bg-[#02C550] w-[170px] h-[60px] rounded-md flex items-center justify-center"
                    >
                        <svg
                            width="30"
                            height="31"
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <rect
                                x="0.00012207"
                                width="30"
                                height="30.2014"
                                fill="url(#pattern0_4_1854)"
                            />
                            <defs>
                                <pattern
                                    id="pattern0_4_1854"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                >
                                    <use
                                        xlinkHref="#image0_4_1854"
                                        transform="scale(0.0033557 0.00333333)"
                                    />
                                </pattern>
                                <image
                                    id="image0_4_1854"
                                    width="298"
                                    height="300"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASoAAAEsCAMAAABDvQ4AAAAC8VBMVEVHcEwAAAAoHB4kHB0hHSAhHR4iHx8jHh8jHiAiHh8jHh8iHiAiHx8jHh8iHx8jHiAiHh8iHx8iHiAjHx8iHh8iHR4hHh8gHh8gHh8iHR8aGhogICAiHR8jHh8jHSAiHyAjHiAiHh8jHh8jHyAiHh8jHyAlICElISIkICEjHyAjICAiHiAiHiAhHh8jHh4eHh4iHyAjHyAiHh8jHiAiHh8iHh8jHyAmISIjHyAjHyEiHiAiHyAiHh8fGholGRoiHR4jHx8jHh8iHh8mISMkHyAjHh8iHiAiHh8iHR8iHR4cHBwiHh4jHx8iHx8jHyAiHiAjHR4oJSUhICEiHh8iHiAjICAgHx8eHh4jHiAiHh8jHx8jHh4iHx8jHyAjHyAjHiAKAAUfFxciHh8iHh8jHyAlICIjHh8gHR4iHyAjHyAjHyAjHh8jHiAiHx8iHh8jHh4jHh8jHh8hHx4jHiAiHh8jHh8QEBAiHiAiHh4jICAkHyEjHh8hHh8iHyAjHyAmIiMjHh8jHh4jHyAjHx8hGx0jHyAkHyEiHyAjHh8iHiAjHiAiHx8iHyAjHx8iHh8iHiAiHiAiHh8iHh8mHCMjHyAiHx8iHx8hHR8jHR4fHx8kGBghHiAiHR4jICAkHyAhHR4iHh8iHh8jHyAoIiQiHyAiHx8kICEjICEjHiAiHh8iHh8iHyAjHh8dHh4jHR8jHh8iHh8iHx8jHiAhHR4jHyAkICEiHh8iHx8iHh8lHR0jHyAiHx8iHx8iHh4iHh8cGBgiHh8jHx8jHx8iHh8jHx8hIR4iHyAiHh8eHR4jHBwjHyEiHiAjHyAhISEjHx8fHR0jHx8jHx8jHh8hHiAiHyAiHR8jHh8iHiAiHh8ACQklHiIjHyAiHiAmIiIiHh8hICEiHh8jHh8iHh4jHh8iICA9LS0jHiEkHyEiHh8jHh8jHh8iHh8jHiAjHyAjICAiHh8jHh8iHh8kISEiHx8iHh8iHh8jHyAiHh8iHx8iHh8nIySbSEoKAAAA+nRSTlMAAQsaLDtJXWx8iZmbsLO1qJKEd2dTQzQlFAgOI0Zjhqa/2O34//////Tmz51XOQYbRW+ewOP4//PXt4peERI9cKXP///owZBaKQdHgrr9aTEFNXTpnh4QS5R5MlCg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"
                                />
                            </defs>
                        </svg>

                        <p className="text-white font-semibold text-[18px] ml-[6px]">
                            Contact Us
                        </p>
                    </button>
                </a>
            </Banner>
        </Layout>
    );
}

export default PageLanding;

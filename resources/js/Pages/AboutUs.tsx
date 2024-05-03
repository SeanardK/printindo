import Banner from "@/Components/Banner";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

function AboutUs() {
    return (
        <Layout>
            <Head title="Printindo | About Us" />
            <Banner
                title="About Us"
                subTitle="Welcome to PT Printindo Utama – Indonesia's premier offset printing company. With our state-of-the-art facilities and a legacy of excellence, we bring your visions to life on paper. As a trusted industry leader, we take pride in delivering impeccable quality and innovative solutions to businesses nationwide. Whether it's captivating designs, vibrant colors, or timely delivery, we're your reliable partner every step of the way. Join our family of satisfied customers and experience the pinnacle of printing expertise that drives your success. Explore our range of services today!"
                bg_image="about-us_bg.png"
            ></Banner>
        </Layout>
    );
}

export default AboutUs;

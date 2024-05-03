import Banner from "@/Components/Banner";
import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

function Services() {
    return (
        <Layout>
            <Head title="Printindo | Services" />
            <Banner
                title="Our Services"
                subTitle="Welcome to PT Printindo Utama, your ultimate destination for top-notch offset printing services in Indonesia. Backed by our expansive state-of-the-art facility and a trusted legacy, we offer an array of printing solutions that breathe life into your ideas. From eye-catching designs to precise color reproduction, our dedicated team ensures excellence at every step. With a track record of serving numerous satisfied clients nationwide, we take pride in being your reliable partner for all your printing needs. Explore our comprehensive services today to elevate your brand's impact with quality, innovation, and reliability."
                bg_image="services_bg.png"
            />
        </Layout>
    );
}

export default Services;

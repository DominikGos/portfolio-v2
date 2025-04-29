import MainNavbar from "../components/MainNavbar"
import Layout from "../layouts/Layout"

export default function Home() {
    const navbarItems = [
        { name: "Experience", url: "#experience" },
        { name: "Education", url: "#education" },
        { name: "Projects", url: "#projects" },
    ];

    return (
        <Layout className="bg-linear-to-r from-slate-800 to-slate-900  text-white p-2">
            <div className="flex flex-col items-center justify-center p-2 w-full gap-4 md:flex-row md:p-4 lg:p-8 xl:p-12 2xl:ps-16 2xl:pe-16">
                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-5xl font-bold xl:text-7xl">Dominik Gos</h1>
                    <p className="text-xl font-bold text-gray-200 xl:text-2xl">Full stack developer</p>
                    <div className="flex flex-col items-start w-full">
                        <MainNavbar className="w-full mt-4 mb-3" items={navbarItems} />
                    </div>
                </div>
                <div>
                    <p className="text-gray-200">
                        Hi, I am Dominik 👋. I am currently studying computer science at the Kielce University of Technology. I am looking for a job as a full-stack developer.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

import MainNavbar from "../components/MainNavbar"
import Layout from "../layouts/Layout"

export default function Home() {
    const navbarItems = [
        { name: "Experience", url: "#experience" },
        { name: "Education", url: "#education" },
        { name: "Projects", url: "#projects" },
    ];

    return (
        <Layout className="bg-linear-to-r from-slate-800 to-slate-900  text-white">
            <div className="flex flex-col items-center justify-center p-2 w-full gap-4">
                <div className="w-full">
                    <h1 className="text-5xl font-bold">Dominik Gos</h1>
                    <p className="text-xl font-bold">Full stack developer</p>
                </div>
                <div className="flex flex-col items-start w-full">
                    <MainNavbar className="w-full mt-2" items={navbarItems} />
                </div>
            </div>
        </Layout>
    )
}

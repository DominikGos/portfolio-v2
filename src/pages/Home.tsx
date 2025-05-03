import MainNavbar from "../components/MainNavbar"
import Layout from "../layouts/Layout"
import ContentLayout from "../layouts/ContentLayout"
import ContentLayoutCol from "../layouts/ContentLayoutCol";
import ContentLayoutRow from "../layouts/ContentLayoutRow";
import Hover from "../components/Hover";

export default function Home() {
  const navbarItems = [
    { name: "Experience", url: "#experience" },
    { name: "Education", url: "#education" },
    { name: "Projects", url: "#projects" },
  ];

  return (
    <Layout className="bg-linear-to-r from-slate-800 to-slate-900  text-white p-2">
      <div className="flex flex-col justify-center items-start p-2 w-full md:flex-row md:gap-18 md:p-4 lg:gap-22 lg:p-8 lg:ps-12 lg:pe-12 xl:p-10 xl:ps-16 xl:pe-16 2xl:gap-32 2xl:p-16 2xl:ps-54 2xl:pe-54">
        
        <div className="flex flex-col gap-2 w-min">
          <h1 className="text-5xl font-bold xl:text-7xl text-nowrap">Dominik Gos</h1>
          <p className="text-xl font-bold text-gray-200 xl:text-2xl">Full stack developer</p>
          <div className="flex flex-col items-start w-full">
            <MainNavbar className="w-full mt-4 mb-3" items={navbarItems} />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:w-3/4 xl:w-2/4">

          <ContentLayout headline="" id="about-me">
            <p className="text-gray-200">
              Hi, I am Dominik 👋. I am currently studying computer science at the Kielce University of Technology. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis pretium tellus, vitae vestibulum libero laoreet aliquam. Ut congue pretium dolor non posuere. Sed dolor libero, tempor non velit efficitur, dapibus lacinia nibh. Vivamus vitae nisl rutrum, maximus felis in, laoreet mauris. Vestibulum ut libero consequat, lacinia erat quis, aliquet ipsum. Quisque sed urna felis. Aenean mattis est eget lectus sollicitudin cursus.
            </p> 
          </ContentLayout>
            
          <ContentLayout headline="Experience" id="experience">
            <ContentLayoutCol>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200 min-w-[130px]">2024.07 - Present</p>
                  <p className="text-gray-200">Nitro Digital - Fullstack developer Developer</p>
                </ContentLayoutRow>
              </Hover>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200 min-w-[130px]">2022.10 - 2024.11</p>
                  <p className="text-gray-200">Nitro Digital - Internship</p>
                </ContentLayoutRow>
              </Hover>
            </ContentLayoutCol>
          </ContentLayout>
   
          <ContentLayout headline="Education" id="education">
            <ContentLayoutCol>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200 min-w-[130px]">2023.10 - Present</p>
                  <p className="text-gray-200">Kielce University of Technology</p>
                </ContentLayoutRow>
              </Hover>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200 min-w-[130px]">2019.09 - 2023.06</p>
                  <p className="text-gray-200">Technical School Complex No. 7 Kielce</p>
                </ContentLayoutRow>
              </Hover>
            </ContentLayoutCol>
          </ContentLayout>
         
          <ContentLayout headline="Projects" id="projects">
            <ContentLayoutCol>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200">Chat app</p>
                  <p className="text-gray-200">description, Git link</p>
                </ContentLayoutRow>
              </Hover>
              <Hover>
                <ContentLayoutRow>
                  <p className="text-gray-200">Forum</p>
                  <p className="text-gray-200">description, Git link</p>
                </ContentLayoutRow>
              </Hover>
            </ContentLayoutCol>
          </ContentLayout>
          
        </div>
        
      </div>
    </Layout>
  )
}

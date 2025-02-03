// import Sidebar from "../shared/Sidebar";
// import AdminRoutes from "./AdminRoutes";

// const MainLayout = () => {
//     return (
//         <>
//             <Sidebar/>
//             <AdminRoutes/>
//         </>

//     )
// }

// export default MainLayout;






import Sidebar from "../sidebar/index";
import AdminRoutes from "./AdminRoutes";

export default function MainLayout({formFields}) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-screen p-4 ml-64">
          <AdminRoutes formFields={formFields} />
        </div>
      </div>
    );
  }
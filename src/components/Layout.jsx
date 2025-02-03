import Sidebar from "./sidebar/index";

export default function Layout({ children }) {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full h-screen p-4 ml-64">
          {children}
        </div>
      </div>
    );
  }
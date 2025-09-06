import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainHome from "../components/MainHome";

export default function Homepage() {
  return (
    <div className="grid grid-rows-[80px_1fr] grid-cols-[20%_1fr] h-full">
      {/* Header */}
      <header className="col-span-2 fixed w-full top-0 z-10">
        <Header />
      </header>

      {/* Sidebar */}
      <aside className="col-start-1 row-start-2">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="m-5 col-start-2 row-start-2">
        <MainHome />
      </main>
    </div>
  );
}

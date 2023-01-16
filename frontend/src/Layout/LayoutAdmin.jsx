import SideBar from "../Component/Admin/SideBar";
import NavBar from "../Component/Admin/NavBar";
export default function LayoutAdmin({ children }) {
  return (
    <>
      <NavBar />
      <div className="  pt-2 d-flex align-items-baseline row">
        <div className="col-2 col-sm-0">
          <SideBar />
        </div>
        <div className="col-9 col-sm-10">{children}</div>
      </div>
    </>
  );
}

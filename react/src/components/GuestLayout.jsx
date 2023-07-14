import {Outlet} from "react-router-dom";

export default function GuestLayout() {
    return (
        <div>
            part of layout
            <Outlet />
        </div>
    );
}

import React, {useEffect} from "react";
import DepartmentPage from "./pages/DepartmentPage";
import Announcements from "./components/Announcements";

function App() {
    useEffect(() => {
        window.onpopstate = e => {
            window.location.reload();
        }
    })
    return (
        <div>
            <DepartmentPage></DepartmentPage>
        </div>
    );
}

export default App;
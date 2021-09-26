import React, {useEffect} from "react";
import DepartmentPage from "./pages/DepartmentPage";

function App() {
    useEffect(() => {
        window.onpopstate = e => {
            window.location.reload();
        }
    })
    return (
        <DepartmentPage></DepartmentPage>
    );
}

export default App;
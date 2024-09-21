import { createBrowserRouter } from "react-router-dom";
import Route from "./Route";
import Home from "../pages/Home";
import Courses from "../page/Courses/Courses";
import CourseDetails from "../page/courseDetails/CourseDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Route></Route>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/courses",
            element:<Courses></Courses>,
        },
        {
            path:"/courseDetails/:id",
            element:<CourseDetails></CourseDetails>,
            loader:()=>fetch("../fakeData.json")
        },
      ]
    },
  ]);

export default router;
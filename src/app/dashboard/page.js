import BlogList from "@/src/components/Dashboard/BlogList";
import Count from "@/src/components/Dashboard/Count";
import Navbar from "@/src/components/Dashboard/Navbar";

export default function dashboard() {
  return(
    <>
      <div className="p-8">
        <h1 className="">Dashboard</h1>
        <div className="flex gap-4 p-4 justify-center">
          <Count title="Blogs Count" endpoint="http://localhost:3003/api/blogs"/>
          <Count title="Tags Count" endpoint="http://localhost:3003/api/tags"/>
        </div>
      </div>
    </>
  )
}

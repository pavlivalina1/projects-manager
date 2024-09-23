import Book from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
  return( 
    <div className="mt-24 text-center w-2/3 ">
            <img
              src={Book}
              alt=""
              className="w-16 h-16 object-contain mx-auto"
            />
            <h2 className="capitalize text-stone-500 font-bold text-xl text-center my-4">
              No project selected
            </h2>
            <p className="text-stone-400  text-md text-center">
              Select a project or get started with a new one
            </p>
            <Button>Create new project</Button>
          </div>
  )
}
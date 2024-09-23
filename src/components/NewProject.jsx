import { useContext, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
import { ProjectsContext } from "../store/projects-context";

export default function NewProject() {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const dialog = useRef();
  const projectsCtx  = useContext(ProjectsContext);

  function handleSave() {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newDate = date.current.value;

    if (
      newTitle.trim() === "" ||
      newDescription.trim() === "" ||
      newDate.trim() === ""
    ) {
      dialog.current.open();
    } else {
      projectsCtx.handleSaveProject({
        title: newTitle,
        description: newDescription,
        date: newDate,
      });
    }
  }

  return (
    <div className="w-[35rem] mt-16">
      <Modal ref={dialog} buttonCaption={'Okay'}>
        <h2 className="text-stone-700 font-bold text-xl my-4">Invalid input</h2>
        <p className="text-stone-600 mb-4">Ooops...looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please, make sure you provide valid value for every input field</p>
      </Modal>
      <menu className="flex gap-4 justify-end items-center my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={projectsCtx.handleCancelAddProject}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 px-6 py-2 text-stone-50 rounded-md hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" id="title-input" type="text" ref={title} />
        <Input
          label="Description"
          id="desc-input"
          isTextArea
          ref={description}
        />
        <Input label="Due date" id="date-input" type="date" ref={date} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addToDo } from "../slices/todoSlice";
import { updateIsCreate } from "../slices/createSlice";
import { toast } from "react-hot-toast";

// component for creating a task.

function CreateTask() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  //handle submit is for creating a task.
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo({ title: title, desc: desc, status: "In-Progress" }));
    dispatch(updateIsCreate());
    toast("Task Created !", {
      icon: "🟢",
    });
  };

  return (
    <div className="createTask px-4 py-4 w-[450px] font-sans border-[1px] border-stone-500 rounded-sm bg-white shadow-md max-sm:w-[300px]">
      <div className="heading flex justify-between items-center">
        <h1 className="text-start text-[26px] font-bold">Create a task</h1>
        <RxCross1
          className="text-xl cursor-pointer"
          onClick={() => dispatch(updateIsCreate())}
        />
      </div>
      <form
        className=" flex flex-col items-start gap-3 mt-3"
        onSubmit={handleSubmit}
      >
        <label for="title" className="text-[22px] font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="px-3 py-2 text-[14px] border-[1px] border-stone-400 rounded-sm w-[300px] max-sm:w-[200px]"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label for="desc" className="text-[22px] font-semibold">
          Description
        </label>
        <textarea
          id="desc"
          name="desc"
          className="px-3 py-2 text-[14px] border-[1px] border-stone-400 rounded-sm w-[300px] max-sm:w-[200px]"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="px-5 py-1 text-[16px] rounded-sm border-[1px] border-stone-500 cursor-pointer mt-4"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default CreateTask;

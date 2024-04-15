import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeToDo, updateStatus } from "../slices/todoSlice";
import { IoMdDoneAll } from "react-icons/io";
import { toast } from "react-hot-toast";

// task component which are rendered on home page..


function Task({ title, desc, id, status }) {
  const dispatch = useDispatch();

  // for deleting a task.
  const handleDelete = () => {
    dispatch(removeToDo({ id: id }));
    toast("Task Deleted !", {
      icon: "🔴",
    });
  };
 // for updating a task.
  const handleUpdate = (e) => {
    dispatch(updateStatus({ id: id }));
    toast("Task Updated !", {
      icon: "🟡",
    });
  };

  return (
    <div className="task w-[800px] flex gap-4 px-4 py-3 h-[70px] border-[1px] border-stone-200 rounded-lg items-center shadow-md justify-evenly  max-sm:w-full">
      <div className="title w-[200px] text-[16px] font-semibold text-start">
        {title}
      </div>
      <div className="desc overflow-hidden  text-[15px] h-[20px] text-start w-[450px]">
        {desc}
      </div>
      <div className="right flex gap-3 w-[150px] justify-end">
      {/** if status is completed then select section should not be rendered */}
        {status === "Completed" ? (
          <div className="flex items-center gap-1 mr-3">
            <IoMdDoneAll className="text-green-400" />
            <p className="text-[16px] text-green-400 ">Completed</p>
          </div>
        ) : (
          <div className="status text-[16px]">
            <div className="icons">
              <label htmlFor="status-select">
                <select
                  name="status"
                  id="status-select"
                  className="rounded-lg"
                  onChange={handleUpdate}
                >
                  <option value="">In-Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </label>
            </div>
          </div>
        )}

        <div className="delete flex items-center">
          <MdDelete
            className="text-stone-500 hover:text-stone-700"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;

import React, {  useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const ListContainer = ({ list, setList, setDesc, setTitle, setFlag }) => {
  const [open, setOpen] = useState(false);
  const [removeTodo, setRemoveTodo] = useState(null);

  
  console.log(localStorage.getItem('list'))
  const deleteHandler = (todo) => {
    const localList=JSON.parse(localStorage.getItem('list'));
    const updatedList=localList.filter((item)=>item.id!==todo.id);
    localStorage.setItem('list',JSON.stringify(updatedList))
    setList(updatedList)
  
    setOpen(false);
    const appContainer = document.getElementById("app-container");
    const formDiv = document.getElementById("form-id");
    if(formDiv){
      formDiv.style.filter="none"
    }
    if (appContainer) {
      appContainer.style.filter = "none";
    }
  };
  const editHandler = (todo) => {
    setDesc(todo.desc);
    setTitle(todo.title);
    setFlag(true);
    deleteHandler(todo);
  };
  const openModalHandler = (todo) => {
    setOpen(true);
    setRemoveTodo(todo);
    const appContainer = document.getElementById("app-container");
    const formDiv = document.getElementById("form-id");
    if(formDiv){
      formDiv.style.filter="blur(8px"
    }
    if (appContainer ) {
      appContainer.style.filter = "blur(8px)";
    }
  
  };
  const closeModal = () => {
    setOpen(false);
    const appContainer = document.getElementById("app-container");
    const formDiv = document.getElementById("form-id");
    if(formDiv){
      formDiv.style.filter="none"
    }
    if (appContainer) {
      appContainer.style.filter = "none";
    }
  };
  console.log(removeTodo);
  return (
    <>
      {list.length === 0 ? (
        
         <div
          className={`bg-primary mx-12 border-2 border-solid border-light my-32 min-h-[280px]  max-md:bg-dark max-md:border-none  flex flex-wrap  justify-center items-center ${
            open ? "opacity-100" : "opacity-100"
          }`}
        >
          <h3 className="font-normal text-white divide-light flex flex-nowrap whitespace-nowrap max-md:flex-nowrap max-sm:text-left   text-base  font-sans border-t-2 border-b-2 border-solid border-light max-md:w-[16%] max-sm:w-[20%] sm:w-[12%] md:w-[4.5%] max-md:text-center w-[5%] max-h-[20%]">
            No tasks
          </h3>
        </div>
      ) : (
        
        <div
          className={`bg-primary mx-12 border-2 border-solid border-light my-32 min-h-[280px] flex flex-wrap justify-center items-center grid grid-cols-3 max-md:grid-cols-1 max-md:mx-0 max-md:border-none max-md:bg-dark gap-10 max-md:p-0 p-12 ${
            open ? "opacity-10" : "opacity-100"
          }`}
        >
          {list &&
            list.map((todo) => (
              <div className="border-2 border-solid border-light rounded-lg max-md:bg-primary max-sm:mx-[6%] max-md:mx-[10%] flex justify-between p-3 hover-hide-button">
                <div className="flex flex-col justify-start text-left">
                  <h2 className="font-medium text-2xl text-extraLight">
                    {todo.title}
                  </h2>
                  <desc className="font-normal text-sm text-extraLight">
                    {todo.desc}
                  </desc>
                </div>
                <div className="">
                  <button className="text-white rounded-lg border-2 border-solid border-light mr-1 p-2 hide-on">
                    <MdOutlineModeEdit onClick={() => editHandler(todo)} />
                  </button>
                  <button className="text-light rounded-lg border-2 border-solid border-light p-2 hide-on">
                    <RxCross2 onClick={() => openModalHandler(todo)} />
                  </button>
                  <button className="text-light rounded-lg border-2 border-solid border-light p-1  px-4 hide-on-hover">
                    i
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}

      {open && (
        <div className="bg-opacity-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary mx-auto border-2 border-solid border-light my-32 min-h-[100px] max-w-[200px]  flex flex-col flex-wrap  justify-center items-center gap-10  px-10">
          <h3 className="flex text-white">Delete this task</h3>
          <div className="gap-">
            <button
              onClick={() => deleteHandler(removeTodo)}
              className="text-white font-normal text-[10px] rounded-[4px] border-[1px] border-solid border-light mr-1 my-2 p-1 px-4"
            >
              Yes
            </button>
            <button
              onClick={() => closeModal()}
              className="text-white font-normal text-[10px] rounded-[4px] border-[1px] border-solid border-light mr-1 my-2 p-1 px-4"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListContainer;

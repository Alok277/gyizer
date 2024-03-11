import React, { useState } from "react";
import ListContainer from "./ListContainer";



const Body = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "" || desc.trim() === "") {
      return;
    }
    let obj = {
      id: Math.random(),
      title: title,
      desc: desc,
    };
    setList([...list, obj]);
    setTitle("");
    setDesc("");
    setFlag(false)
  };
  console.log(list)

  return (
    <>
      <form id="form-id" onSubmit={submitHandler}>
        <div id="form-id" className=" flex justify-center gap-2 mt-10 text-center ">
          <div className="flex flex-col gap-1">
            <input
              className="w-96 max-md:w-auto border-[1px] rounded border-solid border-light pl-5 bg-primary text-white"
              type="text"
              value={title}
              placeholder="Title..."
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="border-[1px] rounded border-solid border-light pl-5 bg-primary text-white"
              type="text"
              value={desc}
              placeholder="Input..."
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="border-2  rounded-lg  border-solid border-light flex justify-center items-center">
            {flag ? (
              <button
                type="submit"
                className="font-normal text-sm leading-3 px-2 pb-2 text-white"
              >
                Update
              </button>
            ) : (
              <button
                type="submit"
                className="font-normal text-5xl leading-3 px-2 pb-2 text-light"
              >
                +
              </button>
            )}
          </div>
        </div>
      </form>
      <div>
        <ListContainer
          list={list}
          setList={setList}
          setTitle={setTitle}
          setDesc={setDesc}
          setFlag={setFlag}
          
        />
      </div>
    </>
  );
};

export default Body;

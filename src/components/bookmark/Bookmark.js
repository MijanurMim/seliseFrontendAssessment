import { useState } from "react";
import { useForm } from "react-hook-form";
import Category from "../category/Category";

const Bookmark = () => {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      {/* Top navbar section  */}
      <div className="flex items-center justify-around p-10 bg-slate-400">
        <div className="text-3xl  font-bold text-slate-100 ">
          Bookmark Manager
        </div>
        <div>
          <button
            className="bg-blue-500 text-white active:bg-pink-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Bookmark
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Add Bookmark</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                      </button>
                    </div>

                    {/* modal form section  */}
                    <div className=" p-6 flex flex-col">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col"
                      >
                        <input
                          className="px-20 py-1 m-4 border-2"
                          placeholder="Title"
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                          })}
                        />
                        <input
                          className="px-20 py-1 m-4 border-2"
                          placeholder="Url"
                          {...register("firstName", {
                            required: true,
                            maxLength: 20,
                          })}
                        />

                        <select
                          {...register("category")}
                          placeholder="Category"
                          className="px-20 py-1 m-4 border-2"
                        >
                          <option value="female" disabled>
                            {" "}
                            Select Category
                          </option>
                          <option value="male">Category A</option>
                          <option value="other">Category B</option>
                        </select>

                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>

      {/* category component  */}
      <Category />
    </div>
  );
};

export default Bookmark;

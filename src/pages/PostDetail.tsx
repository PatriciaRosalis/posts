import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import API from "../api/api";
import Nav from "../components/shared/Nav";

export default function PostDetail() {
  let { id } = useParams();
  const {
    register,
    getValues,
    watch,
    resetField,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
      agree: false,
      moreInfo: "",
    },
  });

  const watchShowAgree = watch("agree");

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!value.agree) {
        value.moreInfo = "";
      }
      console.log(value, name, type);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const {
    isLoading,
    data: postDetail,
    isError,
  } = useQuery(`post-detail`, () => API.getPostDetail(Number(id)));

  return (
    <div className="bg-neutral-100 m-10 ">
      <Nav />
      <div className="drop-shadow-lg ">
        <div>
          <img
            src="https://images.unsplash.com/photo-1615283119149-8181881c73e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2504&q=80"
            alt="thumbnail"
          />
        </div>
        <div className="mt-5 px-3 pb-5">
          <h2 className="font-bold">{postDetail?.title}</h2>
          <p>{postDetail?.body}</p>
        </div>
        <div className="mt-5 px-3 pb-5">
          <p>Create a new post</p>

          <form
            className=""
            onSubmit={handleSubmit((data) => {
              API.postPost(data.title, data.body, data.moreInfo);
              console.log("values", data);
            })}
          >
            <div className="flex flex-col mr-2 mt-2 mb-4 ">
              <input
                {...register("title", { required: true })}
                placeholder="Title"
                className="rounded pl-2"
              />
              {errors.title?.type === "required" && (
                <p className="text-red-400 ">Title is required</p>
              )}
            </div>

            <div className="flex flex-col mr-2 mt-2 ">
              <input
                {...register("body", {
                  pattern: /^[A-Za-z]+$/i,
                  required: true,
                })}
                className="rounded pl-2"
                placeholder="Body"
              />
              {errors.body?.type === "required" && (
                <p className="text-red-400 ">Body is required</p>
              )}
            </div>

            <div className="flex justify-start	text-left">
              <div className="flex mt-5 ">
                <div>
                  <input
                    {...register("agree")}
                    className="mr-2"
                    type="checkbox"
                    id="agree"
                    name="agree"
                  />
                  {errors.agree?.type === "required" && (
                    <p className="text-red-400 ">Agree is required</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="mr-2" htmlFor="agree">
                    Do you have more information?
                  </label>

                  {watchShowAgree && (
                    <input
                      {...register("moreInfo")}
                      className="rounded pl-2"
                      placeholder="More information"
                    />
                  )}
                </div>
              </div>
            </div>
            <pre>{JSON.stringify(getValues())}</pre>

            <div className="mt-8">
              <input
                className="bg-orange-300 px-3 py-1 rounded text-white hover:bg-orange-500"
                style={{ cursor: "pointer" }}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

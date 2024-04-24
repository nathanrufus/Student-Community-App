import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Create() {
  const formik = useFormik({
    initialValues: {
      seller_name: "",
      description: "",
      category: "",
      price: "",
    },
    validationSchema: Yup.object({
      seller_name: Yup.string().required("Seller Name is required"),
      description: Yup.string().required("Description is required"),
      category: Yup.string().required("Category is required"),
      price: Yup.string().required("Price is required"),
    }),
    onSubmit: async (values) => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://127.0.0.1:5000/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          alert("Failed to add post")
          throw new Error("Network response was not ok");
        }else{
          alert("Added post successfully")
        }

        // If the response is successful, do something (e.g., redirect)
      } catch (error) {
        console.error("There was an error:", error);
      }
    },
  });

  return (
    <div className="mt-20 max-w-screen-2xl md:px-14 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-blue-950 text-2xl mb-4 text-center">
          Create Post here
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
          <div>
            <label
              htmlFor="seller_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="seller_name"
              name="seller_name"
              value={formik.values.seller_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formik.touched.seller_name && formik.errors.seller_name
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter seller's name"
            />
            {formik.touched.seller_name && formik.errors.seller_name && (
              <div className="text-red-500 text-sm">{formik.errors.seller_name}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter item description"
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm">{formik.errors.description}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formik.touched.category && formik.errors.category
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter category"
            />
            {formik.touched.category && formik.errors.category && (
              <div className="text-red-500 text-sm">{formik.errors.category}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                formik.touched.price && formik.errors.price
                  ? "border-red-500"
                  : ""
              }`}
              placeholder="Enter price"
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            )}
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;

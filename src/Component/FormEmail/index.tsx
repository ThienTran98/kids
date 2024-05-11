import Link from "next/link";
import React from "react";

type Props = {
  title: string;
};

export default function FormEmail({ title }: Props) {
  return (
    <form>
      <div className="mb-6">
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-teal-500 "
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-teal-500 "
          placeholder="Password"
          required
        />
      </div>
      {title === "Sign Up" ? (
        <h2 className="text-right font-bold text-sm text-blue-500 cursor-pointer hover:opacity-75 hover:duration-300 hover:ease-linear ">
          <Link href="#">Forgot Password ?</Link>
        </h2>
      ) : (
        <>
          <div className="flex items-center">
            <div className="h-[5px] w-full mr-2 bg-gray-200 rounded-[8px]"></div>
            <div className="h-[5px] w-full mr-2 bg-gray-200 rounded-[8px]"></div>
            <div className="h-[5px] w-full mr-2 bg-gray-200 rounded-[8px]"></div>
            <div className="h-[5px] w-full  bg-gray-200 rounded-[8px]"></div>
          </div>
          <div className="my-3">
            <span className="text-sm font-semibold text-gray-400 ">
              Use 8 or more characters with a mix of letters, numbers & symbols.
            </span>
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="repeat-password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-teal-500 "
              placeholder="Repeat Password"
              required
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 cursor-pointer border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-500 hover:underline hover:opacity-80 dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
        </>
      )}
    </form>
  );
}

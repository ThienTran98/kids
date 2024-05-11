import ButtonSingInWith from "@/Component/ButtonSingInWith";
import Heading from "@/Component/Heading";
import React from "react";
import { iconApple, iconGG } from "../../public/assets/image/icons/Icon";
import LineSingInEmail from "@/Component/LineSingInEmail";
import FormEmail from "@/Component/FormEmail";
import Link from "next/link";
import ButtonSubmit from "@/Component/ButtonSubmit";
import FooterForm from "@/Component/FooterForm";
import ContentBackGround from "@/Component/ContentBackGround";

type Props = {};

export default function Login({}: Props) {
  return (
    <main className="flex w-full h-full">
      <aside className="w-1/2 flex flex-column justify-center align-center pt-8">
        <div className="w-[440px]">
          <Heading title={"Sign In"} />
          <div className="grid grid-cols-2 gap-2">
            <ButtonSingInWith icon={iconGG} title={"Google"} />
            <ButtonSingInWith icon={iconApple} title={"Apple"} />
          </div>
          <LineSingInEmail />
          <FormEmail title={"Sign In"} />
          <ButtonSubmit title={"Sign In"} />
          <div className="text-center text-gray-500 text-sm mt-8">
            Already have an Account?{" "}
            <Link
              href="/register"
              className="text-blue-500 font-bold hover:opacity-75 hover:transition-all"
            >
              Sign In
            </Link>
          </div>
          <FooterForm />
        </div>
      </aside>
      <aside className="w-1/2">
        <ContentBackGround />
      </aside>
    </main>
  );
}

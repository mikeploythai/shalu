import AuthCard from "@/components/auth/auth-card";
import AuthHeader from "@/components/auth/auth-header";
import Shalu from "@/public/38FE1D29-14E9-4CB1-B789-F67B1C18D699_1_105_c.jpeg";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="grid min-h-screen sm:grid-cols-3 lg:grid-cols-2">
      <figure className="group relative overflow-hidden sm:border-r sm:border-r-slate-200 dark:sm:border-r-slate-800">
        <Image
          src={Shalu}
          alt="Shalu"
          placeholder="blur"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 50vw"
          className="rotate-180 sm:rotate-0 sm:transition sm:duration-500 sm:group-hover:scale-110"
          priority
          fill
        />

        <span className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950 sm:transition sm:duration-500 sm:group-hover:opacity-0" />
      </figure>

      <section className="absolute inset-0 flex flex-col sm:relative sm:col-span-2 sm:items-center lg:col-span-1">
        <AuthHeader />

        <div className="flex flex-col gap-4 p-4 sm:m-8 sm:max-w-md sm:flex-1 sm:justify-center sm:gap-8 sm:p-0">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Farewell, our sweet Indian prince... 👑
          </h1>

          <AuthCard />
        </div>
      </section>
    </main>
  );
}

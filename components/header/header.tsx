import UserNav from "./user-nav";

export default async function Header() {
  return (
    <header className="sticky top-0 z-10 w-full border-b border-b-slate-200 bg-slate-50 p-4 dark:border-b-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between gap-2">
        <h1 className="font-semibold text-slate-50 sm:text-inherit">Shalu!</h1>
        <UserNav />
      </div>
    </header>
  );
}

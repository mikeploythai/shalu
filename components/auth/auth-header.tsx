export default function AuthHeader() {
  return (
    <header className="mb-auto w-full p-4 sm:border-b sm:border-b-slate-200 dark:sm:border-b-slate-800">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between gap-2">
        <h1 className="font-semibold text-slate-50 sm:text-inherit">Shalu!</h1>

        <a
          href="https://github.com/mploythai/shalu"
          target="_blank"
          referrerPolicy="strict-origin-when-cross-origin"
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:underline sm:text-slate-500 dark:sm:text-slate-400"
        >
          Source Code
        </a>
      </div>
    </header>
  );
}

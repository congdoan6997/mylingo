import LogoSVG from "@/public/logo.svg"
export default function Footer() {
  return (
    <footer className="px-1">
      <div className="relative mx-auto flex h-80 flex-col justify-between overflow-hidden rounded-4xl bg-primary-depth pt-0 text-primary-foreground dark:bg-card sm:h-96 sm:w-11/12 lg:h-[26rem]">
        <div className="flex border-b-2 border-border/70 dark:border-card dark:bg-primary max-md:flex-col-reverse">
          <div className="group flex w-full flex-1 gap-12 overflow-hidden whitespace-nowrap border-border/70 py-2 text-lg capitalize max-md:border-t-2 sm:text-2xl md:border-r-2 md:py-4">
            <p className="flex animate-footer-marquee items-center gap-12 group-hover:paused">
              <span>start your language journey here.</span>
              <span aria-hidden="true">🡳</span>
              <span>learn anytime, learn anywhere.</span>
              <span aria-hidden="true">✱</span>
            </p>

            <p
              className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
              aria-hidden="true"
            >
              <span>start your language journey here.</span>
              <span>🡳</span>
              <span>learn anytime, learn anywhere.</span>
              <span>✱</span>
            </p>

            <p
              className="flex animate-footer-marquee items-center gap-12 group-hover:paused"
              aria-hidden="true"
            >
              <span>start your language journey here.</span>
              <span>🡳</span>
              <span>learn anytime, learn anywhere.</span>
              <span>✱</span>
            </p>
          </div>

          <a
            className="flex items-center justify-end px-4 py-2 text-center font-semibold uppercase opacity-70 before:content-['@_'] after:content-['_🡵'] hover:opacity-100 sm:px-12 md:py-4 lg:text-2xl"
            href="https://github.com/congdoan6997/mylingo"
            target="_blank"
          >
            Github
          </a>
        </div>

        <div className="select-none">
          <p className="font-display text-[40vw] -tracking-widest opacity-85 dark:text-card-foreground sm:text-[min(35vw,300px)] md:absolute md:-bottom-1/4">
            Lingo
          </p>
          <div className="relative -right-3 top-12 ml-auto w-1/3 drop-shadow-2xl saturate-[0.7] dark:hue-rotate-[50deg] max-md:hidden">
            <LogoSVG />
          </div>
        </div>
      </div>
      <p className="my-4 px-1 text-center text-sm">
        © 2024 — Lingo by{" "}
        <a
          href="https://github.com/congdoan6997"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @phdbui
        </a>{" "}
        +{" "}
        <a
          href="https://www.youtube.com/@codewithantonio"
          target="_blank"
          className="font-semibold decoration-dotted transition hover:underline"
        >
          @CodeWithAntonio
        </a>
        .
      </p>
    </footer>
  )
}

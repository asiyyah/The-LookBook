export default function ProjectsLoading() {
  return (
    <>
      <section className="pt-48 pb-16 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="h-4 w-24 bg-border animate-pulse mb-4" />
          <div className="h-32 sm:h-48 w-3/4 bg-border animate-pulse" />
        </div>
      </section>
      <section className="flex-1 px-8 pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex gap-6 mb-16 border-b border-border pb-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 bg-border animate-pulse" />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className={`bg-zinc-100 animate-pulse rounded-none ${
                  i === 1 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

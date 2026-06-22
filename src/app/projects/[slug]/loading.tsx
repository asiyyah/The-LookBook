export default function ProjectDetailLoading() {
  return (
    <>
      <section className="h-screen bg-zinc-100 animate-pulse" />
      <section className="py-32 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="h-4 w-32 bg-border animate-pulse mb-6" />
          <div className="h-16 sm:h-24 w-1/2 bg-border animate-pulse mb-6" />
          <div className="h-4 w-64 bg-border animate-pulse mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              <div className="h-4 w-full bg-border animate-pulse" />
              <div className="h-4 w-full bg-border animate-pulse" />
              <div className="h-4 w-3/4 bg-border animate-pulse" />
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-border animate-pulse" />
              <div className="h-4 w-full bg-border animate-pulse" />
              <div className="h-4 w-3/4 bg-border animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

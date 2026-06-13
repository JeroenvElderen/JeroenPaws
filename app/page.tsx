import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6">

            <span className="uppercase tracking-[3px] text-sm text-purple-700">
              Professional Dog Walking & Pet Care
            </span>

            <h1 className="text-6xl mt-6 max-w-3xl">
              The best part
              <br />
              <span className="text-purple-700">
                of their day.
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Reliable walks, home visits, boarding and
              training in Bray, Wicklow & South Dublin.
            </p>

          </div>
        </section>
      </main>
    </>
  );
}
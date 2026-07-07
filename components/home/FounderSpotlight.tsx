import Image from "next/image"
import Link from "next/link"

export function FounderSpotlight() {
  return (
    <section className="bg-tertiary py-20 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="font-[Montserrat] text-3xl font-semibold">
            Mentorship Beyond Books
          </h2>
          <div className="h-1 w-20 bg-secondary" />
          <p className="text-lg italic opacity-80">
            &quot;Our mission is to democratize world-class education for every
            Indian student, ensuring that financial or geographical barriers never
            limit potential.&quot;
          </p>
          <div className="pt-4">
            <h4 className="font-[Montserrat] text-xl font-bold">
              Prashant Hemnani
            </h4>
            <p className="text-secondary">
              Founder &amp; Chief Mentor, The Globalizers
            </p>
          </div>
          <div className="flex gap-4 pt-6">
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-4">
              <span className="font-[Montserrat] text-3xl font-bold">19+</span>
              <span className="text-xs uppercase opacity-60">Years Exp.</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white/10 p-4">
              <span className="font-[Montserrat] text-3xl font-bold">25k+</span>
              <span className="text-xs uppercase opacity-60">
                Success Sessions
              </span>
            </div>
          </div>
          <Link
            href="/founder"
            className="mt-4 inline-flex items-center gap-2 font-[Montserrat] font-bold text-success-gold"
          >
            Read Full Story
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="group relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Xqs2oZndkZa16SXNmxok2pLmjep3MhSekj2OracQTrZ2vfVGFqP_ZnOh7AqN3HdE48pZFaK_8jC_Ym6HJMWgqqQEkYKR99I6LKXHH99nKB8FD1jWyHrEPdD_bgCBv-ceOFihA5Hl8n8vkFJyLlqVBPGzJl0HKz05Q4NwCtNy1NfAfYO-unF7FhHh2iBxfJ-AqPRScONVtqv8SP3veviuPD5fcHyw2rSw0PVTxk2jVdJVlvngESOWrMutNaUh8ni_TXunfm0Re24"
            alt="Founder mentoring student"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl grayscale transition-all duration-500 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 -z-10 -m-4 rounded-2xl border-2 border-secondary/30 transition-all group-hover:m-2" />
        </div>
      </div>
    </section>
  )
}

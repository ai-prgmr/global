import type { Metadata } from "next"
import { Section } from "@/components/primitives/Section"
import { Container } from "@/components/primitives/Container"
import { SectionHeader } from "@/components/primitives/SectionHeader"
import { TestimonialCard } from "@/components/primitives/TestimonialCard"
import { CTABanner } from "@/components/CTABanner"
import { constructMetadata } from "@/lib/metadata"
import { generateAggregateRatingSchema } from "@/lib/schema"

export const metadata = constructMetadata({
  title: "Student & Parent Testimonials & Reviews",
  description:
    "Read verified reviews and success experiences shared by students and parents mentored by Prashant Hemnani and The Globalizers team.",
  path: "/testimonials",
})

const ALL_TESTIMONIALS = [
  {
    name: "Dr Kapilesh Dave & Babita Bhatt",
    relation: "Parents of Nimish Dave",
    quote: (
      <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground not-italic font-normal">
        <p>
          &ldquo;If I simply say thank you, it would be far too small a word to express what we truly feel.
        </p>
        <p>
          We could think of sending Nimish abroad for his studies only because we knew that you were there to guide and support us, and you did exactly that. During my college days, you were always there for me, not just as a senior, but like an elder brother and mentor. Whatever I learned as a team member under your guidance has stayed with me and helped shape me throughout my life.
        </p>
        <p>
          It has been almost 25 years, and today, you have extended that same guidance to my son. You helped him believe in himself, dream bigger, and achieve his very first milestone.
        </p>
        <p>
          Seeing him take this step makes me realise how beautifully your mentorship has travelled from one generation to the next.
        </p>
        <p>
          We are truly grateful, Sir. Please continue to mentor and guide us, as you always have. Your presence gives us confidence, and your guidance means much more to our family than words can express. 🙏&rdquo;
        </p>
      </div>
    ),
    type: "Parent Review",
  },
  {
    name: "Kavy Goyal",
    relation: "Admitted to UNC Charlotte, USA",
    quote:
      "I am extremely thankful to The Globalizers for guiding me throughout my journey to UNC Charlotte. From shortlisting the right university to applications, documentation, and finally my visa process, the entire team was always there to guide me at every step. A special thank you to the entire team for being so patient, approachable, and supportive. Their guidance gave me a lot of confidence during the visa process. I have now successfully received my visa and will soon be heading to UNC Charlotte! Thank you for making the entire process smoother and much less stressful! ❤️",
    type: "Student Review",
  },
  {
    name: "Trishika Jain",
    relation: "Admitted to Study in the UK",
    quote:
      "My experience with The Globalizers has been truly wonderful! From working on my personal statements and university applications to receiving my UK visa, Prashant Sir and the entire team guided and supported me throughout every step of the journey. A special thank you to Prashant Sir for his constant guidance, patience, and encouragement. The entire team was always approachable and supportive. Highly recommended to anyone looking for sincere, personalized, and reliable guidance!",
    type: "Student Review",
  },
  {
    name: "Dhruv Makhija",
    relation: "Admitted to Columbia University, USA",
    quote:
      "It's Columbia. Super thankful to Prashant sir and team. Their mentoring and guidance towards top universities made my dream come true. 10/10 for Globalizers team.",
    type: "Student Review",
  },
  {
    name: "Karan Dholiya",
    relation: "Admitted to Aivancity, France 🇫🇷",
    quote:
      "Heading towards Aivancity, France feels like a dream come true! Really grateful to the entire Globalizers team for their guidance and support throughout my journey. Special thanks to Prashant Sir for always motivating me to aim higher and guiding me in the right direction. Thank you for making this journey smooth and memorable. 10/10 for the service and support! ⭐",
    type: "Student Review",
  },
  {
    name: "Anjali Bansal",
    relation: "WHU – Otto Beisheim School of Management, Germany",
    quote:
      "Amazing mentorship and support from Prashant sir and team Globalizers for my admission to WHU - Otto Beisheim School of Management.",
    type: "Student Review",
  },
  {
    name: "Mubashara Sharif",
    relation: "Admitted to Hochschule Anhalt, Germany",
    quote:
      "My dream came true! I got my visa success for top public university Hochschule Anhalt – University of Applied Sciences. I truly appreciate all the support from the Globalizers team, from documentation and applications to loan and visa guidance! 💯🌸",
    type: "Student Review",
  },
  {
    name: "Tanmay Varade",
    relation: "Admitted to FAU Erlangen-Nuremberg, Germany",
    quote:
      "I trusted Globalizers and Prashant sir for my study abroad journey. I am super excited to join FAU Erlangen-Nuremberg, a top-ranked public university in Germany. Thank you for the entire dedication and support!",
    type: "Student Review",
  },
  {
    name: "Suryansh Gupta",
    relation: "Admitted to University of Twente, Netherlands",
    quote:
      "Got into University of Twente, Netherlands. Wow! Fantastic experience with Prashant sir and team Globalizers. They supported me well with my vision of studying abroad from my choice of top universities. Thankful to Prashant sir for real mentoring and support.",
    type: "Student Review",
  },
  {
    name: "Gauransh Sharma",
    relation: "Admitted to Chalmers University of Technology, Sweden",
    quote:
      "My admit to Chalmers University of Technology and Sweden visa approval would not have been possible without the incredible support of The Globalizers. Their guidance, responsiveness, and student-first approach made every step stress-free and well-organized.",
    type: "Student Review",
  },
  {
    name: "Tanishqa Porwal",
    relation: "Admitted to Carnegie Mellon University (CMU), USA",
    quote:
      "Happy to share that I am joining Carnegie Mellon University! This wouldn't have been possible without the support of Prashant Sir and the Globalizers team. From GRE prep to visa guidance, their mentorship made all the difference. Grateful and highly recommend them!",
    type: "Student Review",
  },
  {
    name: "Jenil Doshi",
    relation: "Admitted to Michigan Ross School of Business, USA (MBA)",
    quote:
      "An absolutely wonderful experience with Prashant Sir and The Globalizers team! Thrilled to have my visa for Michigan Ross School of Business for my MBA in hand. The entire process—from day one to visa approval—was handled with flawless execution and professionalism. Truly grateful for the support and guidance. 10/10 for their exceptional services!",
    type: "Student Review",
  },
  {
    name: "Aruj Jain",
    relation: "Admitted to Texas A&M University (TAMU), USA",
    quote:
      "10/10 on every aspect. Very happy with the services. It's TAMU!",
    type: "Student Review",
  },
  {
    name: "Karan Matta",
    relation: "Admitted to George Washington University, USA",
    quote:
      "I had absolutely zero doubt about joining Prashant Sir and The Globalizers team for my Master's journey abroad. Seeing the fantastic results my cousins achieved under his guidance gave me full faith in his process. Today, that faith has paid off with my USA visa in hand for George Washington University! Prashant Sir is like an elder brother who genuinely cares about your success like family.",
    type: "Student Review",
  },
  {
    name: "Nischal Gupta",
    relation: "Admitted to Boston University, USA",
    quote:
      "I enrolled at The Globalizers and it has been an exceptional experience with personalized counseling, applications, accommodation, and visa support. A heartfelt thank-you to Prashant sir, whose unwavering support made all the difference. Mentoring under Prashant sir has been a masterclass in clarity, conviction, and inspired excellence. If study abroad — only Globalizers!",
    type: "Student Review",
  },
  {
    name: "Abuzer Jafri",
    relation: "Admitted to Trinity College, Dublin",
    quote:
      "I needed help with the GRE and IELTS, and Prashant Sir delivered solid, clear guidance that made me actually understand what I needed to do. He untangled my exam prep better than I ever managed on my own and led me to one of the finest institutes. Thanks a ton, Prashant Sir, and appreciation to the team for making it run like clockwork.",
    type: "Student Review",
  },
  {
    name: "Jay Jain",
    relation: "Admitted to INSEAD, France 🇫🇷",
    quote:
      "I’m really grateful to Prashant Sir for his amazing mentoring. He helped me believe in myself and find my strengths, which gave me the confidence to go after my dreams. My admit and visa to INSEAD, France, say it all. Thank you so much, Prashant Sir, for your support and guidance!",
    type: "Student Review",
  },
  {
    name: "Vansh Pitalia",
    relation: "Admitted to London School of Economics (LSE), UK",
    quote:
      "I am grateful to Prashant sir and Team Globalizers for their constant guidance and encouragement. Their structured approach and valuable insights made the journey much smoother, and with their support I secured admission to the London School of Economics and Political Science (LSE) in the UK.",
    type: "Student Review",
  },
]

export default function TestimonialsPage() {
  const [featuredParent, ...studentReviews] = ALL_TESTIMONIALS

  return (
    <>
      <Section variant="default" className="py-20 md:py-28 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-72 w-96 rounded-full bg-linear-to-tr from-sky-200/40 via-violet-200/30 to-pink-200/40 blur-3xl opacity-60 pointer-events-none" />
        <Container className="max-w-4xl">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-primary">
            Honest Reviews
          </span>
          <h1 className="mb-6 font-heading text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
            What Students &amp; Parents Say
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Real experiences from families and students who trusted The Globalizers with their global education journey.
          </p>
        </Container>
      </Section>

      <Section variant="rose">
        <Container>
          <SectionHeader
            eyebrow="Feedback"
            title="Student &amp; Parent Experiences"
            description="Read verified testimonials from applicants and families who achieved their global study dreams."
            align="left"
          />

          {/* Featured Parent Testimonial */}
          <div className="mb-10">
            <TestimonialCard
              name={featuredParent.name}
              relation={featuredParent.relation}
              quote={featuredParent.quote}
              type={featuredParent.type}
              lineClamp={false}
              cardVariant="lavender"
              className="p-8 md:p-12 shadow-md border-violet-200/80"
            />
          </div>

          {/* Student Reviews Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studentReviews.map((t, i) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                relation={t.relation}
                quote={t.quote}
                type={t.type}
                lineClamp={false}
                cardVariant={(["sky", "mint", "peach", "amber", "rose"] as const)[i % 5]}
              />
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}

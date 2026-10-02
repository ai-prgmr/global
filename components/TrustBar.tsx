import Image from "next/image"
import { GraduationCap } from "lucide-react"
import { Container } from "@/components/primitives/Container"

const ADMITS_2026 =
  [
    {
      "name": "Gauransh Sharma",
      "university": "Chalmers University of Technology"
    },
    {
      "name": "Mubashara Sharif",
      "university": "Anhalt University of Applied Sciences"
    },
    {
      "name": "Ishkriti Jain",
      "university": "Penn State University"
    },
    {
      "name": "Swechchha Rahangdale",
      "university": "Purdue University"
    },
    {
      "name": "Komudi Bihani",
      "university": "Macquarie University"
    },
    {
      "name": "Suryansh Gupta",
      "university": "University of Twente"
    },
    {
      "name": "Dhruv Makhija",
      "university": "Columbia University"
    },
    {
      "name": "Hemang Modi",
      "university": "Technical University of Braunschweig"
    },
    {
      "name": "Sarthak Jain",
      "university": "POLIMI Engineering School"
    },
    {
      "name": "Harsh Khurana",
      "university": "Bocconi"
    },
    {
      "name": "Tanishqa Porwal",
      "university": "Carnegie Mellon University"
    },
    {
      "name": "Trishika Jian",
      "university": "King's College London"
    },
    {
      "name": "Ishaan Gupta",
      "university": "Bocconi"
    },
    {
      "name": "Atharv Birthare",
      "university": "UC San Diego"
    },
    {
      "name": "Gureen Saluja",
      "university": "Cornell University"
    },
    {
      "name": "Mahi Tiwari",
      "university": "EDHEC Business School"
    },
    {
      "name": "Ananya Bahadur",
      "university": "LSE (London School of Economics)"
    },
    {
      "name": "Sia Rawat",
      "university": "Cornell University"
    },
    {
      "name": "Vivan Mirchandani",
      "university": "Duke University"
    },
    {
      "name": "Advait Dangi",
      "university": "University of Miami"
    },
    {
      "name": "Tanmay Varade",
      "university": "FAU (Friedrich-Alexander-Universität)"
    },
    {
      "name": "Anjali Bansal",
      "university": "WHU – Otto Beisheim School of Management"
    },
    {
      "name": "Ansh Bharuka",
      "university": "ESCP Business School"
    },
    {
      "name": "Arjun Singh Parihar",
      "university": "UC San Diego"
    },
    {
      "name": "Riddhima Jethwani",
      "university": "Singapore Institute of Management (SIM)"
    },
    {
      "name": "Mansvi Nahata",
      "university": "Parsons"
    },
    {
      "name": "Kopal Kuiya",
      "university": "IÉSEG School of Management, Paris"
    },
    {
      "name": "Shikhar Wadhwani",
      "university": "EU Business School"
    },
    {
      "name": "Sakshi koolwal",
      "university": "PolimiGSOM"
    },
    {
      "name": "Aryan Vyas",
      "university": "University of Illinois Urbana-Champaign"
    },
    {
      "name": "Krashleen Kaur Chhabra",
      "university": "University College Dublin"
    },
    {
      "name": "Rishika Agrawal",
      "university": "Cranfield University"
    },
    {
      "name": "Shiv Avashiya",
      "university": "Carleton University"
    },
    {
      "name": "Harshwardhan Jain",
      "university": "SP Jain School of Global Management School"
    },
    {
      "name": "Vijit Shah",
      "university": "KIT-Hector Business School"
    },
    {
      "name": "Jenil Doshi",
      "university": "Michigan Ross"
    },
    {
      "name": "Navanshu Chattopadhyay",
      "university": "KTH Royal Institute of Technology"
    },
    {
      "name": "Sarjal Upadhyay",
      "university": "Hochschule Wismar"
    },
    {
      "name": "Karan Dholiya",
      "university": "Aivancity, La Grande Ecole De L'intelligence Artificielle Et De La Data"
    },
    {
      "name": "Anik Vora",
      "university": "Aivancity, La Grande Ecole De L'intelligence Artificielle Et De La Data"
    },
    {
      "name": "Reeaa Rana",
      "university": "EPITA - School of Engineering and Computer Science"
    },
    {
      "name": "Pranati Jaiswal",
      "university": "Istituto Marangoni"
    }
  ]


export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-primary py-2.5 sm:py-3.5 border-y border-white/10 shadow-md">
      <Container className="px-3 sm:px-6 lg:px-8">
        <div className="flex items-center w-full overflow-hidden">
          {/* Compact Fixed Title Section on Left for Mobile */}
          <div className="shrink-0 z-20 flex items-center gap-1.5 sm:gap-2.5 bg-primary pr-3 sm:pr-4 md:pr-6 py-0.5 border-r border-white/20">
            <div className="hidden sm:flex h-7 w-7 items-center justify-center rounded-lg bg-secondary text-white shadow-xs shrink-0">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-heading text-[10px] sm:text-xs font-black uppercase tracking-wider text-white">
                Admits <br /> 2026
              </span>
            </div>
          </div>

          {/* Continuous Horizontal Ticker */}
          <div className="relative flex-1 overflow-hidden">
            <div className="trust-scroll flex items-center gap-3 sm:gap-6 whitespace-nowrap pl-2.5 sm:pl-4">
              {[0, 1].map((set) => (
                <div key={set} className="flex items-center gap-3 sm:gap-6 shrink-0">
                  {ADMITS_2026.map((item, i) => (
                    <div
                      key={`${set}-${i}-${item.name}`}
                      className="flex items-center gap-2 sm:gap-3 rounded-full border border-white/15 bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 backdrop-blur-xs transition-colors hover:bg-white/20 hover:border-white/30"
                    >
                      <div className="flex flex-col text-left">
                        <span className="font-sans text-[11px] sm:text-xs font-bold text-white">
                          {item.name}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-medium text-white/80">
                          {item.university} &bull;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

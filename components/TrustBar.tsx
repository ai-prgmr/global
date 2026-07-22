import Image from "next/image"
import { GraduationCap } from "lucide-react"
import { Container } from "@/components/primitives/Container"

const ADMITS_2026 = [
  {
    name: "Aarav Sharma",
    university: "Harvard University",
    score: "GRE 334",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAObVWRJuPpitrLF15yi51Il9zBHXDKlJAl-tYon1EIY4pLmb0YpgEySNSJeWealNAQWawYsZNppkOKUdBA5yY7IlYETU45ym_0D1Kq9L2O9bRbXFKINR7kj5CKOCU9OuRU74J9HSdOlGp2Ir0Ic4dLtZwyH9Eji3AtdkbHNP8d-5uGrXAxQuFP2YAbFF5agj_L7qR6Vxc2PSNpAOzGBTTkkcq4aTuGpyM0AHCHjqqjkpYUyrGHE3N1S3Wlp-OVbd1r2gAqr2NB7HQ",
  },
  {
    name: "Ananya Verma",
    university: "Stanford University",
    score: "GMAT 740",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg1-hvCAudPDhgLDCPG0pXzsd3DTFlnvDYHgHcmHmgpZo9CuyyhDKn2KoQTN689xsKClZ4gRlAwzpkHF-sPORzbypbTg2g0UzgDm0Ehnmm5qkwQ4jTsRa9fvM1RLx0_xPEwOIYgt-C_V0P47ZSLzhloCIoFmdFuQNqQ48IjbauqqIGfB1RDhJtjqPswKuO899xmhyaSgsQ9GrlmfKFcoVzFLFkqbLMhjRVl5XwRMkqKcor91wUyyX9uoxLPKoljZ6I6ZzX5IFGSE",
  },
  {
    name: "Rohan Mehta",
    university: "Columbia University",
    score: "GRE 331",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuyU2AOK_zH6F9WUHp3S5tSSUUZf_PKYUH0eYsCgCL46L0FAG4IHA3m_f-tOD6v1u_XgdyYzS5kP-F-Uem-c9CvKsa11D-KoJmFVWclP2fEsQ8ucQ1El66CzhTV3zznXELSSKsQzOo4HZMZKcG8R6L-rRbqsr00VZelHeKmsFj2Hw5NklzmhkjBWqrmF7xKe38xWPx464k12uLI6jVsae6sIVg6P1STGAr2Vvy8GiFsA05ATCFm0M9uQ4pMcrxdvo4ZILqofCTLNE",
  },
  {
    name: "Priya Nair",
    university: "MIT",
    score: "GRE 338",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuAFlX6G1iDEKswX8e6S6exSniqAo5MO10E_FF6ngncc1svPVt5FvXKBJRwHfNwIUgCl02Z72GbyMzfT2OfH4L4h8Xm-XtfpMcs-zp6seqqPJiw0RFbMtKhik3FtiUJxPDHGRcXkv_shO38vByTI4aR311B0C-hJiLFxhuL2l7T64IAMvSb2E5hLhpZVMtaTF2dYB0eJ5g4ZtT5Qw3_GSodjoLWLpV12GFImvx9Zbh4O0wQwOumxQeS2tnPujEH13PYimxqYO7foU",
  },
  {
    name: "Vikram Patel",
    university: "University of Oxford",
    score: "IELTS 8.5",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAmy7rTThDVfUKN0gmtx2_Rfb0RprRd6kTItOuBnMxowB4SoSwPlS16NDKUF1omhHTkkvSnelJLeADqypJEdZaseFnzSBTgHBoTtu3fC0YfehCoEtNUyAim7ZImud3hGcrvVHb6UTP9dBXT_NAoYyco7-Pgh8Kvr2_2npYZvUFx2KEFolNj25OjghsK0nsUm4ygUJgsgoVXzSoA4qHk2sBPy2I8HdoSvG_UMZhgRjeHyKaW88Lffwxgwhbv2kdH0m0CTrhGaGyYk",
  },
  {
    name: "Sneha Gupta",
    university: "University of Cambridge",
    score: "GRE 330",
    logoSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSk-VWn6JUoN8C4uyDyZ0Zs3XXErge9rYRicLCgPTt0SFhuY8IR4FyAretnBHN-TnNFvZ8-xTRcWUv82sBM-LSoRm9IRxKomBn_AtFEkQcYSPuHhv3CSKiWcvHAz6-rSqWsVTiLYHp1UpRelcDL6lBvWLg7XL8DRa8FYpP-qkkUD0BT0uOFoowfWPBDFB0Kh6eEuYESprOM5WVfrp8tlSy1RAD0T9-mLb2J_QkM0zireO0PH2Gew2dGFTv0_brkYNwJiK7_Rx4xy4",
  },
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
                          {item.university} &bull; <strong className="text-secondary-foreground font-semibold">{item.score}</strong>
                        </span>
                      </div>
                      <Image
                        src={item.logoSrc}
                        alt={item.university}
                        width={80}
                        height={24}
                        className="h-4 sm:h-6 w-auto brightness-0 invert opacity-90 pl-1.5 sm:pl-2 border-l border-white/15"
                      />
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

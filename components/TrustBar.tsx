import Image from "next/image"
import Link from "next/link"

export function TrustBar() {
  const logos = [
    { alt: "Harvard", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAObVWRJuPpitrLF15yi51Il9zBHXDKlJAl-tYon1EIY4pLmb0YpgEySNSJeWealNAQWawYsZNppkOKUdBA5yY7IlYETU45ym_0D1Kq9L2O9bRbXFKINR7kj5CKOCU9OuRU74J9HSdOlGp2Ir0Ic4dLtZwyH9Eji3AtdkbHNP8d-5uGrXAxQuFP2YAbFF5agj_L7qR6Vxc2PSNpAOzGBTTkkcq4aTuGpyM0AHCHjqqjkpYUyrGHE3N1S3Wlp-OVbd1r2gAqr2NB7HQ" },
    { alt: "Stanford", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxg1-hvCAudPDhgLDCPG0pXzsd3DTFlnvDYHgHcmHmgpZo9CuyyhDKn2KoQTN689xsKClZ4gRlAwzpkHF-sPORzbypbTg2g0UzgDm0Ehnmm5qkwQ4jTsRa9fvM1RLx0_xPEwOIYgt-C_V0P47ZSLzhloCIoFmdFuQNqQ48IjbauqqIGfB1RDhJtjqPswKuO899xmhyaSgsQ9GrlmfKFcoVzFLFkqbLMhjRVl5XwRMkqKcor91wUyyX9uoxLPKoljZ6I6ZzX5IFGSE" },
    { alt: "Columbia", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuyU2AOK_zH6F9WUHp3S5tSSUUZf_PKYUH0eYsCgCL46L0FAG4IHA3m_f-tOD6v1u_XgdyYzS5kP-F-Uem-c9CvKsa11D-KoJmFVWclP2fEsQ8ucQ1El66CzhTV3zznXELSSKsQzOo4HZMZKcG8R6L-rRbqsr00VZelHeKmsFj2Hw5NklzmhkjBWqrmF7xKe38xWPx464k12uLI6jVsae6sIVg6P1STGAr2Vvy8GiFsA05ATCFm0M9uQ4pMcrxdvo4ZILqofCTLNE" },
    { alt: "MIT", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuAFlX6G1iDEKswX8e6S6exSniqAo5MO10E_FF6ngncc1svPVt5FvXKBJRwHfNwIUgCl02Z72GbyMzfT2OfH4L4h8Xm-XtfpMcs-zp6seqqPJiw0RFbMtKhik3FtiUJxPDHGRcXkv_shO38vByTI4aR311B0C-hJiLFxhuL2l7T64IAMvSb2E5hLhpZVMtaTF2dYB0eJ5g4ZtT5Qw3_GSodjoLWLpV12GFImvx9Zbh4O0wQwOumxQeS2tnPujEH13PYimxqYO7foU" },
    { alt: "Oxford", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEAmy7rTThDVfUKN0gmtx2_Rfb0RprRd6kTItOuBnMxowB4SoSwPlS16NDKUF1omhHTkkvSnelJLeADqypJEdZaseFnzSBTgHBoTtu3fC0YfehCoEtNUyAim7ZImud3hGcrvVHb6UTP9dBXT_NAoYyco7-Pgh8Kvr2_2npYZvUFx2KEFolNj25OjghsK0nsUm4ygUJgsgoVXzSoA4qHk2sBPy2I8HdoSvG_UMZhgRjeHyKaW88Lffwxgwhbv2kdH0m0CTrhGaGyYk" },
    { alt: "Cambridge", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSk-VWn6JUoN8C4uyDyZ0Zs3XXErge9rYRicLCgPTt0SFhuY8IR4FyAretnBHN-TnNFvZ8-xTRcWUv82sBM-LSoRm9IRxKomBn_AtFEkQcYSPuHhv3CSKiWcvHAz6-rSqWsVTiLYHp1UpRelcDL6lBvWLg7XL8DRa8FYpP-qkkUD0BT0uOFoowfWPBDFB0Kh6eEuYESprOM5WVfrp8tlSy1RAD0T9-mLb2J_QkM0zireO0PH2Gew2dGFTv0_brkYNwJiK7_Rx4xy4" },
  ]

  return (
    <section className="overflow-hidden bg-primary py-8">
      <div className="trust-scroll flex items-center gap-16 whitespace-nowrap">
        {[0, 1].map((set) => (
          <div key={set} className="flex items-center gap-16">
            <span className="font-[Montserrat] text-lg font-bold text-white">
              IVY LEAGUE ADMITS
            </span>
            {logos.map((logo) => (
              <Image
                key={`${set}-${logo.alt}`}
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            ))}
            <span className="font-[Montserrat] text-lg font-bold text-white">
              19+ YEARS OF TRUST
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

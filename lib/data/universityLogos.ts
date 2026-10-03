/**
 * University Domain and Metadata Registry
 * Maps institutional names to their official web domains for high-resolution logo resolution.
 */

export const UNIVERSITY_DOMAINS: Record<string, { domain: string; shortName?: string }> = {
  // United States
  "Harvard University": { domain: "harvard.edu", shortName: "Harvard" },
  "Stanford University": { domain: "stanford.edu", shortName: "Stanford" },
  "MIT": { domain: "mit.edu", shortName: "MIT" },
  "Massachusetts Institute of Technology (MIT)": { domain: "mit.edu", shortName: "MIT" },
  "Columbia University": { domain: "columbia.edu", shortName: "Columbia" },
  "University of Chicago": { domain: "uchicago.edu", shortName: "UChicago" },
  "UC Berkeley": { domain: "berkeley.edu", shortName: "UC Berkeley" },
  "UCLA": { domain: "ucla.edu", shortName: "UCLA" },
  "University of Michigan": { domain: "umich.edu", shortName: "UMich" },
  "Carnegie Mellon": { domain: "cmu.edu", shortName: "CMU" },
  "Carnegie Mellon University": { domain: "cmu.edu", shortName: "CMU" },
  "Georgia Tech": { domain: "gatech.edu", shortName: "Georgia Tech" },
  "NYU": { domain: "nyu.edu", shortName: "NYU" },
  "New York University": { domain: "nyu.edu", shortName: "NYU" },
  "Purdue University": { domain: "purdue.edu", shortName: "Purdue" },
  "UNC Charlotte": { domain: "charlotte.edu", shortName: "UNC Charlotte" },
  "Boston University": { domain: "bu.edu", shortName: "Boston Univ" },
  "Texas A&M University (TAMU)": { domain: "tamu.edu", shortName: "TAMU" },
  "George Washington University": { domain: "gwu.edu", shortName: "GWU" },

  // United Kingdom
  "University of Oxford": { domain: "ox.ac.uk", shortName: "Oxford" },
  "University of Cambridge": { domain: "cam.ac.uk", shortName: "Cambridge" },
  "Imperial College London": { domain: "imperial.ac.uk", shortName: "Imperial" },
  "UCL (University College London)": { domain: "ucl.ac.uk", shortName: "UCL" },
  "London School of Economics (LSE)": { domain: "lse.ac.uk", shortName: "LSE" },
  "University of Edinburgh": { domain: "ed.ac.uk", shortName: "Edinburgh" },
  "King's College London": { domain: "kcl.ac.uk", shortName: "KCL" },
  "Manchester University": { domain: "manchester.ac.uk", shortName: "Manchester" },
  "University of Warwick": { domain: "warwick.ac.uk", shortName: "Warwick" },
  "Bristol University": { domain: "bristol.ac.uk", shortName: "Bristol" },

  // Canada
  "University of Toronto": { domain: "utoronto.ca", shortName: "U of T" },
  "University of British Columbia": { domain: "ubc.ca", shortName: "UBC" },
  "McGill University": { domain: "mcgill.ca", shortName: "McGill" },
  "University of Waterloo": { domain: "uwaterloo.ca", shortName: "Waterloo" },
  "McMaster University": { domain: "mcmaster.ca", shortName: "McMaster" },
  "University of Alberta": { domain: "ualberta.ca", shortName: "UAlberta" },
  "Western University": { domain: "uwo.ca", shortName: "Western" },
  "York University": { domain: "yorku.ca", shortName: "York" },
  "Concordia University": { domain: "concordia.ca", shortName: "Concordia" },

  // Australia
  "University of Melbourne": { domain: "unimelb.edu.au", shortName: "UniMelb" },
  "University of Sydney": { domain: "sydney.edu.au", shortName: "USyd" },
  "Australian National University (ANU)": { domain: "anu.edu.au", shortName: "ANU" },
  "UNSW Sydney": { domain: "unsw.edu.au", shortName: "UNSW" },
  "University of Queensland": { domain: "uq.edu.au", shortName: "UQ" },
  "Monash University": { domain: "monash.edu", shortName: "Monash" },
  "University of Western Australia": { domain: "uwa.edu.au", shortName: "UWA" },
  "University of Adelaide": { domain: "adelaide.edu.au", shortName: "Adelaide" },

  // Germany
  "Technical University of Munich (TUM)": { domain: "tum.de", shortName: "TUM" },
  "Ludwig Maximilian University of Munich (LMU)": { domain: "lmu.de", shortName: "LMU" },
  "Heidelberg University": { domain: "uni-heidelberg.de", shortName: "Heidelberg" },
  "Humboldt University of Berlin": { domain: "hu-berlin.de", shortName: "HU Berlin" },
  "RWTH Aachen University": { domain: "rwth-aachen.de", shortName: "RWTH" },
  "Karlsruhe Institute of Technology (KIT)": { domain: "kit.edu", shortName: "KIT" },
  "TU Berlin": { domain: "tu.berlin", shortName: "TU Berlin" },
  "University of Freiburg": { domain: "uni-freiburg.de", shortName: "Freiburg" },
  "FAU Erlangen-Nuremberg": { domain: "fau.de", shortName: "FAU" },
  "WHU - Otto Beisheim School of Management": { domain: "whu.edu", shortName: "WHU" },
  "Hochschule Anhalt": { domain: "hs-anhalt.de", shortName: "HS Anhalt" },

  // Ireland
  "Trinity College Dublin": { domain: "tcd.ie", shortName: "TCD" },
  "University College Dublin (UCD)": { domain: "ucd.ie", shortName: "UCD" },
  "National University of Ireland Galway (NUI Galway)": { domain: "universityofgalway.ie", shortName: "NUI Galway" },
  "University College Cork (UCC)": { domain: "ucc.ie", shortName: "UCC" },
  "Dublin City University (DCU)": { domain: "dcu.ie", shortName: "DCU" },
  "University of Limerick": { domain: "ul.ie", shortName: "UL" },

  // New Zealand
  "University of Auckland": { domain: "auckland.ac.nz", shortName: "UoA" },
  "University of Otago": { domain: "otago.ac.nz", shortName: "Otago" },
  "Victoria University of Wellington": { domain: "wgtn.ac.nz", shortName: "VUW" },
  "University of Canterbury": { domain: "canterbury.ac.nz", shortName: "Canterbury" },
  "Massey University": { domain: "massey.ac.nz", shortName: "Massey" },
  "University of Waikato": { domain: "waikato.ac.nz", shortName: "Waikato" },
  "Lincoln University": { domain: "lincoln.ac.nz", shortName: "Lincoln" },
  "Auckland University of Technology (AUT)": { domain: "aut.ac.nz", shortName: "AUT" },

  // France
  "INSEAD": { domain: "insead.edu", shortName: "INSEAD" },
  "HEC Paris": { domain: "hec.edu", shortName: "HEC" },
  "Sorbonne University": { domain: "sorbonne-universite.fr", shortName: "Sorbonne" },
  "PSL Research University": { domain: "psl.eu", shortName: "PSL" },
  "Ecole Polytechnique": { domain: "polytechnique.edu", shortName: "Polytechnique" },
  "ESSEC Business School": { domain: "essec.edu", shortName: "ESSEC" },
  "Sciences Po": { domain: "sciencespo.fr", shortName: "Sciences Po" },
  "Aivancity": { domain: "aivancity.ai", shortName: "Aivancity" },
  "EM Lyon": { domain: "em-lyon.com", shortName: "EM Lyon" },

  // Singapore
  "National University of Singapore (NUS)": { domain: "nus.edu.sg", shortName: "NUS" },
  "Nanyang Technological University (NTU)": { domain: "ntu.edu.sg", shortName: "NTU" },
  "Singapore Management University (SMU)": { domain: "smu.edu.sg", shortName: "SMU" },
  "Singapore University of Technology and Design (SUTD)": { domain: "sutd.edu.sg", shortName: "SUTD" },
  "Singapore Institute of Technology (SIT)": { domain: "singaporetech.edu.sg", shortName: "SIT" },
  "INSEAD Asia Campus": { domain: "insead.edu", shortName: "INSEAD" },
  "Singapore Insitute of Management(SIM)": { domain: "simge.edu.sg", shortName: "SIM" },

  // Dubai (UAE)
  "University of Wollongong in Dubai (UOWD)": { domain: "uowdubai.ac.ae", shortName: "UOWD" },
  "Middlesex University Dubai": { domain: "mdx.ac.ae", shortName: "Middlesex" },
  "Heriot-Watt University Dubai": { domain: "hw.ac.uk", shortName: "Heriot-Watt" },
  "Birla Institute of Technology and Science (BITS Pilani) Dubai": { domain: "bits-pilani.ac.in", shortName: "BITS Dubai" },
  "Murdoch University Dubai": { domain: "murdochdubai.ac.ae", shortName: "Murdoch" },
  "American University in Dubai (AUD)": { domain: "aud.edu", shortName: "AUD" },
  "University of Birmingham Dubai": { domain: "birmingham.ac.uk", shortName: "Birmingham" },
  "Curtin University Dubai": { domain: "curtindubai.ac.ae", shortName: "Curtin" },
  "Rochester Institute of Technology (RIT) Dubai": { domain: "rit.edu", shortName: "RIT Dubai" },
  "Canadian University Dubai (CUD)": { domain: "cud.ac.ae", shortName: "CUD" },
  "Manipal Academy of Higher Education Dubai": { domain: "manipaldubai.com", shortName: "Manipal Dubai" },
  "Amity University Dubai": { domain: "amityuniversity.ae", shortName: "Amity Dubai" },

  // Netherlands
  "Delft University of Technology (TU Delft)": { domain: "tudelft.nl", shortName: "TU Delft" },
  "University of Amsterdam": { domain: "uva.nl", shortName: "UvA" },
  "Wageningen University": { domain: "wur.nl", shortName: "Wageningen" },
  "Erasmus University Rotterdam": { domain: "eur.nl", shortName: "Erasmus" },
  "Utrecht University": { domain: "uu.nl", shortName: "Utrecht" },
  "Leiden University": { domain: "universiteitleiden.nl", shortName: "Leiden" },
  "Eindhoven University of Technology": { domain: "tue.nl", shortName: "TU/e" },
  "University of Groningen": { domain: "rug.nl", shortName: "Groningen" },
  "University of Twente": { domain: "utwente.nl", shortName: "Twente" },

  // Sweden
  "KTH Royal Institute of Technology": { domain: "kth.se", shortName: "KTH" },
  "Lund University": { domain: "lu.se", shortName: "Lund" },
  "Uppsala University": { domain: "uu.se", shortName: "Uppsala" },
  "Chalmers University of Technology": { domain: "chalmers.se", shortName: "Chalmers" },
  "Stockholm University": { domain: "su.se", shortName: "Stockholm" },
  "Gothenburg University": { domain: "gu.se", shortName: "Gothenburg" },
  "Linköping University": { domain: "liu.se", shortName: "Linköping" },

  // Italy
  "Politecnico di Milano": { domain: "polimi.it", shortName: "Polimi" },
  "Bocconi University": { domain: "unibocconi.it", shortName: "Bocconi" },
  "SDA Bocconi": { domain: "sdabocconi.it", shortName: "SDA Bocconi" },
  "POLIMI Graduate School of Management": { domain: "gsom.polimi.it", shortName: "POLIMI GSoM" },
  "Sapienza University of Rome": { domain: "uniroma1.it", shortName: "Sapienza" },
  "University of Bologna": { domain: "unibo.it", shortName: "UniBo" },
  "University of Padova": { domain: "unipd.it", shortName: "UniPd" },
  "Politecnico di Torino": { domain: "polito.it", shortName: "PoliTo" },
}

/**
 * Derives a clean domain or logo URL for any university name.
 */
export function getUniversityLogoUrl(name: string): { logoUrl: string; monogram: string } {
  const match = UNIVERSITY_DOMAINS[name]
  const monogram = match?.shortName || name.slice(0, 3).toUpperCase()

  if (match?.domain) {
    return {
      logoUrl: `https://www.google.com/s2/favicons?domain=${match.domain}&sz=128`,
      monogram,
    }
  }

  // Fallback domain extraction heuristic
  const cleanName = name.toLowerCase().replace(/[^a-z0-9]/g, "")
  return {
    logoUrl: `https://www.google.com/s2/favicons?domain=${cleanName}.edu&sz=128`,
    monogram,
  }
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { FigureImage } from "@/components/figure-image";
import heroImg from "@/public/images/why-measure-j/sunrise-main-sat-imagery.png";
import petalumaPoultryImg from "@/public/images/why-measure-j/petaluma-poultry-chicken-santa-rosa.png";
import reichardtDuckImg from "@/public/images/why-measure-j/reichardt-duck-cafo-in-petaluma.png";
import mertensDairyImg from "@/public/images/why-measure-j/mertens-dairy-cafo-in-sonoma.png";
import mertensLagoonImg from "@/public/images/why-measure-j/mertens-manure-lagoon.jpg";

export const metadata: Metadata = {
  title: "Why Measure J?",
};

export default function Page() {
  return (
    <>
      <PageHero title="Why Measure J?" image={heroImg} imageAlt="" overlayOpacity={41}>
        <p className="mt-4 text-[0.8rem] text-white/90">
          Sunrise’s main facility in Petaluma
        </p>
      </PageHero>

      <Section width="narrow">
        <div className="space-y-5">
          <p>
            In 2024, Sonoma County has the opportunity to lead the transition
            toward a just and sustainable food system. Across the country,
            record numbers of animals are languishing in cruel conditions,
            human-caused climate change is wreaking havoc, quickly-evolving
            zoonotic diseases are threatening another pandemic, and corporate
            monopolies are pricing working class families out of basic
            necessities. These issues are all connected by the{" "}
            <a
              href="https://www.ewg.org/news-insights/news/2024/02/new-usda-data-reveal-largest-factory-farms-keep-growing-number"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              exponential rise of factory farming
            </a>
            .
          </p>
          <p>
            <Link href="/measure-text" className="underline">
              Measure J
            </Link>{" "}
            is a citizen-initiated ballot measure to prohibit Concentrated
            Animal Feeding Operations (CAFOs), which are also commonly called
            factory farms, in Sonoma County. Measure J uses the Environmental
            Protection Agency&apos;s (EPA){" "}
            <a
              href="https://www.ecfr.gov/current/title-40/chapter-I/subchapter-D/part-122/subpart-B/section-122.23"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              definition of a CAFO
            </a>{" "}
            without any alterations. The EPA defines a CAFO as an animal
            feeding operation (AFO) that exceeds specified animal population
            limits or causes substantial pollution. The Coalition to End
            Factory Farming, the ballot committee for Measure J, estimates
            there are 21 CAFOs in Sonoma County, all of which meet the federal
            definition of a large CAFO and together confine around 3 million
            animals. See the map of CAFOs in Sonoma County{" "}
            <Link href="/cafos#cafo-map" className="underline">
              here
            </Link>
            . Measure J would require these 21 facilities to either close or
            downsize to below the federal threshold for a large CAFO over a
            3-year period. It would also prevent new CAFOs from coming into
            Sonoma County.
          </p>
          <p>
            The numerous issues with CAFOs are well-documented, and some
            attempts have been made to address them. The{" "}
            <a
              href="https://www.sierraclub.org/grassroots-network/food-agriculture/factory-farms-cafos"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Sierra Club
            </a>
            ,{" "}
            <a
              href="https://www.centerforfoodsafety.org/files/2019-urgent-case-for-moratorium-fact-sheet_29169.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Food and Water Watch
            </a>
            , and the{" "}
            <a
              href="https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2014/07/24/11/17/precautionary-moratorium-on-new-concentrated-animal-feed-operations"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              American Public Health Association
            </a>{" "}
            have all called for moratoriums on CAFOs. In 2023, Jared Huffman,
            along with 38 other House Democrats, co-sponsored the{" "}
            <a
              href="https://www.congress.gov/bill/118th-congress/house-bill/797"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Farm System Reform Act (FSRA)
            </a>
            , which would have placed a moratorium on and phased out all large
            CAFOs. Our coalition drew inspiration from Senator Cory Booker’s
            2019 version of the FSRA when drafting Measure J. For decades, Big
            Ag has employed oil-industry-style tactics to{" "}
            <a
              href="https://www.vox.com/future-perfect/22379909/big-meat-companies-spend-millions-lobbying-climate"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              block regulation
            </a>{" "}
            like the FSRA and interfere with effective enforcement of existing
            laws at every turn. Now, with the Supreme Court{" "}
            <a
              href="https://www.sierraclub.org/sierra/supreme-court-overturns-chevron-doctrine-gutting-federal-environmental-protections"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              overturning of the Chevron Doctrine
            </a>
            , and{" "}
            <a
              href="https://www.sierraclub.org/sierra/inside-trump-s-plan-bulldoze-american-climate-policy"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Project 2025
            </a>{" "}
            poised to gut what remains of the USDA and EPA, it is becoming
            even more clear that local jurisdictions must lead the way when it
            comes to addressing factory farming.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FigureImage
            src={petalumaPoultryImg}
            alt="A Petaluma Poultry chicken CAFO in Santa Rosa"
            caption="A Petaluma Poultry chicken CAFO in Santa Rosa"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={reichardtDuckImg}
            alt="Reichardt Duck CAFO in Petaluma"
            caption="Reichardt Duck CAFO in Petaluma"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>
        <p className="mt-4 text-center text-[0.8rem]">
          <em>Photos from Direct Action Everywhere.</em>
        </p>

        <div className="mt-10 space-y-5">
          <h2>Measure J will protect millions of animals from abuse.</h2>
          <p>
            CAFOs treat animals as production units in order to maximize
            profits. Animals in CAFOs are often subjected to extreme
            overcrowding and confinement, preventing them from exhibiting
            natural behaviors and leading to chronic stress and physical
            ailments. In order to facilitate the concentration of large
            numbers of animals, painful mutilations such as cutting off the
            beaks of chickens are routinely practiced. Animals in CAFOs are
            also routinely “culled” or left to die when they become sick or
            injured, rather than receiving veterinary care.{" "}
            <a
              href="https://www.vox.com/future-perfect/2020/7/8/21311327/farmers-factory-farms-cafos-animal-rights-booker-warren-khanna"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Ezra Klein explains
            </a>{" "}
            how factory farms incentivize cruelty, “The way you win that
            competition is to pack more animals into your sheds, pump them
            fuller of antibiotics so they don’t die from infections that
            flourish amid overcrowding, raise breeds that live lives of pain
            but grow with astonishing speed, create massive manure lagoons
            that poison streams and turn air acrid. The result is a brutal
            incentive to mechanize the process of livestock production in
            ways cruel to the animals, the farmers, and their communities.”
          </p>
          <p>
            <a
              href="https://docs.google.com/document/d/1GCxEVFufE7DTAtRzT7fIvhdA_A0NsCJFynnTEnyz3qA/edit?usp=sharing"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Investigations into factory farms in Sonoma County
            </a>{" "}
            have revealed severe and systemic animal welfare issues and
            widespread disease, but the authorities have refused to prosecute
            the companies or stop the abuse. For example, investigations into
            Reichardt Duck Farm by Mercy for Animals in{" "}
            <a
              href="https://www.youtube.com/watch?v=jiil6ONtDxU"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2014
            </a>{" "}
            and by Direct Action Everywhere in{" "}
            <a
              href="https://www.youtube.com/watch?v=HhYYrur9ORQ"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2019
            </a>{" "}
            and{" "}
            <a
              href="https://www.dropbox.com/scl/fi/xqjxj8flogjhm74nja2v2/Reichardt-Duck-Farm-2023-B-Roll.m4v?rlkey=n7fjgfj3yjtqpltjfj7g878wo&dl=0"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2023
            </a>{" "}
            have exposed a decade of extreme neglect, including diseased ducks
            left stuck on their backs, unable to get up, and consequently
            unable to reach food or water in violation of{" "}
            <a
              href="http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=597"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              California Penal Code Section 597
            </a>
            . Activists and attorneys have shared this video evidence along
            with veterinary and legal opinions with the Sonoma County
            District Attorney&apos;s Office, the Sheriff’s Office, Animal
            Services, and local police departments, but time and time again,
            no action is taken and the abuse continues. Reichardt is the
            largest duck farm in California, confining over 200,000 ducks
            inside sheds where they live on wire flooring with no access to
            water for swimming, an important natural behavior.
          </p>
          <p>
            Another example is poultry giant Perdue Foods, which operates four
            chicken CAFOs in Sonoma County through its subsidiary Petaluma
            Poultry, a supplier to major grocery chains, including Costco and
            Safeway. Since 2018, investigators have{" "}
            <a
              href="https://righttorescue.com/cases/petalumapoultry/Petaluma%20Poultry%20Investigatory%20Report%202023.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              documented routine violations
            </a>{" "}
            of California&apos;s animal cruelty laws at several Petaluma
            Poultry factory farms and the company’s slaughterhouse, including
            birds collapsed on the floor or stuck on their backs and unable to
            walk to food or water, left to slowly starve to death; birds with
            splayed legs; and birds with open wounds. Through lab testing,
            they also identified numerous infectious pathogens and diseases
            present at Petaluma Poultry factory farms in the county, including
            Infectious Bursal Disease, Infectious Bronchitis Virus, and a
            highly antibiotic-resistant Enterococcus bacteria. These reports,
            too, have been ignored by the authorities. Rather than prosecute
            Petaluma Poultry, the Sonoma County District Attorney has embraced{" "}
            <a
              href="https://www.nytimes.com/2013/04/07/us/taping-of-farm-cruelty-is-becoming-the-crime.html"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              “Ag-Gag”
            </a>
            -style repression, and chosen to prosecute the whistleblowers who
            documented these conditions and rescued animals from abuse.
          </p>
          <p>
            At all of the six dairy CAFOs in Sonoma County, calves are
            separated from their mothers and confined in small hutches in
            order to maximize how much of the mothers’ milk can be sold.
            Mistreatment like this is the outcome of maximizing profits over
            what is natural and healthy for animals. Earlier this year,{" "}
            <em>The Atlantic</em> published a{" "}
            <a
              href="https://www.theatlantic.com/ideas/archive/2024/04/alexandre-farms-treatment-of-animals/677980/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              shocking exposé
            </a>{" "}
            of a Northern California dairy, in which Annie Lowrey writes of
            the standard practices in commercial dairies, including organic
            and pasture-based dairies, “Dairy cows are repeatedly inseminated
            or bred, calved, and separated from their babies…And when their
            bodies begin to give out, they keep getting milked until they are
            euthanized or slaughtered.” Dr. Brenda Forsythe, PhD, DVM, who is
            supporting Measure J, says, “The factory farming industry
            genetically manipulates animals in ways that risk their health and
            wellbeing. Dairy cows and egg-laying hens are pushed to produce
            such high output that their bodies become exhausted after just a
            few years. In 1950, the average dairy cow produced around 5,000
            pounds of milk a year, but today, she produces almost 20,000
            pounds.” When their milk production declines around 5 years of
            age, dairy cows are considered “spent” and sent to slaughter. In
            natural conditions, cows can live 20 to 25 years.
          </p>
          <p>
            Local and federal agencies have failed to protect animals
            suffering in factory farms. Measure J gives voters the
            opportunity to protect animals directly.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2>Measure J will protect water and aquatic ecosystems</h2>
          <p>
            According to the{" "}
            <a
              href="https://www.hecweb.org/wp-content/uploads/2019/03/CDC-report.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              CDC
            </a>
            , “The agriculture sector, including CAFOs, is the leading
            contributor of pollutants to lakes, rivers, and reservoirs.”
            Nearly every stream and river in Sonoma County is{" "}
            <a
              href="https://mywaterway.epa.gov/community/Sonoma%20County,%20CA,%20USA/overview"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              listed by the EPA as impaired
            </a>{" "}
            due in part to “nitrogen and/or phosphorus” and “bacteria and
            microbes” of which animal waste is a primary source. These
            include the Petaluma River, Laguna de Santa Rosa, and Sonoma
            Creek. The SF Bay Regional Water Board said of the Petaluma River
            Watershed in a{" "}
            <a
              href="https://attains.epa.gov/attains-public/api/documents/actions/CA_SWRCB/CA-RB2-PetalumaRiver-IndicatorBacteria-TMDL/218895"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              2019 report
            </a>
            : “Fecal bacteria originating from cow and horse waste were
            identified by the MST study at very high rates throughout the
            watershed, in both dry and wet seasons. Considering the large
            number of CAFs and the quantity of animals they typically house,
            as well as the amount of waste they tend to produce, they are a
            significant source of FIB [fecal indicator bacteria] in the
            watershed.” This water pollution is so prevalent because CAFOs
            produce a massive amount of waste. A single mature dairy cow
            produces around 150 pounds of waste per day, which means that the
            approximately 6,000 cows confined on dairy CAFOs in Sonoma County
            produce almost twice the amount of waste as the entire human
            population of Sonoma County. That waste is then primarily stored
            in open pits and dumped onto the land untreated.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FigureImage
            src={mertensDairyImg}
            alt="Mertens Dairy CAFO in Sonoma where 900 cows live in a feedlot with no access to pasture"
            caption="Mertens Dairy CAFO in Sonoma where 900 cows live in a feedlot with no access to pasture"
            imgClassName="aspect-4/3 object-cover"
          />
          <FigureImage
            src={mertensLagoonImg}
            alt="A manure lagoon the size of two football fields at Mertens"
            caption="A manure lagoon the size of two football fields at Mertens"
            imgClassName="aspect-4/3 object-cover"
          />
        </div>

        <div className="mt-10 space-y-5">
          <p>
            While the EPA is theoretically tasked with oversight of CAFO
            water pollution, a{" "}
            <a
              href="https://www.gao.gov/assets/gao-08-944.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              report
            </a>{" "}
            from the U.S. Government Accountability Office found that “EPA
            does not have comprehensive, accurate information on the number
            of permitted CAFOs nationwide. As a result, EPA does not have the
            information it needs to effectively regulate these CAFOs.” The
            EPA has faced severe criticism and lawsuits from prominent
            environmental groups including the{" "}
            <a
              href="https://www.nrdc.org/resources/cafos-what-we-dont-know-hurting-us"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              National Resource Defense Council
            </a>
            ,{" "}
            <a
              href="https://www.foodandwaterwatch.org/2022/10/11/after-long-delay-groups-sue-epa-for-response-on-factory-farm-water-pollution-rules/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Food and Water Watch
            </a>
            , and{" "}
            <a
              href="https://biologicaldiversity.org/programs/population_and_sustainability/pdfs/Citizens_CAFO_CWA_Petition.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Center for Biological Diversity
            </a>{" "}
            for their failure to effectively regulate CAFOs. As a result, the
            task of challenging CAFOs has largely fallen on individuals such
            as environmental attorneys and activists. Last year two county
            CAFOs were sued over violations of the Clean Water Act; Reichardt
            Duck Farm settled the{" "}
            <a
              href="https://casetext.com/case/californians-for-alternatives-to-toxics-v-reichardt-duck-farm-inc"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              lawsuit
            </a>{" "}
            and Mulas Dairy decided to{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/sonoma-county-dairy-lawsuit-closure/#:~:text=Mulas%20Dairy%20had%20about%20800,violations%20of%20water%20quality%20standards."
              target="_blank"
              rel="noopener"
              className="underline"
            >
              close
            </a>{" "}
            their operation.
          </p>
          <p>
            By prohibiting CAFOs, which will effectively set limits on the
            number of animals that can be confined in a single operation,
            Measure J will reduce water pollution and protect our important
            watersheds.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2>Measure J will reduce greenhouse gas emissions.</h2>
          <p>
            According to the{" "}
            <a
              href="https://www.sierraclub.org/policy/agriculture/food"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Sierra Club
            </a>
            , &quot;CAFOs also accelerate climate change by their
            disproportionate production of greenhouse gasses. The Sierra Club
            opposes the establishment of new CAFOs, and supports the phasing
            out of existing operations as expeditiously as possible.”{" "}
            <strong>
              The bulk of factory farm emissions come from methane and
              nitrous oxide which are emitted by the digestive systems and
              decomposing waste of animals.
            </strong>{" "}
            Although these greenhouse gasses often go ignored, they pose a
            significantly greater climate warming risk in the immediate term
            compared to carbon dioxide. Methane is considered to have more
            than{" "}
            <a
              href="https://www.newsweek.com/methane-vs-co2-compared-greenhouse-gas-climate-change-global-warming-potential-biden-1644977"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              80 times
            </a>{" "}
            the global warming potential of CO₂ over a 20-year period, while
            nitrous oxide has a staggering{" "}
            <a
              href="https://ghgprotocol.org/sites/default/files/ghgp/Global-Warming-Potential-Values%20%28Feb%2016%202016%29_1.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              265x impact
            </a>{" "}
            on global warming. Storing massive amounts of this waste in open
            pits, called “manure retention ponds,” leads to a significant
            increase in methane emissions because it creates an anaerobic
            environment where methane-emitting bacteria thrive. CAFOs
            exacerbate this issue because when a large number of animals are
            confined together, even if they have access to pasture at some
            times, it leads to more waste being concentrated. According to
            the{" "}
            <a
              href="https://www.epa.gov/system/files/documents/2024-04/us-ghg-inventory-2024-main-text_04-18-2024.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              EPA
            </a>
            , animal agriculture is the largest source of methane nationwide,
            and the second largest source of nitrous oxide.
          </p>
          <p>
            In Sonoma County, livestock manure management is the{" "}
            <a
              href="https://rcpa.ca.gov/wp-content/uploads/2022/09/RCPA-Community-GHG-Inventory-2020-Update-FINAL-2022-09-06.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              third largest emissions source
            </a>
            , according to the Regional Climate Protection Authority (RCPA)
            2020 Greenhouse Gas Emissions Inventory. The RCPA says that manure
            management in the county produces 386,913 metric tons of CO₂
            equivalent annually, equal to the amount emitted by 92,000
            gasoline powered cars over the same timeframe. Sequestering just
            one year of that CO₂ would require planting over 6 million trees
            and allowing them to grow for 10 years. Reducing factory farm
            emissions would result in significant progress on the ambitious
            county goal of achieving net zero emissions by 2030.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2>Measure J will safeguard public health.</h2>
          <p>
            The water pollution and emissions from CAFOs also cause adverse
            health effects within surrounding communities.{" "}
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/17384782/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              According to the NIH
            </a>
            , “Toxic gasses, vapors, and particles are emitted from
            concentrated animal feeding operations (CAFOs) into the general
            environment. These include ammonia, hydrogen sulfide, carbon
            dioxide, malodorous vapors, and particles contaminated with a wide
            range of microorganisms.”{" "}
            <a
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9602095/#:~:text=Populations%20exposed%20to%20these%20chemicals,%2C%20and%20throat%20%5B4%5D."
              target="_blank"
              rel="noopener"
              className="underline"
            >
              Another NIH study
            </a>{" "}
            focused on poultry CAFOs reports, “Populations exposed to these
            chemicals may be at risk for a host of adverse health outcomes.
            Exposure to airborne ammonia and volatile organic compounds can
            aggravate lung function and may cause chronic lung disease, while
            hydrogen sulfide can cause inflammation of the eyes, nose, and
            throat. Particulate matter may worsen lung function and can cause
            irregular heartbeat, heart attacks, and other cardiac
            abnormalities.”
          </p>
          <p>
            Additionally, CAFOs pose a risk of transmitting zoonotic diseases
            to humans from animals. With large numbers of genetically similar
            animals concentrated in confined areas, and often living on top
            of their own waste, CAFOs provide a perfect breeding ground for
            diseases to develop and spread. The CDC{" "}
            <a
              href="https://www.cdc.gov/one-health/about/about-zoonotic-diseases.html"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              reports
            </a>{" "}
            that 3 out of every 4 new or emerging infectious diseases in
            humans come from animals. A zoonotic disease caused the swine flu
            (H1N1) outbreak in 2009-2010. The CDC estimates that{" "}
            <a
              href="https://archive.cdc.gov/www_cdc_gov/flu/pandemic-resources/2009-h1n1-pandemic.html"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              151,700-575,400 people worldwide died from H1N1
            </a>{" "}
            during the first year the virus circulated.{" "}
            <a
              href="https://www.who.int/news/item/30-03-2024-2023--outbreaks-of-swine-influenza"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              There are still outbreaks happening all over the world
            </a>
            . Avian flu is another example of a zoonotic disease that has
            killed humans in the past and is{" "}
            <a
              href="https://www.google.com/search?q=avian+flu"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              currently evolving
            </a>
            , posing a grave threat to humans and other animals. The
            confluence of confined poultry and cow facilities in Sonoma
            County, a county within a major migration route for wild birds,
            poses a serious risk of replicating the bird-to-cow-to-human jumps
            of H5N1 that have{" "}
            <a
              href="https://www.cdc.gov/media/releases/2024/p0530-h5-human-case-michigan.html"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              recently occurred in Texas and Michigan
            </a>
            , and that public health experts have warned threatens a{" "}
            <a
              href="https://www.reuters.com/business/healthcare-pharmaceuticals/scientists-wary-bird-flu-pandemic-unfolding-slow-motion-2024-07-01/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              possible pandemic.
            </a>
          </p>
          <p>
            Another public health risk of CAFOs is sick animals entering the
            food supply and making consumers sick. In 2022, Perdue’s Petaluma
            Poultry, which slaughters birds from chicken CAFOs throughout the
            county, was placed in Category 3, the USDA’s worst category for
            salmonella levels. A{" "}
            <a
              href="https://www.pressdemocrat.com/article/news/perdues-petaluma-poultry-plant-struggles-to-limit-pathogens/"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              <em>Press Democrat</em> article
            </a>{" "}
            that year titled “Perdue’s Petaluma poultry plant struggles to
            eliminate bacteria that can make people sick” reported, “The
            Petaluma facility had the fourth-highest rate among 60 California
            processors of chicken parts from the beginning of September 2020
            to the end of August 2021. Perdue Petaluma’s rate of 16.7% was
            nearly four times the state average.” Regarding Campylobacter,
            another pathogen that causes illness in humans, the article
            reported, “63% of the whole carcasses tested at Perdue Petaluma,
            and 61% of the chicken parts tested, were positive for
            campylobacter. That’s close to four times the national rate.”
          </p>
          <p>
            The American Public Health Association, which is the largest
            association of public health professionals in the world,{" "}
            <a
              href="https://www.apha.org/policies-and-advocacy/public-health-policy-statements/policy-database/2014/07/24/11/17/precautionary-moratorium-on-new-concentrated-animal-feed-operations"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              called for a moratorium
            </a>{" "}
            on CAFOs over a decade ago.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          <h2>Measure J will level the playing field and benefit small farms.</h2>
          <p>
            It is well-known that across the US, large factory farms are
            taking over our food system, using monopolistic practices to
            push out small farms and control consumer pricing. This same
            process is also taking place in Sonoma County. There were over{" "}
            <a
              href="https://sonomacounty.ca.gov/Main%20County%20Site/Natural%20Resources/Agricultural%2C%20Weights%20%26%20Measures/Documents/Crop%20Reports/2015_crop_report.pdf"
              target="_blank"
              rel="noopener"
              className="underline"
            >
              4,000 egg farms
            </a>{" "}
            in the county in 1941. By 2015, however, that number had dropped
            to 157, with two large companies, Sunrise Farms LLC and Petaluma
            Farms, dominating the entire commercial industry. Sunrise Farms
            operates multiple CAFOs in the county, including one on Liberty
            Road in Petaluma that confines over 500,000 chickens.
          </p>
          <p>
            Roy Smith, operator of a small, diverse animal farm in Penngrove
            called Green Goose Farm, says, &quot;Since the 1950&apos;s,
            industrial poultry CAFOs have been able to outcompete local
            family farms by using cheap transport and supply chains, minimal
            amounts of poorly paid labor, and by externalizing environmental
            costs. Cheap food has come at the cost of our local economy and
            rural landscape. The first step in rebuilding our food system,
            and making family farms viable again, is to level the playing
            field. There is no playing field for small farmers as long as
            CAFOs occupy it, and they won&apos;t leave without an eviction
            notice.&quot;
          </p>
        </div>
      </Section>
    </>
  );
}

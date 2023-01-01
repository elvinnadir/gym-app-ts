import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import homeImg from '@/assets/images/homeImg.png'
import homeText from '@/assets/images/homeText.png'
import sponsor_01 from '@/assets/images/sponsor_01.png'
import sponsor_02 from '@/assets/images/sponsor_02.png'
import sponsor_03 from '@/assets/images/sponsor_03.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) =>
{
    const mediumScreen = useMediaQuery('(min-width:1060px')
    return <section
        id="home"
        className="gray-20 bg-gray-20
         py-10 md:h-full pb-0">
        {/* MAIN HEADER IMAGE */}
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            className="mx-auto w-5/6 items-center
         justify-center md:flex md:h-5/6">
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* headings */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="md:mt-20">

                    <div className="relative">
                        <div className="before:absolute before:-top-20
                         before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={homeText} alt="home text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                        Studios to get the Body Shapes That you Dream of.. Get Your Dream
                        Body Now.
                    </p>
                </motion.div>

                {/* ACTIONS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className="mt-8 flex items-center gap-8">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                    <AnchorLink className="text-sm font-bold
                     text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn more</p>
                    </AnchorLink>
                </motion.div>
            </div>

            {/* image */}
            <div className="flex basis-3/5 justify-center md:z-10
             md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-page-image" src={homeImg} />
            </div>
        </motion.div>

        {/* sponsors */}
        {
            mediumScreen && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={sponsor_01} alt="sponsor" />
                            <img src={sponsor_02} alt="sponsor" />
                            <img src={sponsor_03} alt="sponsor" />
                        </div>
                    </div>
                </div>
            )
        }
    </section >
}

export default Home
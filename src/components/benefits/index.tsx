import ActionButton from '@/shared/ActionButton';
import HText from '@/shared/HText';
import benefitImg from '@/assets/images/benefitImg.png'
import { BenefitType, SelectedPage } from '@/shared/types';
import
{
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid'
import { motion } from 'framer-motion';
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className='h-6 w-6' />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
    {
        icon: <UserGroupIcon className='h-6 w-6' />,
        title: "100`s of Diverse Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    },
    {
        icon: <AcademicCapIcon className='h-6 w-6' />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing."
    }
]

const container = {
    visible: {
        transition: { staggerChildren: 0.2 }
    },
    hidden: {},
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) =>
{
    return (
        <section
            id='benefits'
            className='mx-auto min-h-full w-5/6 py-10'
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    className='md:my-5 md:w-3/5'>
                    <HText>
                        more than just a gym.
                    </HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className='mt-5 items-center 
                justify-between gap-8 md:flex'>
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                {/* GRAPHICS &DESCRIPTIONS */}
                <div className='mt-16 items-center justify-between
                 gap-20 md:mt-28 md:flex'>
                    {/* graphic */}
                    <img src={benefitImg} alt="benefit" className='mx-auto' />

                    {/* DESCRIPTION */}
                    <div>
                        {/* title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20
                             before:-left-20 before:z-[1] before:content-waves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                >
                                    <HText>
                                        millions of happy members getting {" "}
                                        <span className='text-primary-500'>Fit</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>
                        {/* description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            <p className="my-5">
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                                Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                                enim mattis odio in risus nunc.
                            </p>
                        </motion.div>
                        {/* button */}
                        <div className='relative mt-60'>
                            <div className='before:absolute before:-bottom-20
                             before:right-40 before:content-sparkles'>
                                <ActionButton setSelectedPage={SelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
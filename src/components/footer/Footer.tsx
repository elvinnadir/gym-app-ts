import { SelectedPage } from '@/shared/types';
import Logo from '@/assets/images/Logo.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({ setSelectedPage }: Props) =>
{
    return (
        <footer className='bg-primary-100 py-16'>
            <div className='justify-center mx-auto w-5/6 gap-10 md:flex'>
                <div className='mt-16 basis-1/2 md:mt-0'>
                    <img src={Logo} alt="logo" />
                    <p className='my-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Omnis tenetur, tempore nulla inventore error
                        vitae quae cupiditate voluptatum aut exercitationem?
                        officiis eligendi vero officia eaque quasi.
                    </p>
                    <p>Evogym All Rights Reserved</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className="font-bold">Links</h4>
                    <p className="my-5">Consectetur adipisicing elit.</p>
                    <p className="my-5">Dolores error et modi quisquam.</p>
                    <p>A sed rem debitis illo dignissimos amet nihil.</p>
                </div>
                <div className='mt-16 basis-1/4 md:mt-0'>
                    <h4 className="font-bold">Contac tUs</h4>
                    <p className="my-5">Consectetur adipisicing elit.</p>
                    <p>(012)444-44-44</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
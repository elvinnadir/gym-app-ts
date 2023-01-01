

type Props = {
    children: React.ReactNode;
}

const HText = ({ children }: Props) =>
{
    return (
        <h1 className='basis-3/5 font-bold font-montserrat text-3xl uppercase'>
            {children}
        </h1>

    )
}

export default HText
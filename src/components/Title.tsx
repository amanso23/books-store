interface Props {
    title: string
    subtitle: string
}

const Title: React.FC<Props> = ({title, subtitle}) => {
    return (
        <h1 className="font-black uppercase text-5xl md:text-7xl text-center py-8 px-4">
            {title}
            <span className="text-yellow-500 block text-[30px] md:text-[44px]">{subtitle}</span>
        </h1>
    )
}

export default Title
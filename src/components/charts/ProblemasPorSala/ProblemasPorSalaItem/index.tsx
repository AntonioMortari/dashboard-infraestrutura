
interface IProblemasPorSalaItemProps {
    nomeSala: string;
    nomePredio: string;
    numeroProblemas: number
}

const ProblemasPorSalaItem = ({ nomePredio, nomeSala, numeroProblemas }: IProblemasPorSalaItemProps) => {
    return (
        <div className="flex justify-between w-[100%] items-center hover:bg-gray-50 duration-75 p-1 px-3 rounded-md">
            <div className="flex flex-col mb-5">
                <span className="font-semibold text-sm">{nomeSala}</span>
                <span className="text-gray-400 text-xs">{nomePredio}</span>
            </div>

            <span className="font-bold">{numeroProblemas}</span>
        </div>
    )
}

export { ProblemasPorSalaItem };
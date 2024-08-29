import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';

interface ICardNumeroProps {
    title: string;
    number: number;
}

const CardNumero = ({ title, number }: ICardNumeroProps) => {
    return (
        <Card className="w-[300px] h-[200px] hover:bg-gray-50 duration-100 flex flex-col justify-center cursor-pointer">
            <CardHeader>
                <CardTitle className="text-xl text-center">
                    {title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex justify-center self-center">
                <p className="text-6xl font-thin leading-none tracking-tight">{number}</p>
            </CardContent>
        </Card>
    )
}

export { CardNumero };
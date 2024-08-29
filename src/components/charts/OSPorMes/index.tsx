import { Bar, BarChart, CartesianGrid, LabelList, Rectangle, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { useEffect, useState } from "react";


const data2019 = [
    { mes: 'Janeiro', ordens: 15 },
    { mes: 'Fevereiro', ordens: 22 },
    { mes: 'Março', ordens: 18 },
    { mes: 'Abril', ordens: 30 },
    { mes: 'Maio', ordens: 25 },
    { mes: 'Junho', ordens: 20 },
    { mes: 'Julho', ordens: 28 },
    { mes: 'Agosto', ordens: 35 },
    { mes: 'Setembro', ordens: 27 },
    { mes: 'Outubro', ordens: 30 },
    { mes: 'Novembro', ordens: 23 },
    { mes: 'Dezembro', ordens: 32 }
];

const data2020 = [
    { mes: 'Janeiro', ordens: 17 },
    { mes: 'Fevereiro', ordens: 12 },
    { mes: 'Março', ordens: 22 },
    { mes: 'Abril', ordens: 8 },
    { mes: 'Maio', ordens: 12 },
    { mes: 'Junho', ordens: 23 },
    { mes: 'Julho', ordens: 23 },
    { mes: 'Agosto', ordens: 12 },
    { mes: 'Setembro', ordens: 14 },
    { mes: 'Outubro', ordens: 24 },
    { mes: 'Novembro', ordens: 36 },
    { mes: 'Dezembro', ordens: 2 }
]

const config = {
    ordens: {
        label: "Ordens de Serviço: ",
        color: "hsl(var(--chart-1))",
    }
} satisfies ChartConfig

const OSPorMes = () => {
    const [anoSelecionado, setAnoSelecionado] = useState<string>('2020');
    const [data, setData] = useState<{ mes: string, ordens: number }[]>();

    useEffect(() => {
        const atualizarDados = () => {
            setData(anoSelecionado === '2019' ? data2019 : data2020);
        }

        atualizarDados();
    }, [anoSelecionado])

    return (
        <Card className="w-[700px]">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>OS criadas por mês</CardTitle>

                <Select onValueChange={(value) => setAnoSelecionado(value)} value={anoSelecionado}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o ano" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="2020">2020</SelectItem>
                            <SelectItem value="2019">2019</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent>
                <ChartContainer config={config}>

                    <BarChart
                        accessibilityLayer
                        data={data}
                        className="fill-colorPrimary"
                        margin={{
                            top: 20,
                        }}
                    >

                        <CartesianGrid vertical={false} />

                        <XAxis
                            dataKey="mes"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Bar dataKey="ordens" fill="var(--color-desktop)" radius={8} activeBar={({ ...props }) => {
                                    return (
                                        <Rectangle
                                            {...props}
                                            fillOpacity={0.8}
                                            stroke={props.payload.fill}
                                            strokeDasharray={4}
                                            strokeDashoffset={4}
                                        />
                                    )
                                }}>
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>

                    </BarChart>

                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export { OSPorMes };
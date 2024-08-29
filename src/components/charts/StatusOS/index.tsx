import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../../ui/chart";
import { PieChart, Pie, Sector } from "recharts";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";


const data = [
    { status: "Encerrada", ordens: 275, fill: "red" },
    { status: "Atribuida", ordens: 200, fill: "blue" },
    { status: "Atualizada", ordens: 187, fill: "green" },
]

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const config = {
    ordens: {
        label: "OS",
    },
    Encerrada: {
        label: "Encerradas",
    },
    Atribuida: {
        label: "Atribuídas",
    },
    Atualizada: {
        label: 'Atualizadas'
    }
} satisfies ChartConfig


const StatusOS = () => {
    const [anoAtual] = useState<number>(new Date().getFullYear());
    const [mesSelecionado, setMesSelecionado] = useState<string>('all');


    return (
        <Card className="w-[450px]">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Status</CardTitle>

                    {mesSelecionado === 'all' && (
                        <CardDescription className="my-2">Janeiro - Dezembro de {anoAtual}</CardDescription>
                    )}
                </div>

                <Select onValueChange={(value) => setMesSelecionado(value)} value={mesSelecionado}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o mês" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">Todos os meses</SelectItem>
                            {meses.map((mes, index) => {
                                return (
                                    <SelectItem key={index} value={String(index + 1)}>{mes}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </CardHeader>

            <CardContent>
                <ChartContainer config={config} className="mx-auto aspect-square max-h-[300px]">
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />

                        <Pie
                            data={data}
                            dataKey="ordens"
                            label
                            name="status"
                            labelLine={false}
                            activeShape={({ outerRadius = 0, ...props }) => {
                                return (
                                    <Sector
                                        {...props}
                                        fillOpacity={0.8}
                                        outerRadius={outerRadius + 5}
                                        strokeDasharray={4}
                                        strokeDashoffset={4}
                                    />
                                )
                            }}
                        />

                        <ChartLegend
                            content={<ChartLegendContent nameKey="status" />}
                            className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                        />

                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export { StatusOS };
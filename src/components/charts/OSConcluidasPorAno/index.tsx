import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

const data = [
    { ano: 2019, ordens: 186, mobile: 80 },
    { ano: 2020, ordens: 305, mobile: 200 },
    { ano: 2021, ordens: 237, mobile: 120 },
    { ano: 2022, ordens: 73, mobile: 190 },
    { ano: 2023, ordens: 209, mobile: 130 },
    { ano: 2024, ordens: 214, mobile: 140 },
]


const config = {
    ordens: {
        label: "OS Concluídas: ",
    }
} satisfies ChartConfig

const OSConcluidas = () => {

    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>OS Concluídas por Ano</CardTitle>
                <CardDescription>2019 - Atual</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={config}>

                    <LineChart
                        accessibilityLayer
                        data={data}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >

                        <CartesianGrid vertical={false} />

                        <XAxis
                            dataKey="ano"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="ordens"
                            type="natural"
                            stroke="green"
                            strokeWidth={2}
                            dot={{
                                fill: "blue",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        />

                    </LineChart>

                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export { OSConcluidas };
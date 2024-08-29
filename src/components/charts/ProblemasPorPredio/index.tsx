import { BarChart, CartesianGrid, YAxis, XAxis, Bar, Rectangle, LabelList } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "../../ui/chart";

const data = [
    { predio: 'Prédio 1', problemas: 10 },
    { predio: 'Prédio 2', problemas: 30 },
    { predio: 'Prédio 3', problemas: 20 },
    { predio: 'Prédio 4', problemas: 28 },
]

const config = {
    predio: {
        label: "Prédio",
        color: "hsl(var(--chart-1))",
    },
    problemas: {
        label: "Problemas:",
        color: "hsl(var(--chart-2))",
    },
    label: {
        color: "hsl(var(--background))",
    },
} satisfies ChartConfig

const ProblemasPorPredio = () => {
    return(
        <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>
                        Problemas por Prédio
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <ChartContainer config={config}>

                        <BarChart
                            accessibilityLayer
                            data={data}
                            layout="vertical"
                            className="h-[100%]"
                        >

                            <CartesianGrid horizontal={false} />

                            <YAxis
                                dataKey="predio"
                                type="category"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                                hide
                            />

                            <XAxis dataKey="problemas" type="number" hide />

                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="line" />}
                            />

                            <Bar
                                dataKey="problemas"
                                layout="vertical"   
                                className="fill-colorSecondary"
                                radius={4}
                                onClick={(data) => console.log(data.tooltipPayload.className = 'fill-colorPrimary')}
                                activeBar={({ ...props }) => {
                                    return (
                                        <Rectangle
                                            {...props}
                                            fillOpacity={0.8}
                                            stroke={props.payload.fill}
                                            strokeDasharray={4}
                                            strokeDashoffset={4}
                                        />
                                    )
                                }}
                            >
                                <LabelList
                                    dataKey="predio"
                                    position="insideLeft"
                                    offset={8}
                                    className="fill-white"
                                    fontSize={12}
                                />
                                <LabelList
                                    dataKey="problemas"
                                    position="right"
                                    offset={8}
                                    className="fill-foreground"
                                    fontSize={15}
                                    fontWeight={600}
                                />
                            </Bar>

                        </BarChart>

                    </ChartContainer>
                </CardContent>
            </Card>
    );
}

export { ProblemasPorPredio};
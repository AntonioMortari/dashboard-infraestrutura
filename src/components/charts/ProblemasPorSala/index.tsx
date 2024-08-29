import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";
import { ProblemasPorSalaItem } from "./ProblemasPorSalaItem";

const predios = [
    { nome: 'Prédio 1' },
    { nome: 'Prédio 2' },
    { nome: 'Prédio 3' },
    { nome: 'Prédio 4' },
    { nome: 'Prédio 5' },
];

const ProblemasPorSala = () => {
    const [predioSelecionado, setPredioSelecionado] = useState<string>('all');

    return (
        <Card className="w-[550px]">
            <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>Ambientes com mais demandas</CardTitle>

                <Select onValueChange={(value) => setPredioSelecionado(value)} value={predioSelecionado}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Selecione o prédio" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">Todos os prédios</SelectItem>
                            {predios.map((predio, index) => {
                                return (
                                    <SelectItem value={String(index)}>{predio.nome}</SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>

            </CardHeader>

            <CardContent>

                {predios.map((predio, index) => {
                    return(
                        <ProblemasPorSalaItem
                            nomePredio={predio.nome}
                            nomeSala="Nome da Sala"
                            numeroProblemas={index + 14}
                        />
                    )
                })} 
            </CardContent>
        </Card>
    );
}

export { ProblemasPorSala };
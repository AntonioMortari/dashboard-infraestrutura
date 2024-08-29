import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Dialog, DialogHeader, DialogTrigger, DialogContent, DialogTitle } from '../../ui/dialog';
import { ScrollArea } from '../../ui/scroll-area';

interface ICardNumeroProps {
    title: string;
    number: number;
}

const CardNumero = ({ title, number }: ICardNumeroProps) => {
    return (
        <Dialog>
            <DialogTrigger>
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
            </DialogTrigger>

            <DialogContent className='w-[60%]'>
                <DialogHeader>
                    <DialogTitle>
                        Ordens de Serviço em aberto
                    </DialogTitle>

                    <div>
                        <ScrollArea className='min-h-[250px] max-h-[500px] mt-2'>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>Demanda - Ambiente - Prédio</AccordionTrigger>
                                <AccordionContent>
                                    descrição da demanda
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>Demanda - Ambiente - Prédio</AccordionTrigger>
                                <AccordionContent>
                                    descrição da demanda
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        </ScrollArea>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export { CardNumero };
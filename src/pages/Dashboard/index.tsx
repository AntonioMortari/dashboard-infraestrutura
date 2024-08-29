import { CardNumero } from "../../components/charts/CardNumero";
import { ProblemasPorPredio } from "../../components/charts/ProblemasPorPredio";
import { StatusOS } from "../../components/charts/StatusOS";
import { Header } from "../../components/Header";
import { ProblemasPorSala } from "../../components/charts/ProblemasPorSala";
import { OSConcluidas } from "../../components/charts/OSConcluidasPorAno";



const Dashboard = () => {
    return (
        <div>
            <Header />

            <main className="px-10">

                <div className="flex mb-4">
                    <CardNumero
                        number={10}
                        title="Ordens de serviço abertas"
                    />

                <ProblemasPorPredio />
                </div>

                <div className="flex justify-around">
                <ProblemasPorSala />
                
                <OSConcluidas />

                <StatusOS />

                </div>




            </main>

        </div>
    );
}

export { Dashboard };
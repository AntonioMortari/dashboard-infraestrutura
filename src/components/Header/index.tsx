import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { IoSettingsOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth } from "../../hooks/useAuth";
import { RxReload } from "react-icons/rx";

import logo from '../../assets/logo.png';


const Header = () => {
    const { logout } = useAuth();

    return (
        <header className="flex flex-row items-center justify-between p-2 px-[8%] border-[1px] border-b-gray-200 mb-5">

            <div className="flex items-center gap-3">
                <a href="https://www.feagri.unicamp.br/portal/" target="_blank" className="cursor-pointer">
                    <img src={logo} alt="Logo Feagri Unicamp" className="h-[80px] w-[80px]" />
                </a>

                <h1 className="text-2xl font-semibold">Dashboard Infraestrutura</h1>
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        <IoSettingsOutline size={20} />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-50">

                    <DropdownMenuLabel>Opções</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>

                        <DropdownMenuItem className="flex items-center">
                            <FiExternalLink className="mr-2 h-4 w-4" />
                            <a href="https://www.feagri.unicamp.br/intranet/#/login" target="_blank">Intranet</a>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center">
                            <RxReload className="mr-2 h-4 w-4" />
                            <span>Atualizar</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="flex items-center" onClick={logout}>
                            <CiLogout className="mr-2 h-4 w-4" />
                            <span>Sair</span>
                        </DropdownMenuItem>

                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}

export { Header };
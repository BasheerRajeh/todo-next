import { Logo } from "./ui/Logo";
import { Button } from "./ui/button";

const Header = () => {
    return (
        <header className="relative mx-auto flex h-16 max-w-4xl items-center justify-center">
            <div className="flex items-center gap-3 text-2xl font-bold select-none">
                <Logo />
                Todo
            </div>
            <Button type="button" className="absolute right-8 px-2 py-1">
                Logout
            </Button>
        </header>
    );
};

export default Header;

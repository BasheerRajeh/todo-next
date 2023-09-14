import { Loader } from "lucide-react";
import Image from "next/image";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { auth } from "@/lib/firebase/app";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import googleIcon from "@/public/icons8-google.svg";

interface AuthModalProps {
    open: boolean;
}

const AuthModal: React.FC<AuthModalProps> = ({ open }) => {
    const [signInWithGoogle, , loading] = useSignInWithGoogle(auth);

    return (
        <Dialog open={open}>
            <DialogContent className="flex flex-col items-center justify-center gap-4 py-12">
                <DialogTitle className="text-center text-2xl font-bold">
                    Sign in
                </DialogTitle>
                <Button
                    type="button"
                    onClick={() => signInWithGoogle()}
                    disabled={loading}
                    className="flex gap-2 items-center"
                >
                    {loading && (
                        <Loader size={16} className="mr-2 animate-spin" />
                    )}
                    <Image
                        src={googleIcon}
                        alt=""
                        draggable={false}
                        width={20}
                        height={20}
                    />
                    Sign in with Google
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default AuthModal;

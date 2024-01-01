import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
const Navbar = () => {
    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            <div className="ml-4 flex lg:ml-0">
                                <Link href={'/'} className="flex justify-center items-center gap-2">
                                    <Image src={'/logo.webp'} height={40} width={30} alt="logo"/>
                                    <p className="font-bold text-inherit  text-2xl md:text-3xl">Classcript</p>
                                </Link>
                            </div>
                            <div className="ml-auto flex items-center">
                                <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link className={buttonVariants({
                                                variant: 'ghost',
                                            })} href={'/'}>Sign in
                                    </Link>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true"/>
                                    <Link className={buttonVariants({
                                            variant: 'ghost',
                                        })} href={'/'}>Create account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>  
    );
};

export default Navbar;
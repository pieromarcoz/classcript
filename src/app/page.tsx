import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import { CheckCircle, InfinityIcon, BookCheckIcon} from "lucide-react";

const perks = [
    {
        name: 'No hay límites',
        Icon: InfinityIcon,
        description: 'Transcribe horas de video/audio sin limites. Elige el idioma de una lista de +50 lenguajes.',
    },
    {
        name: 'Acertada',
        Icon: CheckCircle,
        description: 'Nuestra IA esta especificamente entrenada, por lo que genera transcripciones 100% acertadas.',
    },
    {
        name: 'Resumen',
        Icon: BookCheckIcon,
        description: "Obtén un resumen de tu transcripción con los puntos claves, información y recordatorios más importantes.",
    }
]
export default function Home() {
    return (
      <>
          <MaxWidthWrapper>
            <div className={'py-20 mx-auto text-center flex flex-col items-center max-w-3xl'}>
                <h1 className={'text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'}>Resume horas de classes en{' '}
                    <span className={'text-[#21e3ab]'}>segundos</span>.
                </h1>
                <p className={'mt-6 text-lg max-w-prose text-muted-foreground'}>
                    Transcribe, Resume y Estudia como nunca con IA!
                </p>
                <div className={'flex flex-col sm:flex-row gap-4 mt-6'}>
                    <Link href='/' className={buttonVariants({
                        className: "!bg-[#21e3ab] hover:!bg-[#19cba9]"
                            })}>Ahorra tiempo ya
                    </Link>
                    <Button variant={'ghost'}>Registrate &rarr;</Button>
                </div>
            </div>
          </MaxWidthWrapper>
          <section className={'border-t border-gray-200 bg-gray-50'}>
            <MaxWidthWrapper className={'py-20'}>
                <div className={'grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'}>
                    {perks.map((perk) => (
                        <div key={perk.name} className={'text-center md:flex md:items-start md:text-left lg:block lg:text-center'}>
                            <div className={'md:flex-shrink-0 flex justify-center'}>
                                <div className={'h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-[#21e3ab]'}>
                                    {<perk.Icon className='w-1/3 h-1/3'/>}
                                </div>
                            </div>
                            <div className={'mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'}>
                                <h3 className='text-base font-medium text-gray-900'>
                                    {perk.name}
                                </h3>
                                <p className={'mt-3 text-sm text-muted-foreground'}>
                                    {perk.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
          </section>
      </>
    )
}

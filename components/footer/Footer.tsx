import {SVG} from "./"

const Footer = () => {
    return (
            <div className="w-full absolute bottom-0 left-0">
                <SVG />
                <div className="bg-[rgb(83,_145,_101)] px-auto pb-[10px]">
                    <p className="font-bold text-center text-lg mt-[-1px] sm:text-xl md:mt-[-25px] lg:mt-[-65px] md:text-2xl">PeduliCarbon</p>
                    <p className="text-center text-sm">© 2024 MABA MASIH PEMULA TEAM</p>
                </div>
            </div>
    )
}

export default Footer
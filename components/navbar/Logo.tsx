import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link
            href="/"
            className="
            w-[175px] 
            sm:w-[250px] 
            aspect-[580/102] 
            relative
        "
        >
            <Image
                src="/img/banner.png"
                alt="Logo"
                fill 
                priority
                sizes="(max-width: 768px) 175px,(max-width: 1200px) 250px"
            />
        </Link>
    )
}

export default Logo
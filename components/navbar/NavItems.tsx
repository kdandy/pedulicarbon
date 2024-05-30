"use client"

import { motion } from 'framer-motion'
import { LinkComponent, GithubButton } from '.'

interface NavItemsProps {
    className?: string;
    onClick?: () => void;
    isOpen: boolean;
}

const NavItems = ({ className, onClick, isOpen }: NavItemsProps) => {
    return (
        <motion.ul className={className} animate={{x: isOpen ? 0 : "-100vw"}}>
            <li onClick={onClick}>
                <LinkComponent name="Home" to="/" />
            </li>
            <li onClick={onClick}>
                <LinkComponent name="Tentang" to="/about" />
            </li>
            <li onClick={onClick}>
                <LinkComponent name="Calculator" to="/calculator/home" />
            </li>
        </motion.ul>
    )
}

export default NavItems
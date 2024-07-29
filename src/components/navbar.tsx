'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const _styles = `
  min-h-[5vh] lg:min-h-[10vh] w-full
  container flex mx-auto
  justify-around lg:justify-around items-center space-x-20 relative
`

const hoverStyles = "hover:text-color3 hover:font-semibold hover:underline cursor-pointer "
const stylesMobile = "text-white underline-offset-8 " + hoverStyles
const stylesDesktop = `text-color3 underline-offset-8 ` + hoverStyles

interface NavbarProps {
  items: { label: string, href: string }[]
}

export default function Navbar({ items }: NavbarProps) {
  const [ toggle, setToggle ] = React.useState(false)
  const router = useRouter()
  const route = usePathname()

  const toggleMenu = () => {
    setToggle(!toggle)
  }

  const handleClick = (href: string) => {
    setToggle(false)
    router.push(href)
  }

  return (
    route !== '/' &&
    <div className={_styles}>
      <div>Stories</div>
      <div className="lg:hidden">
        <FontAwesomeIcon icon={faBars} onClick={() => toggleMenu()}></FontAwesomeIcon>
        {
          toggle && 
          <div className="flex flex-col items-center bg-color2 absolute w-full left-0 top-[90px] space-y-1">
            {items.map((x) => 
              <p key={x.label} 
              className={stylesMobile + route === x.href ? "text-color1 font-semibold underline" : ""} 
              onClick={() => handleClick(x.href)}>
                { x.label }
              </p>)}
          </div>
        }
      </div>
      <div className="hidden lg:flex space-x-8">
        {items.map((x) => <p key={x.label} className={stylesDesktop + (route === x.href ? "text-color1 font-semibold underline" : "")} onClick={() => handleClick(x.href)}>{ x.label }</p>)}
      </div>
    </div>
  )
}

interface SectionProps {
  isContainer?: boolean
  children?: React.ReactNode
  className?: string
  bgColor?: string
}

const styles = `
  min-h-[35vh] 
  w-full mx-auto
  container flex
  px-10 py-10 lg:py-none
  `

export default function Section({ className, bgColor, children }: SectionProps) {
  return (
    <div className={bgColor ? bgColor : ''}>
      <div className={`${className ? className : ''} ${styles}`}>
        { children }
      </div>
    </div>
  )
}
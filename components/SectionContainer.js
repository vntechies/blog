export default function SectionContainer({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[84rem] px-4 sm:px-6 lg:px-10 ${className}`.trim()}>
      {children}
    </div>
  )
}

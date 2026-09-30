import SectionContainer from './SectionContainer'
import Footer from './Footer'
import BottomNav from './BottomNav'
import { useRouter } from 'next/router'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/'

  return (
    <>
      <SectionContainer className="app-shell">
        {/* Clears the fixed mobile BottomNav (h-16) plus the iOS home-bar inset */}
        <div className="relative flex min-h-screen flex-col pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
          <Header />
          <main className={`mb-auto flex-1 ${isHomePage ? '' : 'pb-4 pt-4 sm:pt-8'}`}>
            {children}
          </main>
          <Footer />
        </div>
      </SectionContainer>
      <BottomNav />
    </>
  )
}

export default LayoutWrapper

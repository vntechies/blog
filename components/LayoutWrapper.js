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
        <div className="relative flex min-h-screen flex-col pb-20 md:pb-0">
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

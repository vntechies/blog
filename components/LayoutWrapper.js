import SectionContainer from './SectionContainer'
import Footer from './Footer'

import BottomNav from './BottomNav'
import { useRouter } from 'next/router'
import Header from './Header'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <Header />
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
      <BottomNav />
    </>
  )
}

export default LayoutWrapper

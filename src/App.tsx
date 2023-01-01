import React, { useEffect } from 'react'
import Navbar from '@/components/navbar'
import { useState } from 'react'
import { SelectedPage } from '@/shared/types'
import Home from '@/components/home'
import Benefits from '@/components/benefits'
import OurClasses from '@/components/ourClasses/OurClasses'
import ContactUs from '@/components/contactUs/ContactUs'
import Footer from '@/components/footer/Footer'


const App = () =>
{
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopPage, setIsTopPage] = useState<boolean>(true)

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      if (window.scrollY === 0) {
        setIsTopPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopPage(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className='bg-slate-700 app'>
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App

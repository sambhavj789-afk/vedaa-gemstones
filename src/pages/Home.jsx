import Hero from '../components/Hero'
import StoneFinder from '../components/StoneFinder'
import Alis from '../components/Alis'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />

      <StoneFinder />

      <Alis />
    </>
  )
}

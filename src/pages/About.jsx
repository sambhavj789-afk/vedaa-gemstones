import Standard from '../components/Standard'
import Reach from '../components/Reach'
import Alis from '../components/Alis'
import usePageTitle from '../hooks/usePageTitle'

export default function About() {
  usePageTitle('About')
  return (
    <div className="pt-16 md:pt-[4.25rem]">
      <Standard />
      <Alis />
      <Reach />
    </div>
  )
}

import Enquiry from '../components/Enquiry'
import usePageTitle from '../hooks/usePageTitle'

export default function Contact() {
  usePageTitle('Enquire')
  return (
    <div className="pt-16 md:pt-[4.25rem]">
      <Enquiry />
    </div>
  )
}

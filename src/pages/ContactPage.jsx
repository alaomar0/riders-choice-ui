import logo from '../assets/images/logo.png'

function ContactPage() {
  return (
    <div id='contact-page' className="h-screen bg-[#FFE3C3] pl-mainl pt-24">
      <div className='flex'>
        <FormComponent />
        <div className='flex-grow flex justify-center'>
          <img src={logo} className='w-[700px]  object-contain' alt="" />
        </div>
      </div>
    </div>
  )
}
function FormComponent() {
  return (
    <div className='basis-96'>
      <h3 className='text-5xl font-bold mb-10'>Contact Us</h3>
      <form className="flex flex-col gap-2">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">Name</label>
          <input type="text" id="name"className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">Email</label>
          <input type="email" id="email" className="p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">Message</label>
          <textarea id="message" placeholder="Type your message..." className="resize-none p-2 border border-gray-300 rounded-md w-full h-44"></textarea>
        </div>
        <div className="flex items-center mb-8">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="font-light">I accept the terms and conditions</label>
        </div>
        <button type="submit" className="p-2 bg-[#B36205] text-white w-28 text-xl" >Submit</button>
      </form>
    </div>
  )
}

export default ContactPage
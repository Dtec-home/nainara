import React from 'react'

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4">
            <p>Ahmed Road, off. Murang&apos;a Road</p>
            <p>Email: info@nainaraevents.com</p>
            <p>Phone: +254 725 466 043</p>
            <div className="flex justify-center space-x-6 mt-8">
              <a href="https://www.facebook.com/NainaraEvents" className="hover:text-purple-200">FB: Nainara Events</a>
              <a href="https://www.instagram.com/nainaraevents" className="hover:text-purple-200">IG: Nainara Events</a>
              <a href="https://www.tiktok.com/@nainaraevents" className="hover:text-purple-200">TikTok: Nainara Events</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
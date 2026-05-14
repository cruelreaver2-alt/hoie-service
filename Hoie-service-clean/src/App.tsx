import { useState } from 'react'
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Fan, Home, Droplets, Wind, DoorOpen, Warehouse, Award, CheckCircle } from 'lucide-react'
import { Logo } from './components/Logo'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const services = [
    {
      icon: Fan,
      title: 'Varmepumper',
      description: 'Vedlikehold, service og installasjon av varmepumper for optimal energieffektivitet.',
    },
    {
      icon: Home,
      title: 'Etterisolering',
      description: 'Profesjonell isolering av vegger, tak og gulv for bedre innemiljø og lavere strømkostnader.',
    },
    {
      icon: Wind,
      title: 'Vindtetting',
      description: 'Effektiv tetting mot kulde, trekk og fuktighet for et varmere hjem.',
    },
    {
      icon: Home,
      title: 'Kledning',
      description: 'Ny fasadekledning som gir huset et moderne utseende og bedre beskyttelse.',
    },
    {
      icon: DoorOpen,
      title: 'Vinduer og Dører',
      description: 'Montering av energieffektive vinduer og dører som reduserer varmetap.',
    },
    {
      icon: Warehouse,
      title: 'Garasjeporter og Terrasser',
      description: 'Installasjon og vedlikehold av garasjeporter samt bygging av flotte terrasser.',
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = `Forespørsel om ${formData.service || 'tjeneste'} - ${formData.name}`
    const body = `Navn: ${formData.name}%0D%0ATelefon: ${formData.phone}%0D%0AE-post: ${formData.email}%0D%0ATjeneste: ${formData.service}%0D%0A%0D%0AMelding:%0D%0A${formData.message}`

    window.location.href = `mailto:kenneth@hoie-service.no?subject=${subject}&body=${body}`

    setFormSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0E27]/95 backdrop-blur-sm z-50 border-b border-[#00D9FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo className="h-20 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hjem')} className="text-white hover:text-[#00D9FF] transition-colors">
                Hjem
              </button>
              <button onClick={() => scrollToSection('tjenester')} className="text-white hover:text-[#00D9FF] transition-colors">
                Tjenester
              </button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-[#00D9FF] transition-colors">
                Om oss
              </button>
              <button onClick={() => scrollToSection('kontakt')} className="text-white hover:text-[#00D9FF] transition-colors">
                Kontakt
              </button>
              <a
                href="tel:48118300"
                className="bg-[#00D9FF] text-[#0A0E27] px-6 py-3 rounded-lg font-semibold hover:bg-[#00A8CC] transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                481 18 300
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1A1F3A] border-t border-[#00D9FF]/20">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => scrollToSection('hjem')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#00D9FF]/10 rounded-lg transition-colors"
              >
                Hjem
              </button>
              <button
                onClick={() => scrollToSection('tjenester')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#00D9FF]/10 rounded-lg transition-colors"
              >
                Tjenester
              </button>
              <button
                onClick={() => scrollToSection('om-oss')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#00D9FF]/10 rounded-lg transition-colors"
              >
                Om oss
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#00D9FF]/10 rounded-lg transition-colors"
              >
                Kontakt
              </button>
              <a
                href="tel:48118300"
                className="block w-full text-center bg-[#00D9FF] text-[#0A0E27] px-4 py-3 rounded-lg font-semibold hover:bg-[#00A8CC] transition-colors"
              >
                Ring 481 18 300
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ditt innemiljø er <span className="text-[#00D9FF]">vårt fokus</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Profesjonell energioppgradering av boliger i Sveio og omegn. Vi hjelper deg med å spare energi og skape et bedre innemiljø.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('kontakt')}
                className="bg-[#00D9FF] text-[#0A0E27] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A8CC] transition-all hover:scale-105 flex items-center gap-2"
              >
                Be om gratis befaring
                <ChevronRight className="w-5 h-5" />
              </button>
              <a
                href="tel:48118300"
                className="border-2 border-[#00D9FF] text-[#00D9FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00D9FF] hover:text-[#0A0E27] transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Ring oss i dag
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Våre <span className="text-[#00D9FF]">Tjenester</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr profesjonelle løsninger for energioppgradering og vedlikehold av din bolig
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-[#00D9FF]/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-[#00D9FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Om <span className="text-[#00D9FF]">Høie Service AS</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Vi er et erfaren håndverksbedrift som spesialiserer oss på energioppgradering av boliger.
                Med fokus på kvalitet, miljø og kundetilfredshet, hjelper vi huseiere med å redusere energiforbruket
                og forbedre innemiljøet.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Fra isolering og vinduer til varmepumper og fasadekledning - vi leverer komplette løsninger
                som gir deg et varmere, tørrere og mer energieffektivt hjem.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Erfarne fagfolk</h4>
                    <p className="text-sm text-gray-600">Kompetente håndverkere med lang erfaring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Kvalitetsgaranti</h4>
                    <p className="text-sm text-gray-600">Vi står for arbeidet vi utfører</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Lokalt firma</h4>
                    <p className="text-sm text-gray-600">Rask respons i Sveio og omegn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00D9FF] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Miljøfokus</h4>
                    <p className="text-sm text-gray-600">Bidrar til grønnere boliger</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00D9FF]/10 to-[#FF6B9D]/10 rounded-2xl p-12 lg:p-16">
              <div className="bg-white rounded-xl p-8 shadow-xl">
                <Award className="w-16 h-16 text-[#00D9FF] mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Profesjonell energioppgradering
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vi hjelper deg med å gjøre boligen mer energieffektiv, redusere strømregningen
                  og øke verdien på eiendommen din.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#00D9FF]"></div>
                    Gratis befaring og tilbud
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#00D9FF]"></div>
                    Skreddersydde løsninger
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-[#00D9FF]"></div>
                    Konkurransedyktige priser
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 px-4 bg-gradient-to-br from-[#0A0E27] via-[#1A1F3A] to-[#0A0E27]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ta <span className="text-[#00D9FF]">Kontakt</span>
            </h2>
            <p className="text-xl text-gray-200">
              Vi gir deg et gratis og uforpliktende tilbud på din energioppgradering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Kontaktinformasjon</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D9FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">Telefon</p>
                      <a href="tel:48118300" className="text-white text-xl font-semibold hover:text-[#00D9FF] transition-colors">
                        481 18 300
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D9FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">E-post</p>
                      <a href="mailto:kenneth@hoie-service.no" className="text-white text-xl font-semibold hover:text-[#00D9FF] transition-colors break-all">
                        kenneth@hoie-service.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#00D9FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#00D9FF]" />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-1">Adresse</p>
                      <p className="text-white text-xl font-semibold">
                        Flatåsen 2<br />
                        5550 Sveio
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#00D9FF]/10 rounded-xl p-6 border border-[#00D9FF]/20">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#00D9FF]" />
                  Gratis befaring
                </h4>
                <p className="text-gray-300">
                  Vi kommer hjem til deg for en gratis og uforpliktende befaring.
                  Ta kontakt i dag for å avtale tidspunkt som passer deg!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Send oss en forespørsel
              </h3>
              <p className="text-gray-700 mb-8">
                Fyll ut skjemaet under, så kontakter vi deg for gratis befaring og tilbud.
              </p>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-900 mb-2">Takk for din forespørsel!</h4>
                  <p className="text-green-700">Vi kontakter deg så snart som mulig.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Navn *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                      placeholder="Ditt fulle navn"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                        placeholder="481 18 300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        E-post *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                        placeholder="din@epost.no"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Hvilken tjeneste er du interessert i? *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent"
                    >
                      <option value="">Velg tjeneste</option>
                      <option value="Varmepumper">Varmepumper</option>
                      <option value="Etterisolering">Etterisolering</option>
                      <option value="Vindtetting">Vindtetting</option>
                      <option value="Kledning">Kledning</option>
                      <option value="Vinduer og Dører">Vinduer og Dører</option>
                      <option value="Garasjeporter og Terrasser">Garasjeporter og Terrasser</option>
                      <option value="Annet">Annet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Melding
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00D9FF] focus:border-transparent resize-none"
                      placeholder="Fortell oss litt om prosjektet ditt..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00D9FF] text-[#0A0E27] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00A8CC] transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Send forespørsel
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Ved å sende inn dette skjemaet godtar du at vi kontakter deg angående din forespørsel.
                  </p>
                </form>
              )}

              <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Eller ring oss direkte:</strong>
                </p>
                <a
                  href="tel:48118300"
                  className="inline-flex items-center gap-2 text-[#00D9FF] font-semibold hover:text-[#00A8CC] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  481 18 300
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F3A] text-white py-12 px-4 border-t border-[#00D9FF]/20">
        <div className="max-w-7xl mx-auto text-center">
          <Logo className="h-24 w-auto mx-auto mb-6" />
          <p className="text-gray-300 mb-4">
            Ditt innemiljø er vårt fokus
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Høie Service AS. Alle rettigheter reservert.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
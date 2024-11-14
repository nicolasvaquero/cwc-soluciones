'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Zap, Phone, Mail, MapPin, Clock, CheckCircle, Star, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'

export function LandingPageComponent() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { src: "https://i.imgur.com/INXejyY.jpg", alt: "Instalación eléctrica residencial" },
    { src: "https://i.imgur.com/KmXof4R.jpg", alt: "Reparación de panel eléctrico" },
    { src: "https://i.imgur.com/Mc08gat.jpg", alt: "Iluminación comercial" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span className="text-xl font-bold">CWC Soluciones Electricas</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#servicios" className="hover:underline">Servicios</a></li>
              <li><a href="#galeria" className="hover:underline">Galería</a></li>
              <li><a href="#nosotros" className="hover:underline">Nosotros</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Soluciones Eléctricas Profesionales</h1>
            <p className="text-xl mb-8">Expertos en instalaciones y reparaciones eléctricas para su hogar y negocio</p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </section>

        <section id="servicios" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Instalaciones Eléctricas",
                "Reparaciones",
                "Mantenimiento",
                "Iluminación",
                "Sistemas de Seguridad",
                "Instalación de Aire Acondicionado"
              ].map((servicio, index) => (
                <div key={index} className="bg-muted p-6 rounded-lg flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>{servicio}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Galería de Proyectos</h2>
            <div className="relative">
              <div className="overflow-hidden h-[400px]">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-[400px] object-contain bg-black/5"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-center mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-3 w-3 mx-1 rounded-full ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
            <p className="text-center max-w-2xl mx-auto">
              CWC Soluciones Electrical es una empresa líder en servicios eléctricos con más de 10 años de experiencia.
              Nuestro equipo de electricistas certificados está comprometido con la excelencia y la seguridad en cada proyecto.
            </p>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Recomendaciones de Clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "María González",
                  comment: "Excelente servicio. Resolvieron nuestro problema eléctrico rápidamente.",
                  rating: 5
                },
                {
                  name: "Juan Pérez",
                  comment: "Muy profesionales y puntuales. Altamente recomendados.",
                  rating: 5
                },
                {
                  name: "Ana Rodríguez",
                  comment: "Hicieron un trabajo impecable en la instalación eléctrica de mi negocio.",
                  rating: 5
                }
              ].map((recommendation, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-2">
                    {[...Array(recommendation.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mb-2">"{recommendation.comment}"</p>
                  <p className="font-semibold">{recommendation.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Síguenos en Instagram</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <a 
                  href="https://instagram.com/cwc.solucioneselectricas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xl hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>@cwc.solucioneselectricas</span>
                </a>
                <p className="text-center text-muted-foreground">
                  Síguenos para ver nuestros últimos proyectos y novedades
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+1 234 567 8900</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@cwcsoluciones.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Bernal, Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Lunes a Viernes: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} CWC Soluciones Electrical. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Menu } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`bg-white shadow-sm border-b ${headerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BrandLogoLeft />
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link 
                to="/collections" 
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Colecciones
              </Link>
              <Link 
                to="/ofertas" 
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Ofertas
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Page Title */}
        {pageTitle && (
          <div className="py-6 border-t">
            <h1 className="text-3xl font-bold text-foreground">
              {pageTitle}
            </h1>
          </div>
        )}
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-black text-white py-16 ${footerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <BrandLogoLeft />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Tu tienda de confianza para encontrar los mejores zapatos. 
              Calidad premium, estilo único y comodidad garantizada.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <Link 
                to="/" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link 
                to="/collections" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Colecciones
              </Link>
              <Link 
                to="/ofertas" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Ofertas
              </Link>
              <Link 
                to="/blog" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Atención al Cliente</h3>
            <div className="space-y-2">
              <Link 
                to="/contacto" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </Link>
              <Link 
                to="/envios" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Envíos
              </Link>
              <Link 
                to="/devoluciones" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Devoluciones
              </Link>
              <Link 
                to="/tallas" 
                className="block text-gray-300 hover:text-white transition-colors"
              >
                Guía de Tallas
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 ShoePro Store. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden hover-lift group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg font-medium">
              {collection.name}
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-4 left-4">
              <span className="bg-accent text-black text-xs px-3 py-1 rounded-full font-bold">
                Destacado
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-black font-bold text-xl mb-2 group-hover:text-accent transition-colors">
              {collection.name}
            </h3>
            
            {collection.description && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {collection.description}
              </p>
            )}
          </div>
          
          <Button 
            variant="outline" 
            className="w-full text-black border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
            onClick={() => onViewProducts(collection.id)}
          >
            <span>Ver Productos</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
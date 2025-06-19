import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, Download, Mail } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-red-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <div className="w-4 h-1 bg-white absolute"></div>
                <div className="w-1 h-4 bg-white absolute"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">Interne Médecine Suisse</span>
            </div>
          </div>
        </div>
      </header>

      {/* Success Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Paiement réussi !
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Félicitations ! Votre achat a été confirmé. Vous allez recevoir le guide par email dans quelques minutes.
            </p>

            <Card className="max-w-2xl mx-auto mb-8 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <FileText className="h-16 w-16 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Guide Complet - Devenir Interne de Médecine en Suisse
                </h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center justify-center">
                    <Download className="h-4 w-4 mr-2" />
                    Format PDF
                  </div>
                  <div className="flex items-center justify-center">
                    <FileText className="h-4 w-4 mr-2" />
                    +40 pages
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accès immédiat
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-yellow-800">Email en cours d&apos;envoi</p>
                      <p className="text-sm text-yellow-700">
                        Vérifiez votre boîte mail (y compris les spams). Si vous ne recevez rien dans 10 minutes, 
                        contactez-nous à contact@internemedecinesuisse.ch
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Link href="/">
                <Button variant="outline" size="lg" className="mr-4">
                  Retour à l&apos;accueil
                </Button>
              </Link>
              <p className="text-sm text-gray-500">
                Une question ? Contactez-nous à contact@internemedecinesuisse.ch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Prochaines étapes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Lisez le guide</h3>
                  <p className="text-gray-600">
                    Prenez le temps de parcourir l&apos;ensemble du guide pour une vue complète du processus
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Planifiez vos démarches</h3>
                  <p className="text-gray-600">
                    Utilisez le planning fourni pour organiser efficacement toutes vos démarches
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Passez à l&apos;action</h3>
                  <p className="text-gray-600">
                    Commencez vos démarches en suivant les instructions détaillées du guide
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
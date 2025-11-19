import { Calendar, Clock, MapPin, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Ephemeris {
  date: string
  title: string
  description: string
  category: string
  year?: number
  constellation?: string
  magnitude?: number
}

interface EphemerisCardProps {
  ephemeris: Ephemeris
}

export function EphemerisCard({ ephemeris }: EphemerisCardProps) {
  return (
    <Card className="max-w-2xl mx-auto bg-slate-900/40 border-slate-700/30 backdrop-blur-xl shadow-2xl shadow-slate-900/50 hover:bg-slate-900/50 transition-all duration-700 hover:shadow-slate-800/60 hover:border-slate-600/40">
      <CardContent className="p-8 relative">
        {/* Subtle inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-transparent to-slate-700/10 rounded-lg pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-5 h-5 text-amber-400 animate-pulse" />
            <span className="text-amber-400 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              {ephemeris.category}
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-light text-slate-100 mb-6 leading-relaxed bg-gradient-to-r from-slate-100 via-slate-50 to-slate-200 bg-clip-text text-transparent">
            {ephemeris.title}
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">{ephemeris.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-slate-700/30 bg-gradient-to-r from-transparent via-slate-800/20 to-transparent">
            {ephemeris.year && (
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Año {ephemeris.year}</span>
              </div>
            )}

            {ephemeris.constellation && (
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{ephemeris.constellation}</span>
              </div>
            )}

            {ephemeris.magnitude && (
              <div className="flex items-center gap-3 text-slate-400 hover:text-slate-300 transition-colors duration-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Mag. {ephemeris.magnitude}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

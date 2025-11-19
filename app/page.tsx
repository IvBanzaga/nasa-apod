"use client";
import { StarField } from "@/components/star-field";
import { useEffect, useState } from "react";


export default function Home() {
  const today = new Date();
  const fechaInicio = today.toISOString().slice(0, 10);
  const [apodActual, setApodActual] = useState<any>(null);
  const [apodActualTitleEs, setApodActualTitleEs] = useState("");
  const [apodActualDescEs, setApodActualDescEs] = useState("");

  useEffect(() => {
    async function fetchAPOD() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL_API}&date=${fechaInicio}`);
      const data = await res.json();
      setApodActual(data);
      // Traducir usando Google Translate web scraping (no oficial)
      translateGoogle(data.title, setApodActualTitleEs);
      translateGoogle(data.explanation, setApodActualDescEs);
    }
    fetchAPOD();
  }, [fechaInicio]);

  // Traducción usando Google Translate web scraping (no oficial)
  function translateGoogle(text: string, setTextEs: (t: string) => void) {
    if (!text) return setTextEs("");
    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=es&dt=t&q=${encodeURIComponent(text)}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data[0] && Array.isArray(data[0]) && data[0][0]) {
          setTextEs(data[0][0][0]);
        } else {
          setTextEs(text);
        }
      })
      .catch(() => setTextEs(text));
  }

  // ...existing code...
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-hidden">
      <StarField />
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-slate-100 mb-2 tracking-wide bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent animate-gradient">
            AstroTenerife
          </h1>
          <p className="text-slate-400 text-lg font-light tracking-wider">Imagen Astronómica Diaria</p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-4 animate-pulse" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Mostrar contenido del día actual aunque no sea imagen */}
          {apodActual && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl mb-8">
              {/* Card imagen si existe */}
              {apodActual.url && apodActual.media_type === "image" && (
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-4 flex items-center justify-center w-full md:w-1/2">
                  <img src={apodActual.url} alt={apodActualTitleEs || apodActual?.title} className="rounded-lg shadow-lg w-full object-cover" />
                </div>
              )}
              {/* Card video si existe */}
              {apodActual.url && apodActual.media_type === "video" && (
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-4 flex items-center justify-center w-full md:w-1/2">
                  {apodActual.url.endsWith('.mp4') ? (
                    <video controls className="rounded-lg shadow-lg w-full aspect-video">
                      <source src={apodActual.url} type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
                  ) : (
                    <iframe
                      src={apodActual.url}
                      title={apodActualTitleEs || apodActual?.title}
                      className="rounded-lg shadow-lg w-full aspect-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              )}
              {/* Card miniatura si existe */}
              {apodActual.thumbnail_url && (
                <div className="bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-4 flex items-center justify-center w-full md:w-1/2">
                  <img src={apodActual.thumbnail_url} alt="Miniatura del video APOD" className="rounded-lg shadow-lg w-full object-cover" />
                </div>
              )}
              {/* Card título, descripción y fecha */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl p-6 flex flex-col items-center w-full md:w-1/2">
                <span className="text-xs text-slate-400 mb-2">{apodActual?.date}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-2 text-center drop-shadow-lg bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  {apodActualTitleEs && apodActualTitleEs !== apodActual?.title ? apodActualTitleEs : (apodActual?.title || "Sin título")}
                </h2>
                <p className="text-base md:text-lg text-slate-200 mb-2 max-w-xl text-center font-light leading-relaxed bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {apodActualDescEs && apodActualDescEs !== apodActual?.explanation ? apodActualDescEs : (apodActual?.explanation || "Sin descripción")}
                  <br />
                  <a
                    href="https://apod.nasa.gov/apod/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
                  >
                    Ir al origen
                  </a>
                </p>
                {(!apodActualTitleEs || apodActualTitleEs === apodActual?.title) && (!apodActualDescEs || apodActualDescEs === apodActual?.explanation) && (
                  <span className="text-xs text-red-400 mt-2">No se pudo traducir automáticamente. El texto se muestra en inglés.</span>
                )}
                {/* Enlace a la página oficial si no hay imagen, video ni miniatura */}
                {!apodActual.url && !apodActual.thumbnail_url && (
                  <a
                    href={`https://apod.nasa.gov/apod/ap${apodActual.date.replace(/-/g, "")}.html`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline mt-4"
                  >
                    Ver contenido multimedia en la página oficial de APOD
                  </a>
                )}
              </div>
            </div>
          )}
         
        </div>

        <footer className="text-center text-slate-500 text-sm mt-8">
          <p className="mb-2">
            {today.toLocaleDateString("es-ES", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
            <span>Una nueva imagen astronómica se mostrará cada día</span>
            <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </footer>
      </div>
    </main>
  )
}

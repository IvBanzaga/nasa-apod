# 🌌 AstroTenerife
```sh
AstroTenerife es una aplicación web que muestra la Imagen Astronómica del Día (APOD) 
utilizando la API oficial de la NASA: [https://apod.nasa.gov/apod/](https://apod.nasa.gov/apod/).
```

## 🌌 ¿Qué es APOD?

```sh
APOD (Astronomy Picture of the Day) es un proyecto de la NASA 
que publica diariamente una imagen o video relacionado con la astronomía, 
acompañada de una explicación escrita por astrónomos profesionales.
```

## 🚀 ¿Qué es la API de APOD?

```sh
La API de APOD permite acceder programáticamente a la imagen, 
vídeo y explicación astronómica del día. Proporciona datos en formato JSON 
y es gratuita para uso personal y educativo.

- **🌐 Endpoint principal:**  
  `https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY`

- **🔑 Parámetros útiles:**
  - `date`: Fecha en formato `YYYY-MM-DD` para obtener la imagen de un día específico.
  - `api_key`: Tu clave personal de la NASA
	(puedes obtenerla gratis en [https://api.nasa.gov/](https://api.nasa.gov/)).
  - Ejemplo de uso:
    ```
    https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY&date=2023-01-01
    ```

- **📄 Respuesta típica:**
  ```json
  {
    "date": "2023-01-01",
    "explanation": "Texto explicativo...",
    "media_type": "image",
    "service_version": "v1",
    "title": "Título de la imagen",
    "url": "https://apod.nasa.gov/apod/image/2301/imagen.jpg"
  }
  ```
	
## ✨ Características
  ```sh
* 🌟 Visualización diaria de la imagen/vídeo astronómico.
* 🌍 Traducción automática del título y la descripción al español.
* 📱 Diseño moderno y responsivo.
* 🔗 Botón para acceder al origen oficial de la imagen.
* 🖼️ Soporte para imágenes, vídeos y miniaturas.
  ```

## 🛠️ Uso

1. 🌀 Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd astronomy-ephemeris
   ```

2. 📦 Instala las dependencias:
   ```bash
   pnpm install
   ```

3. 🔧 Configura la variable de entorno en `.env`:
   ```bash
   NEXT_PUBLIC_URL_API_KEY=https://api.nasa.gov/planetary/apod?api_key=TU_API_KEY
   ```
   Puedes obtener tu API Key gratuita en [https://api.nasa.gov/](https://api.nasa.gov/).

4. ▶️ Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

5. 🌐 Accede a la aplicación en [http://localhost:3000](http://localhost:3000).

## 📂 Estructura del proyecto
```bash
- `app/`: 🌟 Páginas principales y lógica de presentación.
- `components/`: 🧩 Componentes reutilizables de la interfaz.
- `lib/`: 🛠️ Utilidades y lógica de acceso a datos.
- `public/`: 🌍 Recursos estáticos.
```
## 📜 Créditos
```bash
- 📸 Imágenes y datos: [NASA APOD](https://apod.nasa.gov/apod/)
- 🌍 Traducción automática: Google Translate API pública
```

## ⚖️ Licencia
```bash
Este proyecto es de uso libre para fines educativos y personales.
```
## 🌍 Despliegue en Vercel
```bash
Este proyecto está preparado para desplegarse fácilmente en Vercel.
```
### 📚 Librería necesaria
```bash
No necesitas instalar ninguna librería adicional para Next.js en Vercel, 
ya que Vercel soporta Next.js de forma nativa.
```
### ⚙️ Configuración recomendada

1. **🔧 Variables de entorno:**  
```bash
   En el panel de Vercel, añade la variable `NEXT_PUBLIC_URL_API_KEY` 
	 con el mismo valor que tienes en tu `.env`.
```
2. **📝 Archivo de configuración opcional:**  
```bash
   Si necesitas personalizar el comportamiento, puedes crear un archivo
	 `vercel.json` en la raíz del proyecto. Ejemplo básico:
   ```json
   {
     "builds": [
       { "src": "next.config.mjs", "use": "@vercel/next" }
     ]
   }
   ```


3. **🏗️ Comando de build:**  
```bash
   Vercel ejecuta automáticamente `pnpm build` o `npm run build` 
	 según el gestor de paquetes detectado. ```
```

4. **📋 Pasos previos:**  
```bash
   - Sube tu código a GitHub, GitLab o Bitbucket.
   - Conecta el repositorio en Vercel y selecciona el proyecto.
   - Configura las variables de entorno antes de desplegar.

Más información: 
[Documentación oficial Vercel + Next.js]
(https://vercel.com/docs/frameworks/nextjs/overview)
```

### 🔐 Variables de entorno en Vercel

```bash
Por seguridad, el archivo `.env` nunca se debe subir al repositorio.  
Para usar variables de entorno en Vercel:

1. Ve al panel de tu proyecto en Vercel.
2. Entra en **Settings > Environment Variables**.
3. Añade la variable `NEXT_PUBLIC_URL_API_KEY` y su valor.
4. Guarda y vuelve a desplegar el proyecto.

Así, Vercel inyecta las variables de entorno de forma segura durante el build y en producción.


## Autor

### 👨‍💻 **Iván Bazaga**

🚀 Desarrollador Frontend especializado en Angular y ecosistemas 

Estudiante Intermedio con pasión por crear aplicaciones web modernas y eficientes. Este proyecto representa la aplicación práctica de conceptos avanzados.

### ☎️ Información de Contacto

| Plataforma | Enlace | Descripción |
|------------|--------|-------------|
| GitHub | [@IvBanzaga](https://github.com/IvBanzaga/) | Repositorios y proyectos de código |
| LinkedIn | [Iván Bazaga](https://www.linkedin.com/in/ivan-bazaga-gonzalez/) | Perfil profesional y networking |
| Email | [ivan.cpweb@gmail.com](mailto:ivan.cpweb@gmail.com) | Contacto directo para oportunidades |
| Portfolio | [Ivandevs.netlify.app](https://ivandevs.netlify.app/) | Showcase de proyectos y skills |
| Proyecto | [Creamiproyecto.com](https://creamiproyecto.com/) | Showcase de proyectos y skills |

### 🧰 Stack Tecnológico de Especialización

```
Frontend: Java SprinBoot • Astro • Angular 20 • TypeScript • RxJS • Bootstrap 5 • HTML5 • CSS3
Tools: Angular CLI • Git • VS Code • Prettier • Jasmine • Karma
Learning: NgRx • PWA • Node.js • Express • Mysql •  Oracle
```

---
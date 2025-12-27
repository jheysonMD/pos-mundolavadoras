# 📦 Guía para subir POS Mundolavadoras a Hostinger

## 📁 Archivos que debes subir

Necesitas subir estos archivos a tu hosting de Hostinger:

```
├── index.html (el archivo principal)
├── manifest.json (configuración PWA)
├── service-worker.js (para funcionamiento offline)
├── imagenes/
│   └── logo.png
```

**NO subas:**
- `.git/` (carpeta de git)
- `.gitignore`
- `index_backup.html`
- `posrecibo.html` (este archivo está desactualizado)
- `INSTRUCCIONES_HOSTINGER.md`

---

## 🚀 PASO 1: Acceder a Hostinger

1. Ve a https://hostinger.com
2. Inicia sesión con tu cuenta
3. Ve al panel de control (hPanel)
4. Selecciona tu hosting

---

## 📂 PASO 2: Subir archivos vía File Manager

### Opción A: File Manager de Hostinger (MÁS FÁCIL)

1. En el panel de Hostinger, busca **"Administrador de archivos"** o **"File Manager"**
2. Haz clic para abrirlo
3. Navega a la carpeta **"public_html"** (esta es la carpeta raíz de tu sitio web)
4. Borra todos los archivos que haya dentro (generalmente hay un index.html de ejemplo)
5. Sube los archivos:
   - Haz clic en **"Subir"** o **"Upload"**
   - Selecciona: `index.html`, `manifest.json`, `service-worker.js`
   - Espera a que se suban
6. Crea la carpeta **"imagenes"**:
   - Haz clic en **"Nueva carpeta"** o **"New Folder"**
   - Nómbrala: `imagenes`
   - Entra a esa carpeta
   - Sube el archivo `logo.png`

### Opción B: FileZilla (FTP) - Más rápido para muchos archivos

1. Descarga FileZilla desde: https://filezilla-project.org/
2. En Hostinger, ve a **"FTP Accounts"** o **"Cuentas FTP"**
3. Copia los datos:
   - Host/Servidor
   - Usuario
   - Contraseña
   - Puerto (21)
4. Abre FileZilla y conecta con esos datos
5. En el lado derecho, navega a **"public_html"**
6. Arrastra los archivos desde tu computadora (lado izquierdo) a la carpeta public_html

---

## 🌐 PASO 3: Dominios

### Dominio incluido en Hostinger

Si compraste hosting en Hostinger, probablemente incluye un **dominio gratis por 1 año**. 

Para activarlo:
1. Ve a **"Dominios"** en el panel de Hostinger
2. Busca la opción **"Reclamar dominio gratuito"**
3. Escribe el dominio que quieras (ejemplo: `posmundolavadoras.com`)
4. Si está disponible, regístralo gratis

### Dominios gratuitos alternativos

Si no tienes dominio incluido, puedes usar:

**1. Subdominio de Hostinger (GRATIS):**
- Hostinger te da un subdominio gratis como: `tuusuario.hostingersite.com`
- Lo encuentras en: Panel > Dominios > "Preview"

**2. Freenom (dominios .tk, .ml, .ga, .cf gratis):**
- Ve a: https://www.freenom.com
- Busca un dominio disponible
- Regístralo gratis (hasta 12 meses)
- En Hostinger, ve a Dominios > "Agregar dominio existente"
- Sigue las instrucciones para apuntarlo a tu hosting

**3. Otros servicios:**
- **InfinityFree** (.rf.gd gratis)
- **000webhost** (.000webhostapp.com gratis)

---

## ✅ PASO 4: Verificar que funciona

1. Abre tu navegador
2. Ve a tu dominio (ejemplo: `tudominio.com` o `tuusuario.hostingersite.com`)
3. Deberías ver el POS funcionando
4. Prueba buscar productos - ¡Debería funcionar sin errores de CORS!

---

## 🔒 PASO 5: Configurar HTTPS (SSL)

Para que sea seguro y funcione PWA:

1. En Hostinger, ve a **"SSL"** o **"Seguridad"**
2. Activa el **SSL gratuito de Let's Encrypt**
3. Espera 5-10 minutos a que se active
4. Fuerza HTTPS:
   - Ve a **"Configuración avanzada"** > **"Forzar HTTPS"**
   - Actívalo

---

## 📱 PASO 6: Instalar como PWA (Opcional)

Una vez en línea con HTTPS:

1. Abre tu sitio en Chrome (móvil o desktop)
2. Busca el botón de **"Instalar aplicación"** o **"+"**
3. Haz clic para instalarla como aplicación
4. Ahora funciona como app nativa

---

## 🆘 Problemas comunes

### "Error 404 - Not Found"
- Verifica que `index.html` esté en la raíz de `public_html`
- Verifica que el archivo se llame exactamente `index.html` (no `Index.html`)

### "Las imágenes no cargan"
- Verifica que la carpeta `imagenes` esté en public_html
- Verifica que `logo.png` esté dentro de `imagenes/`

### "Los productos no cargan"
- Verifica tu conexión a internet
- Revisa que las APIs de WooCommerce estén activas

---

## 📧 Necesitas ayuda?

Si tienes problemas:
1. Revisa los logs de error en Hostinger
2. Abre la consola del navegador (F12) para ver errores
3. Contacta al soporte de Hostinger (suelen responder rápido)

---

## 🎉 ¡Listo!

Tu POS estará funcionando en internet sin problemas de CORS. Podrás:
- ✅ Escanear códigos QR con la cámara
- ✅ Usar escáner físico USB
- ✅ Ver precios de negocio
- ✅ Seleccionar entre precios
- ✅ Registrar ventas
- ✅ Imprimir recibos

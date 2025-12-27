# 🛒 POS MUNDOLAVADORAS

Sistema de Punto de Venta (POS) para Mundolavadoras con integración a WooCommerce.

## ✨ Características

- 🔍 **Búsqueda de productos** por nombre o SKU
- 📷 **Escáner de QR** con cámara web
- 🖨️ **Escáner físico USB** para códigos de barras
- 💰 **Precios de negocio** desde tienda secundaria (cerebroelectronics)
- ⚖️ **Selector de precio** para productos con precio normal y de negocio
- 🛒 **Carrito de compras** con localStorage
- 📄 **Impresión de recibos** formato térmico
- 📱 **PWA (Progressive Web App)** - se puede instalar como aplicación
- 🔄 **Registro automático** de ventas en WooCommerce

## 🚀 Instalación en Hostinger

**👉 Sigue la guía completa en:** [INSTRUCCIONES_HOSTINGER.md](INSTRUCCIONES_HOSTINGER.md)

### Resumen rápido:

1. Accede a tu panel de Hostinger
2. Ve al Administrador de Archivos
3. Navega a `public_html`
4. Sube estos archivos:
   - `index.html`
   - `manifest.json`
   - `service-worker.js`
   - Carpeta `imagenes/` con `logo.png`
5. Activa SSL (HTTPS) en Hostinger
6. ¡Listo! Accede desde tu dominio

## 🌐 Dominio Gratuito

Opciones para obtener un dominio gratis:

1. **Subdominio de Hostinger** (incluido): `tuusuario.hostingersite.com`
2. **Dominio gratis con Hostinger** (si compraste hosting): 1 año gratis de `.com`, `.net`, etc.
3. **Freenom**: Dominios `.tk`, `.ml`, `.ga`, `.cf` gratis
4. **InfinityFree**: Subdominio `.rf.gd` gratis

## 📱 Uso

### Buscar productos:
1. Escribe el nombre o SKU del producto
2. Haz clic en 🔍 o presiona Enter
3. O usa el botón 📷 para escanear con cámara
4. O usa tu escáner USB directamente

### Agregar al carrito:
- **Productos normales**: Click en "Agregar"
- **Productos con precio de negocio**: Selecciona el precio que quieres usar

### Finalizar venta:
1. Revisa el carrito
2. Click en "PAGAR"
3. La venta se registra en WooCommerce
4. Se abre la ventana de impresión

## 🔧 Configuración

Las credenciales de las tiendas están en `index.html`:

```javascript
const STORE_MAIN = {
    url: 'https://mundolavadoras.com/wp-json/wc/v3/products',
    key: 'tu_consumer_key',
    secret: 'tu_consumer_secret'
};
```

## 📋 Archivos del proyecto

- `index.html` - Aplicación principal
- `manifest.json` - Configuración PWA
- `service-worker.js` - Caché y funcionamiento offline
- `imagenes/logo.png` - Logo de la tienda
- `INSTRUCCIONES_HOSTINGER.md` - Guía de instalación

## 🔒 Seguridad

- ⚠️ **IMPORTANTE**: Las claves de API están en el código. Para producción considera:
  - Usar variables de entorno
  - Implementar un backend intermedio
  - Restringir las claves de API por dominio en WooCommerce

## 🐛 Solución de problemas

### Error de CORS en GitHub Pages
- **Solución**: Sube a Hostinger o configura plugin CORS en WordPress

### Productos no cargan
- Verifica las credenciales de WooCommerce
- Revisa que las APIs estén activas en WordPress
- Verifica la conexión a internet

### Escáner USB no funciona
- Asegúrate de no estar escribiendo en un campo de texto
- El escáner debe enviar Enter al final del código

### Cámara QR no funciona
- Solo funciona con HTTPS (SSL activado)
- Permite el acceso a la cámara en el navegador

## 📞 Soporte

Para problemas o preguntas sobre el hosting: [Soporte de Hostinger](https://www.hostinger.com/support)

## 📄 Licencia

Proyecto privado para Mundolavadoras

---

**Versión:** 2.0  
**Última actualización:** Diciembre 2025  
**Desarrollado para:** Mundolavadoras

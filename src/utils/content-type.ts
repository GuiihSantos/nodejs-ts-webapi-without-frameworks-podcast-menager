export enum ContentType {
    // Texto simples
    TEXT = 'text/plain',

    // Dados estruturados
    JSON = 'application/json',
    XML = 'application/xml',
    URL_ENCODED = 'application/x-www-form-urlencoded', // Comum em formulários HTML simples

    // Formulários e Upload de Arquivos
    FORM_DATA = 'multipart/form-data', // Comum para upload de arquivos

    // Tipos de mídia
    PDF = 'application/pdf',
    JPEG = 'image/jpeg',
    PNG = 'image/png',
    MP4 = 'video/mp4',
    OCTET_STREAM = 'application/octet-stream', // Tipo genérico para dados binários não especificados
}
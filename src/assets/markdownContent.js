// Contenido de archivos markdown importado directamente
// Esto asegura que los archivos se incluyan en el bundle de Vercel

export const resumenContent = `# Resumen Ejecutivo

El grupo de ransomware BlackCat logró acceder a los sistemas de Change Healthcare utilizando credenciales robadas de un servicio de acceso remoto que no contaba con autenticación multifactor (MFA).

Una vez dentro de la infraestructura, los atacantes exfiltraron grandes cantidades de información médica, financiera y personal perteneciente a millones de pacientes. Posteriormente, cifraron los servidores de la organización, provocando interrupciones masivas en sistemas de pagos y recetas médicas utilizados por hospitales y farmacias en Estados Unidos.

Como parte del ataque, el grupo exigió un rescate en criptomonedas para restaurar el acceso a los sistemas y evitar la publicación de los datos robados. Diversos reportes indicaron que la empresa habría pagado aproximadamente 22 millones de dólares en Bitcoin.

Este incidente es considerado uno de los ataques de ransomware más graves contra el sector salud en Estados Unidos, debido al impacto operativo, económico y legal generado por la exposición de datos sensibles y la interrupción de servicios médicos críticos.`

export const marcoContent = `# Marco Normativo Aplicable

En el caso original ocurrido en Estados Unidos, las principales normas afectadas fueron la ley HIPAA, relacionada con la protección de información médica, y diversas regulaciones de la Federal Trade Commission (FTC).

Si un incidente de características similares ocurriera en Chile, el marco normativo aplicable estaría compuesto por las siguientes leyes y regulaciones:

---

- **Ley 21.459 sobre Delitos Informáticos**

Esta ley regula los delitos cometidos mediante sistemas informáticos o contra ellos. En el caso analizado, resultaría aplicable debido al acceso ilícito a los sistemas, el robo de información sensible y el uso de ransomware para cifrar servidores y exigir pagos económicos.

- **Ley 19.628 sobre Protección de la Vida Privada**

La Ley 19.628 establece normas para el tratamiento y protección de datos personales y sensibles. Debido a que el ataque comprometió información médica y financiera de millones de pacientes, esta normativa sería fundamental para determinar responsabilidades relacionadas con la protección y resguardo de datos personales.

- **Ley 21.663 — Ley Marco de Ciberseguridad**

La Ley Marco de Ciberseguridad crea la Agencia Nacional de Ciberseguridad (ANIC) y establece obligaciones especiales para organismos y empresas consideradas servicios esenciales o infraestructuras críticas.

En este caso, el sector salud podría ser considerado infraestructura crítica, por lo que la organización afectada tendría la obligación de reportar el incidente de ciberseguridad en plazos breves y adoptar medidas inmediatas de contención y mitigación.`

export const delitosContent = `# Tipificación de Delitos según la Ley 21.459

Las acciones realizadas por el grupo de ransomware BlackCat pueden ser asociadas a distintos delitos tipificados en la Ley 21.459 sobre Delitos Informáticos de Chile. A continuación, se presenta el análisis correspondiente:

---

## **Artículo 1 — Acceso ilícito**

El ingreso a los sistemas de Change Healthcare mediante credenciales robadas constituye un caso de acceso ilícito, ya que los atacantes lograron superar de manera indebida las medidas de autenticación y seguridad implementadas por la organización para acceder a sistemas restringidos.

## **Artículo 2 — Interceptación ilícita**

La extracción y copia de información médica, financiera y personal de millones de pacientes puede relacionarse con el delito de interceptación ilícita, debido a la captura y exfiltración de datos privados y transmisiones no públicas realizadas desde los sistemas comprometidos.

## **Artículo 3 — Ataque a la integridad de los datos**

La encriptación de archivos y bases de datos mediante ransomware alteró la disponibilidad e integridad de la información almacenada por la empresa, afectando directamente el funcionamiento normal de los servicios médicos y administrativos.

## **Artículo 4 — Ataque a la integridad de un sistema informático**

El bloqueo de servidores y la interrupción de plataformas utilizadas por hospitales y farmacias afectaron gravemente la continuidad operativa de los sistemas informáticos, impidiendo el acceso legítimo a servicios esenciales relacionados con pagos y recetas médicas.

## **Extorsión según el Código Penal**

La exigencia de pagos en Bitcoin para restaurar el acceso a los sistemas y evitar la divulgación de los datos robados puede asociarse además al delito de extorsión regulado en el Código Penal chileno, particularmente bajo el Artículo 438, debido a la coacción ejercida para obtener un beneficio económico mediante amenazas y presión sobre la empresa afectada.`

export const comparacionContent = `# Escenario Hipotético y Comparación con Chile

Si un ataque similar al caso de Change Healthcare ocurriera en Chile, las consecuencias legales e institucionales serían significativas, especialmente considerando que el sector salud puede ser catalogado como infraestructura crítica o servicio esencial.

---

## **Impacto Institucional**

En Estados Unidos, el incidente involucró la intervención de organismos como el FBI y el Departamento de Salud debido al impacto generado sobre millones de pacientes y servicios médicos críticos.

En un escenario equivalente en Chile, la organización afectada tendría la obligación de reportar el incidente al CSIRT de Gobierno y a la Agencia Nacional de Ciberseguridad (ANIC), conforme a las disposiciones establecidas en la Ley 21.663 sobre Ciberseguridad e Infraestructura Crítica de la Información.

Además, el incidente podría requerir coordinación entre entidades públicas y privadas para mitigar el impacto operacional sobre hospitales, farmacias y plataformas médicas dependientes de los sistemas afectados.

## **Comparación de Sanciones**

Uno de los aspectos más relevantes al comparar ambos escenarios corresponde a las diferencias en las sanciones económicas aplicables.

En Estados Unidos y Europa, las organizaciones que exponen información médica y datos sensibles de millones de personas pueden enfrentar multas extremadamente elevadas, alcanzando cientos de millones de dólares debido a regulaciones estrictas de privacidad y protección de datos.

En contraste, la Ley 19.628 sobre Protección de la Vida Privada en Chile ha sido históricamente criticada por establecer sanciones limitadas, consistentes principalmente en multas de bajo monto determinadas por tribunales civiles.

Sin embargo, la nueva Ley 21.663 introduce un enfoque más severo respecto a incidentes que afecten servicios esenciales o infraestructuras críticas. En estos casos, las sanciones podrían alcanzar hasta 40.000 UTM, equivalentes a varios miles de millones de pesos chilenos, especialmente si se determina incumplimiento de obligaciones de ciberseguridad o fallas graves en la gestión del incidente.

## **Análisis Crítico**

El caso evidencia la importancia de fortalecer los mecanismos de protección de datos y ciberseguridad en el sector salud chileno. Un incidente de características similares podría generar consecuencias operacionales, económicas y reputacionales de gran magnitud, afectando directamente la continuidad de servicios médicos esenciales y la confianza de la ciudadanía en las instituciones responsables del tratamiento de información sensible.`

export const responsabilidadesContent = `# Responsabilidades: Actores e Implicancias Legales

En un ciberataque como el sufrido por la Clínica Dávila, es posible identificar distintas esferas de responsabilidad jurídica distribuidas entre los atacantes y la propia institución médica, considerando responsabilidades penales, civiles y administrativas.

---

## **Actor A: Grupo Criminal (Devman)**

### **Responsabilidad Penal**

Las acciones realizadas por el grupo atacante pueden ser asociadas a diversos delitos contemplados en la Ley 21.459 sobre Delitos Informáticos:

#### **Artículo 1 — Acceso ilícito**

Los atacantes accedieron sin autorización a la infraestructura tecnológica de la clínica mediante la vulneración de credenciales y mecanismos de acceso remoto.

#### **Artículo 2 — Interceptación ilícita**

La extracción y exfiltración de aproximadamente 250 GB de información médica y personal constituye una captación ilegítima de datos privados y sensibles.

#### **Artículo 3 — Ataque a la integridad de los datos**

La ejecución del ransomware alteró y cifró información crítica de la organización, afectando directamente la disponibilidad y funcionamiento de los datos almacenados.

#### **Artículo 4 — Ataque a la integridad de un sistema informático**

La interrupción operativa de los sistemas médicos y administrativos afectó el funcionamiento normal de la infraestructura tecnológica de la clínica.

#### **Extorsión — Artículo 438 del Código Penal**

La exigencia de un rescate económico en criptomonedas bajo amenaza de divulgar información confidencial puede configurarse además como delito de extorsión conforme al Código Penal chileno.

### **Responsabilidad Civil**

El grupo atacante también podría ser considerado civilmente responsable por los daños ocasionados tanto a la clínica como a los pacientes afectados.

El ataque provocó perjuicios económicos derivados de la paralización operativa de los servicios médicos, además de daños morales relacionados con la exposición de información sensible y privada de los pacientes.

Lo anterior puede vincularse con la responsabilidad extracontractual establecida en el Artículo 2314 del Código Civil, el cual obliga a indemnizar los daños causados mediante acciones ilícitas o dolosas.

---

## **Actor B: Clínica Dávila**

### **Responsabilidad Penal**

Conforme a la Ley 20.393 sobre Responsabilidad Penal de las Personas Jurídicas, las empresas pueden ser responsables penalmente cuando existen deficiencias graves en los modelos de prevención o en las políticas internas de seguridad.

La ausencia de medidas adecuadas de protección, como autenticación multifactor o controles de acceso robustos, podría ser considerada una falla relevante en la prevención de delitos informáticos.

### **Responsabilidad Civil**

La clínica mantiene una relación contractual y de confianza con sus pacientes, por lo que posee el deber de proteger adecuadamente la información sensible almacenada en sus sistemas.

La falta de implementación de medidas razonables de seguridad puede constituir incumplimiento del deber de diligencia, permitiendo que los afectados reclamen indemnizaciones por daños patrimoniales y morales.

Esto puede fundamentarse en:

- Artículo 1547 del Código Civil, relacionado con incumplimiento contractual y culpa leve.
- Artículo 23 de la Ley 19.628, que reconoce el derecho a indemnización por tratamiento indebido de datos personales.

### **Responsabilidad Administrativa**

#### **SERNAC**

La Ley 19.496 sobre Protección de los Derechos de los Consumidores establece el derecho de los consumidores a la seguridad en la prestación de servicios.

La vulneración de datos personales y la exposición de información sensible podrían derivar en sanciones administrativas y acciones de protección por parte del SERNAC.

#### **Agencia Nacional de Ciberseguridad (ANIC)**

Bajo la Ley 21.663 sobre Ciberseguridad e Infraestructura Crítica, las instituciones de salud pueden ser consideradas Operadores de Importancia Vital (OIV).

En este contexto, la clínica tendría la obligación de reportar oportunamente el incidente al CSIRT Nacional y a la Agencia Nacional de Ciberseguridad.

El incumplimiento de estas obligaciones podría derivar en multas administrativas de elevada magnitud, alcanzando hasta 40.000 UTM en casos graves relacionados con servicios esenciales o infraestructura crítica.`

export const datosContent = `# Tratamiento de Datos según la Ley 19.628

El incidente de ciberseguridad provocó la exposición de aproximadamente 250 GB de información confidencial perteneciente a pacientes y usuarios de la institución médica. Según la Ley 19.628 sobre Protección de la Vida Privada, los datos comprometidos pueden clasificarse en distintas categorías relevantes desde el punto de vista legal.

## Datos Personales Comunes

De acuerdo con el Artículo 2 letra f) de la Ley 19.628, los datos personales corresponden a información relativa a personas naturales identificadas o identificables.

Dentro de la información expuesta se incluyen:

- Nombres completos
- RUT
- Direcciones
- Correos electrónicos
- Información de facturación

La filtración de estos antecedentes puede facilitar delitos como suplantación de identidad, fraudes financieros y campañas de phishing dirigidas contra los afectados.

## Datos Sensibles

El Artículo 2 letra g) define como datos sensibles aquellos relacionados con características físicas, estado de salud, vida privada y otros antecedentes íntimos de las personas.

En el caso analizado, los atacantes obtuvieron acceso a:

- Fichas clínicas
- Diagnósticos médicos
- Recetas
- Exámenes
- Historiales de atención

El Artículo 10 de la Ley 19.628 establece restricciones especiales para el tratamiento de datos sensibles, permitiendo su utilización únicamente bajo autorización legal o consentimiento expreso del titular.

La falta de medidas adecuadas de protección por parte de la institución puede interpretarse como una infracción grave al deber de resguardo de información médica y privada de los pacientes.

---

# Impacto sobre los Derechos ARCO

El ataque informático afectó directamente el ejercicio de los denominados derechos ARCO: acceso, rectificación, cancelación y oposición respecto del tratamiento de datos personales.

## Derecho de Acceso y Rectificación

Debido al cifrado de servidores y sistemas clínicos provocado por el ransomware, la organización quedó temporalmente imposibilitada de entregar historiales médicos o corregir información contenida en las bases de datos durante el periodo de contingencia.

## Derecho de Cancelación y Oposición

La eventual publicación de la información en foros clandestinos o sitios de la Dark Web genera una situación especialmente compleja para los titulares de los datos.

Una vez difundida la información, resulta prácticamente imposible garantizar la eliminación completa de los registros filtrados o impedir que terceros continúen utilizando dichos antecedentes para actividades ilícitas, extorsión o fraudes relacionados con información médica sensible.

## Análisis Jurídico

El incidente evidencia la importancia de implementar medidas robustas de ciberseguridad y protección de datos en instituciones de salud, especialmente considerando el alto nivel de sensibilidad de la información tratada.

Además del impacto tecnológico y operativo, este tipo de ataques compromete derechos fundamentales relacionados con la privacidad, confidencialidad y control sobre los datos personales de los pacientes.`

export const conclusionesContent = `# Conclusiones y Recomendaciones

El análisis del incidente demuestra cómo un ataque de ransomware puede generar consecuencias críticas tanto a nivel operativo como legal, especialmente cuando afecta instituciones del sector salud que administran grandes volúmenes de información sensible.

La filtración de datos médicos, la interrupción de servicios clínicos y el impacto sobre los derechos de los pacientes evidencian la necesidad de fortalecer las políticas de ciberseguridad y protección de datos dentro de organizaciones consideradas servicios esenciales.

Además, el caso permite observar la creciente importancia de la legislación chilena en materia de delitos informáticos, protección de datos personales e infraestructura crítica, especialmente tras la entrada en vigencia de la Ley 21.663 sobre Ciberseguridad.

# Recomendaciones de Ciberseguridad

Con el objetivo de prevenir incidentes similares y cumplir adecuadamente con las exigencias legales y técnicas actuales, se recomienda implementar las siguientes medidas de seguridad:

## Implementación Obligatoria de MFA

La autenticación multifactor (MFA) debe ser obligatoria en todos los accesos remotos y sistemas críticos, especialmente en conexiones VPN y plataformas administrativas.

Esta medida reduce significativamente el riesgo asociado al robo o filtración de credenciales de acceso.

## Modelo Zero Trust y Segmentación de Redes

Se recomienda aplicar principios de seguridad Zero Trust, limitando los accesos internos únicamente a usuarios y dispositivos autorizados.

Además, los servidores que almacenan fichas clínicas y datos sensibles deben mantenerse segmentados y aislados de redes administrativas generales para impedir el movimiento lateral de atacantes dentro de la infraestructura.

## Cifrado de Datos

Las bases de datos y sistemas que almacenen información médica o personal deben utilizar mecanismos de cifrado robustos tanto en reposo como durante la transmisión de datos.

El uso de algoritmos modernos como AES-256 permite disminuir el impacto de posibles filtraciones, ya que la información robada resulta ilegible sin las claves correspondientes.

## Respaldos Inmutables y Desconectados

Es fundamental mantener copias de seguridad inmutables y desconectadas físicamente de la red principal (air-gapped backups).

Esto permite recuperar rápidamente la operación de los sistemas afectados sin depender del pago de rescates exigidos por grupos de ransomware.

## Capacitación y Cultura de Seguridad

Las organizaciones de salud también deben fortalecer la capacitación de funcionarios y trabajadores respecto a buenas prácticas de seguridad informática, phishing y manejo de información sensible.

La prevención y detección temprana continúan siendo elementos esenciales para reducir el riesgo de incidentes graves.

# Reflexión Final

El caso analizado demuestra que la ciberseguridad ya no constituye únicamente un problema tecnológico, sino también un desafío legal, organizacional y social.

La protección de datos sensibles y la continuidad operacional de servicios médicos críticos requieren inversiones constantes, políticas claras y una adecuada coordinación entre instituciones públicas y privadas para enfrentar amenazas cada vez más sofisticadas.`

export const promptsContent = `# Bitácora de Uso de Inteligencia Artificial

## Registro de herramientas y apoyo utilizado durante el desarrollo del informe

El presente documento tiene como finalidad registrar de manera transparente el uso de herramientas de Inteligencia Artificial, asistentes de programación y apoyo tecnológico utilizados durante la elaboración del análisis técnico y legal del caso de ransomware BlackCat contra Change Healthcare.

## Generación del Resumen Ejecutivo

Se utilizó inteligencia artificial para elaborar un resumen general del ataque ransomware ocurrido en Change Healthcare durante el año 2024.

La herramienta permitió organizar cronológicamente los hechos principales del incidente, incluyendo:

- Acceso mediante credenciales robadas
- Ausencia de autenticación multifactor (MFA)
- Exfiltración de datos médicos y financieros
- Cifrado de servidores mediante ransomware
- Impacto sobre hospitales y farmacias
- Exigencia de pago en criptomonedas

## Apoyo en el Marco Normativo

Se utilizó asistencia basada en IA para identificar legislación chilena relacionada con delitos informáticos, protección de datos y ciberseguridad aplicable al caso analizado.

Entre las normas consideradas se incluyen:

- Ley 21.459 sobre Delitos Informáticos
- Ley 19.628 sobre Protección de la Vida Privada
- Ley 21.663 sobre Ciberseguridad e Infraestructura Crítica

Además, se utilizó apoyo automatizado para relacionar medidas técnicas como autenticación multifactor, control de accesos y segmentación de redes con las obligaciones legales actuales.


## Clasificación de Datos Personales

La inteligencia artificial fue utilizada como apoyo para clasificar los datos comprometidos durante el incidente, diferenciando entre:

- Datos personales comunes
- Datos sensibles relacionados con salud y fichas clínicas

Esto permitió estructurar el análisis jurídico vinculado a privacidad, tratamiento de datos y derechos de los titulares de la información.


## Apoyo Técnico y Desarrollo del Proyecto

Durante el desarrollo del proyecto React y la configuración del entorno de trabajo, se utilizó GitHub Copilot integrado en Visual Studio Code como apoyo técnico para:

- Resolver errores de integración
- Configurar dependencias
- Corregir problemas de compatibilidad
- Apoyar tareas relacionadas con React, Vite y Tailwind CSS

## Correcciones y Ajustes Manuales

El contenido generado con apoyo de herramientas de IA fue posteriormente revisado y ajustado manualmente para:

- Reforzar el enfoque legal del análisis
- Destacar el impacto operacional sobre hospitales y farmacias
- Incorporar referencias a protección de accesos remotos
- Mejorar la redacción académica y coherencia general del informe
- Complementar las recomendaciones relacionadas con MFA y controles de ciberseguridad

## Reflexión Final

Las herramientas de Inteligencia Artificial fueron utilizadas como apoyo complementario para investigación, organización y redacción inicial de contenidos.

Sin embargo, el análisis final, la selección normativa y las conclusiones fueron revisadas y adaptadas manualmente con el objetivo de asegurar coherencia técnica, pertinencia legal y adecuación al contexto chileno.`

// Mapeo de archivo a contenido
export const contentMap = {
  '01_resumen_lopeli.md': resumenContent,
  '02_marco_lopeli.md': marcoContent,
  '03_delitos_lopeli.md': delitosContent,
  '04_comparacion_lopeli.md': comparacionContent,
  '05_responsabilidades_lopeli.md': responsabilidadesContent,
  '06_datos_lopeli.md': datosContent,
  '07_conclusiones_lopeli.md': conclusionesContent,
  '08_prompts_lopeli.md': promptsContent,
}

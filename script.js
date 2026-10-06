const TOTAL_UNITS = 11;

// ==========================================
// UNIDAD 1
// ==========================================
const unit1 = {
  title: 'Farmacia comunitaria "Modelo"',
  intro: 'A continuación se describen situaciones que podrían darse en una farmacia comunitaria. Para cada una, marcá si te parece que cumple o no cumple con la legislación farmacéutica argentina. Después de responder vas a ver el fundamento legal.',
  items: [
    {
      text: 'El farmacéutico director técnico, matriculado, se encuentra presente en el mostrador durante todo el horario de atención.',
      correct: true,
      explanation: 'La Ley 17.565 exige que toda farmacia funcione bajo la dirección técnica de un farmacéutico, con presencia efectiva durante el horario de atención al público.'
    },
    {
      text: 'Se le dispensa amoxicilina (un antibiótico) a un cliente sin receta médica, porque asegura que "ya sabe lo que tiene".',
      correct: false,
      explanation: 'Los antibióticos son medicamentos de venta bajo receta. Dispensarlos sin ella infringe la Ley 17.565 y las disposiciones de la ANMAT sobre condición de venta de medicamentos.'
    },
    {
      text: 'Dentro de la farmacia en un lugar visible se encuentra exhibido el título universitario del profesional.',
      correct: true,
      explanation: 'La normativa exige exhibir públicamente el título profesional e identificar al profesional responsable de la dirección técnica del establecimiento.'
    },
    {
      text: 'Los psicofármacos se guardan bajo llave y cada venta queda asentada en el libro de psicotrópicos correspondiente.',
      correct: true,
      explanation: 'El control de estupefacientes y psicotrópicos exige resguardo especial y registro en libros habilitados, conforme a la Ley 19.303 y las disposiciones de la ANMAT.'
    },
    {
      text: 'Según los síntomas que describe un paciente, el farmacéutico determina que tiene una infección y le indica qué antibiótico tomar, sin derivarlo a un médico.',
      correct: false,
      explanation: 'Diagnosticar y prescribir excede las incumbencias profesionales del farmacéutico e invade el ejercicio de la medicina.'
    },
    {
      text: 'Antes de reponer la góndola, el personal revisa las fechas de vencimiento y retira los productos vencidos de la venta.',
      correct: true,
      explanation: 'Controlar los vencimientos es una obligación básica dentro de las buenas prácticas de dispensación y conservación de medicamentos.'
    },
    {
      text: 'La farmacia permanece abierta al público toda la jornada, pero el farmacéutico director técnico nunca está presente: solo atiende personal auxiliar.',
      correct: false,
      explanation: 'Sin dirección técnica presente, el establecimiento no puede funcionar legalmente durante ese horario, conforme a la Ley 17.565.'
    },
    {
      text: 'En la vidriera se exhibe un cartel promocionando descuentos en un medicamento de venta bajo receta, dirigido directamente al público.',
      correct: false,
      explanation: 'La publicidad de medicamentos de venta bajo receta dirigida al público general está prohibida; solo puede promocionarse a profesionales de la salud.'
    },
    {
      text: 'La farmacia cuenta con una heladera destinada exclusivamente a vacunas y medicamentos termolábiles, con registro de temperatura.',
      correct: true,
      explanation: 'Mantener la cadena de frío para productos termolábiles forma parte de las buenas prácticas de almacenamiento exigidas a los establecimientos farmacéuticos.'
    },
    {
      text: 'Las muestras médicas gratuitas que dejó un visitador de un laboratorio se guardan junto al stock y se venden como si fueran unidades normales.',
      correct: false,
      explanation: 'Las muestras gratis no son mercadería: está prohibida su comercialización. Deben identificarse y destinarse solo a fines promocionales autorizados.'
    },
    {
      text: 'Con el consentimiento del paciente, y ante la falta de stock de la marca recetada, el farmacéutico dispensa el equivalente genérico con igual principio activo, dosis y forma farmacéutica.',
      correct: true,
      explanation: 'La Ley 25.649 de prescripción de medicamentos por nombre genérico habilita al farmacéutico a sustituir por una especialidad de igual composición cuando el paciente lo consiente.'
    }
  ],
  legalRefs: [
    'Ley 17.565 (Ejercicio de la farmacia) y su Decreto Reglamentario 7123/68: marco general de habilitación y dirección técnica.',
    'Ley 25.649: prescripción de medicamentos por nombre genérico y sustitución farmacéutica.',
    'Ley 19.303 y disposiciones de la ANMAT: control de estupefacientes y psicotrópicos.',
    'Ley 16.463 y disposiciones de la ANMAT: registro, condición de venta y publicidad de medicamentos.',
    'Incumbencias profesionales del farmacéutico: alcance del título, sin facultades de diagnóstico ni prescripción médica.'
  ]
};

// ==========================================
// UNIDAD 2
// ==========================================
const unit2 = {
  title: 'Manejo de Estupefacientes y Psicotrópicos',
  intro: 'A continuación se describen situaciones referidas al manejo, prescripción y dispensa de estupefacientes y psicotrópicos. Marcá si te parece que cumple o no cumple con la normativa nacional.',
  items: [
    {
      text: 'Una farmacia comunitaria decide importar directamente un estupefaciente de la Lista I desde el exterior ingresándolo por la aduana de su provincia.',
      correct: false,
      explanation: 'Los estupefacientes de la Lista I solo pueden ser importados por puertos o aeropuertos bajo jurisdicción de la Aduana de la Capital Federal.'
    },
    {
      text: 'El farmacéutico dispensa un psicotrópico de la Lista II con una receta médica común, sellándola, firmándola y archivando el original en la farmacia.',
      correct: false,
      explanation: 'Los psicotrópicos de la Lista II solo pueden prescribirse mediante recetas extendidas en formularios oficializados por triplicado, no en recetarios comunes.'
    },
    {
      text: 'Un médico prescribe un estupefaciente en formulario oficializado, indicando una cantidad suficiente para 15 días de tratamiento según la dosis diaria instituida.',
      correct: false,
      explanation: 'En ningún caso pueden expenderse recetas cuya cantidad de estupefacientes exceda la necesaria para administrar hasta 10 días de tratamiento.'
    },
    {
      text: 'Un envase de un medicamento que contiene un psicotrópico de la Lista III lleva impresa la leyenda: "Este medicamento debe ser usado exclusivamente bajo prescripción y vigilancia médica y no puede repetirse sin nueva receta médica".',
      correct: true,
      explanation: 'Es obligatorio que todo medicamento con psicotrópicos de las Listas II, III y IV lleve esa leyenda en sus envases, rótulos y prospectos en forma bien visible y destacada.'
    },
    {
      text: 'Se presenta una receta oficializada para un psicotrópico de la Lista II que cubre exactamente 20 días de tratamiento según la dosis indicada en letras y números.',
      correct: true,
      explanation: 'La normativa permite extender y expender recetas de psicotrópicos de la Lista II por una cantidad que no exceda la necesaria para hasta 20 días de tratamiento.'
    },
    {
      text: 'El farmacéutico dispensa un estupefaciente de la Lista III utilizando únicamente una receta médica manuscrita, fechada y firmada por el profesional médico.',
      correct: true,
      explanation: 'Los estupefacientes enumerados en la Lista III pueden despacharse legalmente en las farmacias por receta médica manuscrita, fechada y firmada, sin exigir formulario por triplicado.'
    },
    {
      text: 'Al despachar un psicotrópico de la Lista IV, el farmacéutico sella y firma la receta, la copia en el libro recetario y la archiva por el plazo legal correspondiente de dos años.',
      correct: true,
      explanation: 'Los psicotrópicos de las Listas III y IV deben despacharse bajo receta archivada, copiarse en el libro recetario y archivarse por el término exacto de dos años.'
    },
    {
      text: 'Un veterinario matriculado prescribe un estupefaciente en un recetario por duplicado para un animal, y el farmacéutico lo dispensa y archiva directamente sin visado adicional.',
      correct: false,
      explanation: 'Las recetas de estupefacientes emitidas por veterinarios deben ser obligatoriamente visadas de forma previa por la autoridad sanitaria competente.'
    },
    {
      text: 'Un médico prescribe un psicotrópico de la Lista IV sin especificar el tamaño del envase. Ante la duda, el farmacéutico despacha el envase de mayor contenido para no interrumpir el tratamiento.',
      correct: false,
      explanation: 'Cuando en las recetas se encuentra omitido el tamaño o contenido del envase, el farmacéutico debe despachar indefectiblemente el de menor contenido.'
    },
    {
      text: 'El director técnico destruye las recetas oficializadas de estupefacientes que ya cumplieron el plazo legal de archivo de dos años, sin notificar al Ministerio.',
      correct: false,
      explanation: 'Las recetas pueden ser destruidas una vez cumplido el término de dos años, pero requieren siempre la intervención previa de la autoridad sanitaria para labrar el acta respectiva.'
    },
    {
      text: 'Un veterinario prescribe un psicotrópico de la Lista II detallando los datos del dueño del animal, con receta extendida por duplicado y previamente visada por la autoridad sanitaria.',
      correct: true,
      explanation: 'Los veterinarios pueden prescribir psicotrópicos de la Lista II cumpliendo con el recetario por duplicado, datos del propietario y visado previo de la autoridad sanitaria.'
    },
    {
      text: 'Ante un caso excepcional, el médico prescribe una dosis de un estupefaciente mayor a la indicada por la Farmacopea, subrayando la dosis con dos líneas y escribiéndola con letras.',
      correct: true,
      explanation: 'Para la prescripción de sobredosis, la Ley exige subrayar las dosis con dos líneas y escribirlas con letras, además de informar a la autoridad sanitaria sobre la identidad del paciente.'
    }
  ],
  legalRefs: [
    'Ley 17.818: Régimen legal de Estupefacientes.',
    'Ley 19.303: Régimen legal de Psicotrópicos.'
  ]
};

// ==========================================
// UNIDAD 3
// ==========================================
const unit3 = {
  title: 'Control, Fiscalización y Penalidades (Ley 17.818)',
  intro: 'Examen de nivel universitario. Analizá los siguientes casos sobre importación, registros documentales y régimen sancionatorio de estupefacientes según la Ley N° 17.818. Evaluá la legalidad de cada situación.',
  items: [
    {
      text: 'Una droguería decide importar un estupefaciente de la Lista I ingresándolo por la aduana de su provincia para abaratar costos logísticos terrestres.',
      correct: false,
      explanation: 'Falso. El Artículo 5° de la Ley 17.818 establece que solo podrán ser importados por puertos o aeropuertos bajo jurisdicción de la Aduana de la Capital Federal.'
    },
    {
      text: 'Una farmacia tramita la importación de hojas de coca para expendio legítimo a través de la aduana de la frontera con la República de Bolivia.',
      correct: true,
      explanation: 'Correcto. El Artículo 5° exceptúa a las hojas de coca para expendio legítimo, permitiendo que ingresen por aduanas de frontera con Bolivia.'
    },
    {
      text: 'El certificado oficial de importación de estupefacientes emitido por la autoridad sanitaria nacional tiene una validez legal de un año calendario (365 días).',
      correct: false,
      explanation: 'Falso. El certificado oficial de importación caduca a los ciento ochenta (180) días de la fecha de su emisión (Art. 6).'
    },
    {
      text: 'El certificado oficial otorgado para la exportación de estupefacientes caduca exactamente a los sesenta (60) días de la fecha de su emisión.',
      correct: true,
      explanation: 'Correcto. Según el Artículo 7°, dicho certificado de exportación caduca a los 60 días de emitido.'
    },
    {
      text: 'Una carga de estupefacientes en tránsito es sometida a un cambio de embalaje en la aduana local para facilitar su estiba, mediando únicamente la autorización del despachante de aduana.',
      correct: false,
      explanation: 'Falso. Los estupefacientes en tránsito no pueden modificar su embalaje ni ser sometidos a manipulación alguna sin autorización previa de la autoridad sanitaria nacional (Art. 8).'
    },
    {
      text: 'Los establecimientos habilitados para elaborar estupefacientes inscriben diariamente sus operaciones en registros especiales, foliados y rubricados por la autoridad sanitaria.',
      correct: true,
      explanation: 'Correcto. El Artículo 13 exige registrar diariamente las operaciones (fecha, proveedor, clase y cantidad de materias primas) en libros rubricados.'
    },
    {
      text: 'La enajenación de estupefacientes entre laboratorios y farmacias se realiza mediante formularios impresos confeccionados por duplicado, quedando el original para el adquirente.',
      correct: false,
      explanation: 'Falso. El Artículo 14 establece que los formularios de enajenación deben confeccionarse por triplicado (original para el adquirente, duplicado a la autoridad sanitaria y triplicado para el cedente).'
    },
    {
      text: 'Las preparaciones que contengan estupefacientes de la lista I (excepto resina de cannabis, paja de adormidera y heroína) solo podrán ser prescriptas mediante recetas extendidas en formularios oficializados.',
      correct: true,
      explanation: 'Correcto. Lo dispone el Artículo 16, requiriendo receta manuscrita, cantidades en letras, y datos del paciente.'
    },
    {
      text: 'Las recetas de estupefacientes de la Lista I pueden ser despachadas hasta en dos oportunidades si el médico indica explícitamente "tratamiento prolongado" en el formulario.',
      correct: false,
      explanation: 'Falso. El Artículo 16 es taxativo: el farmacéutico las despachará una única vez.'
    },
    {
      text: 'Las recetas oficializadas despachadas por la farmacia deben copiarse en el libro recetario y archivarse por el director técnico durante un plazo de dos (2) años.',
      correct: true,
      explanation: 'Correcto. Los originales deben ser copiados y archivados por el término de dos años, tras los cuales pueden ser destruidos previa acta (Art. 16).'
    },
    {
      text: 'Las infracciones a la ley nacional de estupefacientes prescriben a los cinco (5) años de cometidas.',
      correct: false,
      explanation: 'Falso. Las infracciones a esta ley y a sus reglamentos prescriben a los dos (2) años (Art. 26).'
    },
    {
      text: 'En caso de imponerse una sanción de clausura o inhabilitación por infracción, el recurso de apelación se concederá con efecto suspensivo.',
      correct: true,
      explanation: 'Correcto. El Artículo 28 indica que el recurso se concede al solo efecto devolutivo, salvo cuando la pena sea de clausura o inhabilitación, en que se concederá con efecto suspensivo.'
    }
  ],
  legalRefs: [
    'Ley 17.818: Cap. III (Importación y Exportación, arts. 5 al 8).',
    'Ley 17.818: Cap. IV y V (Registros y Enajenación, arts. 13 y 14).',
    'Ley 17.818: Cap. VI (Despacho al público, art. 16).',
    'Ley 17.818: Cap. IX y X (Prescripción y Procedimiento, arts. 26 y 28).'
  ]
};

// ==========================================
// UNIDAD 4
// ==========================================
const unit4 = {
  title: 'Derechos del Paciente y Documentación Clínica (Ley 26.529)',
  intro: 'Examen de nivel universitario. Evaluá la legalidad de los siguientes escenarios de práctica profesional relacionados con el resguardo de la historia clínica, el consentimiento informado y los derechos esenciales del paciente.',
  items: [
    {
      text: 'Un médico decide eximirse del deber de asistencia hacia un paciente debido a las creencias políticas de este último, dejando constancia verbal y retirándose del establecimiento sin derivarlo a otro profesional.',
      correct: false,
      explanation: 'Falso. El Artículo 2 inc. a) establece que la asistencia no debe tener menoscabo por ideas políticas o creencias, y el profesional sólo puede eximirse cuando se hubiere hecho cargo efectivamente otro profesional competente.'
    },
    {
      text: 'Un paciente diagnosticado con una patología oncológica severa solicita expresamente por escrito que no se le brinde información sobre la evolución y pronóstico de su enfermedad. El equipo médico acata la decisión.',
      correct: true,
      explanation: 'Correcto. Según el Artículo 2 inc. f), el derecho a la información sanitaria incluye también el derecho de "no recibir" la mencionada información.'
    },
    {
      text: 'El médico tratante informa detalladamente sobre el pronóstico de un paciente mayor de edad, lúcido y capaz, a su hermano, sin haber solicitado autorización previa al propio paciente.',
      correct: false,
      explanation: 'Falso. El Artículo 4 dicta que la información sanitaria sólo podrá ser brindada a terceras personas con autorización explícita del paciente, salvo casos de incapacidad.'
    },
    {
      text: 'Un paciente será sometido a una intervención quirúrgica programada. El cirujano recaba el consentimiento informado únicamente de forma verbal frente a dos testigos del cuerpo de enfermería.',
      correct: false,
      explanation: 'Falso. El Artículo 7 establece excepciones a la regla verbal; en caso de internación, intervención quirúrgica y procedimientos invasivos o riesgosos, el consentimiento debe ser por escrito y debidamente suscrito.'
    },
    {
      text: 'Llega un paciente inconsciente a la guardia tras un accidente grave que pone en riesgo inminente su vida. El equipo quirúrgico procede a operarlo de urgencia sin requerir consentimiento informado.',
      correct: true,
      explanation: 'Correcto. El Artículo 9 exime al profesional de requerir el consentimiento cuando mediare una situación de emergencia con grave peligro para la vida y el paciente no pudiera darlo por sí o a través de sus representantes.'
    },
    {
      text: 'Una persona mayor de edad deja directivas anticipadas por escrito solicitando que se le apliquen prácticas eutanásicas en caso de entrar en estado vegetativo irreversible. La institución archiva el documento para su cumplimiento futuro.',
      correct: false,
      explanation: 'Falso. El Artículo 11 habilita las directivas anticipadas, pero establece expresamente que aquellas que impliquen desarrollar prácticas eutanásicas se tendrán como inexistentes.'
    },
    {
      text: 'Un paciente solicita a su simple requerimiento una copia de su historia clínica. El establecimiento asistencial se compromete a entregarla certificada en un plazo de cuarenta y ocho (48) horas.',
      correct: true,
      explanation: 'Correcto. El Artículo 14 establece que el paciente es el titular de la historia clínica y la entrega de la copia autenticada debe realizarse dentro de las 48 horas de solicitada.'
    },
    {
      text: 'Un paciente decide abandonar su tratamiento farmacológico de manera unilateral. El médico omite este hecho en la historia clínica al considerar que carece de relevancia clínica actual.',
      correct: false,
      explanation: 'Falso. El Artículo 16 de Integridad dispone que forman parte de la historia clínica las prácticas o tratamientos realizados, rechazados o abandonados, requiriendo un breve sumario del acto.'
    },
    {
      text: 'Un sanatorio utiliza un sistema informatizado de historias clínicas que permite sobreescribir y modificar los asientos anteriores para corregir errores ortográficos sin dejar rastro de la alteración.',
      correct: false,
      explanation: 'Falso. El Artículo 13 exige inalterabilidad y obliga a utilizar medios no reescribibles de almacenamiento, con control de modificación de campos para asegurar la integridad de los datos.'
    },
    {
      text: 'El archivo central de un sanatorio privado procede a disponer libremente de las historias clínicas físicas de aquellos pacientes cuya última actuación médica fue registrada hace doce (12) años.',
      correct: true,
      explanation: 'Correcto. El Artículo 18 de Inviolabilidad establece que la obligación de guarda rige durante un plazo mínimo de diez (10) años computados desde la última actuación registrada.'
    },
    {
      text: 'Tras el fallecimiento de un paciente, su cónyuge solicita acceso a la historia clínica acreditando legalmente su vínculo. El hospital se niega alegando que el derecho se extingue con la muerte del titular.',
      correct: false,
      explanation: 'Falso. El Artículo 19 inc. b) legitima expresamente al cónyuge o conviviente en unión de hecho y a los herederos forzosos a solicitar la historia clínica.'
    },
    {
      text: 'Ante el silencio y la negativa infundada de un profesional a entregar la copia de una historia clínica, el paciente dispone del ejercicio de la acción directa de "habeas data".',
      correct: true,
      explanation: 'Correcto. El Artículo 20 establece que frente a la negativa, demora o silencio, el sujeto legitimado dispone de la acción directa de "habeas data", la cual a nivel nacional es exenta de gastos.'
    }
  ],
  legalRefs: [
    'Ley 26.529: Derechos del paciente y exenciones de asistencia (Art. 2).',
    'Ley 26.529: Manejo de Información Sanitaria (Art. 4).',
    'Ley 26.529: Consentimiento Informado, Instrumentación y Excepciones (Arts. 7, 9, 11).',
    'Ley 26.529: Historia Clínica, titularidad, inviolabilidad y plazos (Arts. 13, 14, 16, 18, 19, 20).'
  ]
};

// ==========================================
// UNIDAD 5
// ==========================================
const unit5 = {
  title: 'Ley de Confidencialidad (Ley 24.766)',
  intro: 'Examen de nivel universitario. Evaluá la legalidad de los siguientes escenarios vinculados al secreto industrial, registro de productos y usos comerciales honestos en el ámbito farmacéutico.',
  items: [
    {
      text: 'Un laboratorio intenta resguardar legalmente como información confidencial una fórmula que es fácilmente accesible para los profesionales especializados del sector, argumentando que tiene gran valor económico.',
      correct: false,
      explanation: 'Falso. El Artículo 1° exige que la información sea secreta, es decir, que no sea generalmente conocida ni fácilmente accesible para personas en los círculos que normalmente la utilizan.'
    },
    {
      text: 'Un laboratorio de la competencia adquiere la fórmula de un producto sin el consentimiento de su titular debido a una negligencia grave, aunque ignoraba que dicha adquisición implicaba una práctica deshonesta.',
      correct: false,
      explanation: 'Infracción (No cumple). El Artículo 1° considera contrario a los usos comerciales honestos la adquisición por terceros que supieran o no, por negligencia grave, que la adquisición implicaba tales prácticas.'
    },
    {
      text: 'Un empleado revela un proceso de elaboración que obtuvo en su trabajo. Para que se considere una infracción a la Ley, es requisito indispensable que previamente se le haya advertido sobre el carácter confidencial de dicha información.',
      correct: true,
      explanation: 'Correcto. El Artículo 3° establece la obligación de abstenerse de revelar la información a toda persona que haya tenido acceso "y sobre cuya confidencialidad se los haya prevenido".'
    },
    {
      text: 'Al solicitar el registro de una nueva entidad química sin registro previo en ningún país, la información sobre eficacia e inocuidad está protegida contra su divulgación si requirió un esfuerzo técnico y económico significativo.',
      correct: true,
      explanation: 'Correcto. El Artículo 4° protege esta información contra el uso comercial deshonesto y prohíbe explícitamente su divulgación.'
    },
    {
      text: 'El Ministerio de Salud recibe una solicitud de inscripción para un producto farmacéutico similar a uno ya autorizado en un país del Anexo I. El organismo dispone legalmente de un plazo de 180 días corridos para expedirse.',
      correct: false,
      explanation: 'Falso. El Artículo 5° establece taxativamente que el Ministerio de Salud tendrá un plazo de 120 días corridos para expedirse, contados desde la solicitud.'
    },
    {
      text: 'Un laboratorio nacional utiliza una invención protegida por una patente vigente con fines netamente experimentales para reunir información y solicitar la comercialización una vez que dicha patente expire.',
      correct: true,
      explanation: 'Correcto. El Artículo 8° autoriza a cualquier tercero a utilizar la invención antes del vencimiento con fines experimentales para reunir la información requerida para su futura aprobación.'
    },
    {
      text: 'La información confidencial presentada ante la autoridad sanitaria mantiene su protección legal aun si el laboratorio titular decide publicar una parte de dichos datos en una revista científica de dominio público.',
      correct: false,
      explanation: 'Falso. El Artículo 9° dispone que no estará protegida la información que hubiera caído en el dominio público por la publicación o presentación en medios científicos de todos o partes de los datos.'
    },
    {
      text: 'La autoridad sanitaria se encuentra facultada para publicar información confidencial sobre un medicamento nuevo si dicha publicación es estrictamente necesaria para proteger a la población.',
      correct: true,
      explanation: 'Correcto. El Artículo 10° exceptúa de la protección a la información cuya publicación sea necesaria para proteger al público.'
    },
    {
      text: 'La protección otorgada por la Ley de Confidencialidad a un proceso de elaboración farmacéutica le confiere a su desarrollador derechos exclusivos de monopolio, impidiendo que terceros lo desarrollen de forma independiente.',
      correct: false,
      explanation: 'Falso. El Artículo 11° aclara expresamente que la protección conferida por esta ley no crea derechos exclusivos a favor de quien posea o hubiera desarrollado la información.'
    },
    {
      text: 'Ante la sustracción de documentación técnica por parte de un ex empleado, el laboratorio afectado interpone medidas cautelares para hacer cesar la conducta ilícita e inicia acciones para solicitar reparación económica.',
      correct: true,
      explanation: 'Correcto. El Artículo 11° habilita a solicitar medidas cautelares para el cese de conductas ilícitas y a ejercer acciones civiles para obtener la reparación del perjuicio sufrido.'
    },
    {
      text: 'Un funcionario de la autoridad sanitaria que revele indebidamente el expediente técnico de un fármaco solo será sancionado con una multa y medidas disciplinarias internas, sin responsabilidad penal.',
      correct: false,
      explanation: 'Falso. Los Artículos 12° y 13° determinan que los funcionarios incurrirán en responsabilidad penal (violación de secretos), sumado a la pena de exoneración y multa.'
    },
    {
      text: 'Para registrar un producto farmacéutico importado desde Brasil (país del Anexo II), la ley exige que el medicamento ya se encuentre comercializado en dicho país de origen previo a la solicitud local.',
      correct: true,
      explanation: 'Correcto. El Artículo 5°, inciso e, exige un certificado de la autoridad sanitaria de origen y que, previo a la solicitud, el producto esté comercializado en el país de origen.'
    }
  ],
  legalRefs: [
    'Ley 24.766: Condiciones de protección y usos deshonestos (Arts. 1 y 3).',
    'Ley 24.766: Aprobación de productos y entidades químicas nuevas (Arts. 4 y 5).',
    'Ley 24.766: Excepciones por patentes, dominio público y salud pública (Arts. 8, 9 y 10).',
    'Ley 24.766: Acciones legales y responsabilidad de funcionarios (Arts. 11, 12 y 13).'
  ]
};

// ==========================================
// UNIDAD 6 (NUEVA)
// ==========================================
const unit6 = {
  title: 'Buenas Prácticas de Distribución (Disp. BPD ANMAT)',
  intro: 'Examen de nivel universitario. Evaluá la legalidad de los siguientes escenarios logísticos y operativos según las exigencias de la Disposición de Buenas Prácticas de Distribución de Medicamentos de la ANMAT.',
  items: [
    {
      text: 'Una empresa distribuidora mayorista de medicamentos decide abrir un anexo en su establecimiento para realizar la dispensa directa al público de venta libre.',
      correct: false,
      explanation: 'Falso. El alcance de las Buenas Prácticas de Distribución abarca almacenamiento, distribución y transporte, pero excluye expresamente la dispensa al público[cite: 28, 50].'
    },
    {
      text: 'El farmacéutico director técnico de una distribuidora toma licencia por vacaciones y delega tanto sus funciones operativas como sus responsabilidades legales al gerente general del depósito.',
      correct: false,
      explanation: 'Falso. La normativa establece que el director técnico podrá delegar funciones, pero no responsabilidades[cite: 34].'
    },
    {
      text: 'Una farmacia devuelve un lote intacto y no vencido al distribuidor. Al constatar visualmente el buen estado, un operario de depósito lo reingresa de inmediato al stock distribuible para cubrir un pedido pendiente.',
      correct: false,
      explanation: 'Falso. Todo producto devuelto debe segregarse[cite: 45]. Solo puede reingresar al stock distribuible tras ser evaluado, confirmado y aprobado su reingreso por el director técnico de la firma[cite: 45].'
    },
    {
      text: 'El distribuidor recibe la devolución de un medicamento que previamente fue informado al Sistema Nacional de Trazabilidad (SNT) como "dispensado a paciente". Como la caja está cerrada, el DT aprueba su reingreso al stock.',
      correct: false,
      explanation: 'Falso. La norma prohíbe estrictamente que los productos informados al SNT como dispensados a paciente sean reingresados al stock de productos distribuibles[cite: 43].'
    },
    {
      text: 'Para maximizar el espacio en el depósito climatizado, el distribuidor almacena cajas pesadas de soluciones parenterales directamente sobre el piso y apiladas contra las paredes exteriores.',
      correct: false,
      explanation: 'Falso. El punto 6.3.5 indica explícitamente que los productos no deben estar en contacto con el piso y/o paredes, y deben mantenerse a una distancia adecuada de los techos[cite: 41].'
    },
    {
      text: 'El depósito cuenta con cámaras frigoríficas conectadas a la red eléctrica local, pero carece de un generador alternativo, asumiendo el riesgo dado que los cortes de energía son muy infrecuentes en esa zona.',
      correct: false,
      explanation: 'Falso. Los equipos frigoríficos destinados a cadena de frío deben poseer obligatoriamente una red alternativa de suministro energético (generador) para atender eventuales fallas de energía[cite: 39].'
    },
    {
      text: 'Durante la jornada laboral, un operario anota la recepción de mercadería en un borrador de papel y, al finalizar la semana, ingresa todos los datos juntos al sistema informático de calidad.',
      correct: false,
      explanation: 'Falso. El sistema de calidad debe asegurar que los registros se efectúen al momento de realizar las actividades (registros en tiempo real)[cite: 30, 34].'
    },
    {
      text: 'Al identificar un lote de medicamentos con sospecha de falsificación durante el ingreso, el personal los segrega inmediatamente en un área identificada y el DT notifica a la Autoridad Sanitaria.',
      correct: true,
      explanation: 'Correcto. Frente a sospechas de falsificación, los medicamentos deben ser separados e identificados, y el director técnico debe notificar inmediatamente a la Autoridad Sanitaria[cite: 46].'
    },
    {
      text: 'El distribuidor contrata a una empresa transportista tercerizada. Aunque se firma un contrato, el distribuidor asume la obligación de informar al transportista sobre las condiciones de temperatura requeridas.',
      correct: true,
      explanation: 'Correcto. En actividades tercerizadas de transporte, el distribuidor es responsable de informar a los transportistas sobre las condiciones requeridas para los productos[cite: 48].'
    },
    {
      text: 'Un medicamento de cadena de frío queda retenido temporalmente en un depósito de trasbordo (cross-docking). Dicho depósito aloja los medicamentos en un equipo frigorífico exclusivo, con monitoreo y registro constante de temperatura calibrado.',
      correct: true,
      explanation: 'Correcto. La normativa exige que en depósitos de trasbordo, los productos de cadena de frío deben utilizar un equipo frigorífico de uso exclusivo, con monitoreo constante y calibrado[cite: 49].'
    },
    {
      text: 'Antes de habilitar una nueva área de almacenamiento, la empresa realiza un mapeo térmico inicial en condiciones representativas para detectar los puntos críticos y ubicar allí los registradores de temperatura.',
      correct: true,
      explanation: 'Correcto. Se debe elaborar un registro de la temperatura inicial para determinar las zonas de mayor fluctuación y puntos críticos, ubicando los equipos en función de dichos registros[cite: 38].'
    },
    {
      text: 'El distribuidor decide suspender su programa interno de auto-inspecciones, reemplazándolo exclusivamente por una auditoría externa anual llevada a cabo por una consultora internacional especializada.',
      correct: false,
      explanation: 'Falso. Las BPD establecen que las auditorías realizadas por expertos externos pueden ser útiles, pero en ningún caso podrán reemplazar las auto-inspecciones impartidas por la propia empresa[cite: 47].'
    }
  ],
  legalRefs: [
    'BPD ANMAT (Alcance y Sistema de Calidad): Puntos 3 y 1.2[cite: 28, 30].',
    'BPD ANMAT (Dirección Técnica, Instalaciones y Cadena de frío): Puntos 4.3, 5.2 a 5.5[cite: 34, 38, 39].',
    'BPD ANMAT (Operaciones, SNT y Devoluciones): Puntos 6.3, 6.8 y 8.2[cite: 41, 43, 45].',
    'BPD ANMAT (Auto-inspecciones y Transporte): Puntos 9.2 y 10.2 a 10.3[cite: 47, 48, 49].'
  ]
};

// ==========================================
// UNIDAD 7
// ==========================================
const unit7 = {
  title: 'Buenas Prácticas de Fabricación (Disp. 4159 - Parte A, Cap. 1 al 10)',
  intro: 'Examen de nivel universitario. Evaluá la legalidad y el cumplimiento de los siguientes escenarios de producción, control de calidad, almacenamiento, documentación y gestión en la industria farmacéutica según la Disposición ANMAT 4159 (Páginas 1 a 54).',
  items: [
    {
      text: 'Una planta farmacéutica decide realizar la revisión periódica de la calidad de sus productos cada dos años en lugar de anualmente para optimizar recursos administrativos.',
      correct: false,
      explanation: 'Falso. Las revisiones de calidad deben hacerse y documentarse por lo general anualmente para verificar la consistencia del proceso y destacar cualquier tendencia[cite: 184].'
    },
    {
      text: 'En el organigrama de la empresa, la misma persona ejerce simultáneamente las responsabilidades de jefe de producción y de jefe de control de calidad para agilizar los procesos de liberación.',
      correct: false,
      explanation: 'Falso. Los responsables de producción, control de calidad y garantía de calidad deben ser totalmente independientes entre sí[cite: 186].'
    },
    {
      text: 'Debido a que los límites de residuos relevantes de un principio activo altamente sensibilizante no pueden determinarse satisfactoriamente por un método analítico validado, el laboratorio fabrica el producto en instalaciones dedicadas.',
      correct: true,
      explanation: 'Correcto. Se requieren instalaciones dedicadas cuando los límites de residuos relevantes no pueden determinarse por un método analítico validado, o el riesgo no puede controlarse adecuadamente[cite: 190, 191].'
    },
    {
      text: 'Un operario comete un error al registrar un dato numérico en una guía de fabricación en papel, por lo que utiliza corrector líquido (liquid paper) por encima y escribe el valor correcto.',
      correct: false,
      explanation: 'Falso. Los documentos no deben estar escritos a mano de forma incorrecta y cualquier modificación debe firmarse y fecharse sin impedir la lectura del dato inicial[cite: 196].'
    },
    {
      text: 'El establecimiento procede a destruir los registros completos de fabricación de un lote específico transcurridos exactamente seis meses desde su fecha de caducidad.',
      correct: false,
      explanation: 'Falso. La documentación de un lote debe conservarse hasta, al menos, un año después de la fecha de caducidad del lote[cite: 196].'
    },
    {
      text: 'En las zonas de almacenamiento, los operarios rotan las existencias aplicando estrictamente la regla "primero vence, primero sale" (FEFO).',
      correct: true,
      explanation: 'Correcto. Todos los materiales y productos deben almacenarse ordenadamente para permitir la separación de lotes y la rotación de las existencias mediante la regla FEFO[cite: 203].'
    },
    {
      text: 'Para aprovechar sobrantes, el jefe de producción decide incorporar un lote anterior en un lote nuevo en una fase determinada. Lo hace como medida excepcional preautorizada, tras una evaluación de riesgos que incluye el efecto en la caducidad.',
      correct: true,
      explanation: 'Correcto. La recuperación debe ser una medida excepcional autorizada de antemano, siguiendo un procedimiento definido tras evaluar los riesgos, incluyendo su efecto en la caducidad[cite: 211, 212].'
    },
    {
      text: 'Una vez comercializado un medicamento, el laboratorio implementa un programa continuo de estudios de estabilidad en curso para comprobar que el producto cumple con las especificaciones durante su período de validez.',
      correct: true,
      explanation: 'Correcto. El propósito de los estudios de estabilidad en curso (on-going) es controlar el producto durante su período de validez bajo las condiciones de almacenamiento establecidas[cite: 216].'
    },
    {
      text: 'Un laboratorio contratante delega el envasado de un producto a un agente contratado. Por un exceso de demanda, el contratado decide subcontratar a una tercera empresa una parte del trabajo sin consultar al contratante original.',
      correct: false,
      explanation: 'Falso. El agente contratado no subcontratará a un tercero ninguna parte del trabajo que le haya sido confiado por contrato sin previa evaluación y aprobación[cite: 220].'
    },
    {
      text: 'Al confirmarse un defecto de calidad en un lote de comprimidos, el director técnico ordena evaluar de inmediato si es necesario comprobar otros lotes que puedan contener partes del lote defectuoso.',
      correct: true,
      explanation: 'Correcto. Si se descubre o sospecha un defecto de calidad, habrá que considerar si es necesario comprobar otros lotes, particularmente aquellos que contengan partes del lote defectuoso[cite: 222].'
    }
  ],
  legalRefs: [
    'Disp. ANMAT 4159 (Cap. 1 y 2): Sistema de Calidad Farmacéutico, Revisión anual y Personal clave[cite: 180, 184, 186].',
    'Disp. ANMAT 4159 (Cap. 3 y 4): Instalaciones dedicadas, Control de áreas y Buenas prácticas de documentación[cite: 180, 190, 196].',
    'Disp. ANMAT 4159 (Cap. 5 y 6): Producción, Rotación FEFO, Recuperación y Estudios de estabilidad en curso[cite: 180, 203, 211, 216].',
    'Disp. ANMAT 4159 (Cap. 7 y 8): Actividades tercerizadas, Reclamos y Defectos de calidad[cite: 180, 220, 222].'
  ]
};

// ==========================================
// UNIDAD 8
// ==========================================
const unit8 = {
  title: 'Buenas Prácticas de Farmacovigilancia (Disp. ANMAT 5358/12)',
  intro: 'Examen de nivel universitario. Evaluá la legalidad y el cumplimiento normativo de los siguientes escenarios vinculados a la farmacovigilancia, gestión de riesgos, informes periódicos y eventos en vacunación según la Disposición ANMAT 5358/12.',
  items: [
    {
      text: 'Ante la notificación de una sospecha de reacción adversa seria que resultó en la muerte de un paciente, el Titular de Autorización de Registro y Comercialización (TARC) cuenta con un plazo de hasta 15 días corridos para notificarlo al Departamento de Farmacovigilancia de la ANMAT.',
      correct: false,
      explanation: 'Falso. Las sospechas de reacciones adversas serias deben notificarse dentro de los 15 días corridos, pero en caso de muerte o amenaza de vida, el plazo se reduce a 7 días corridos desde la recepción de la información[cite: 315].'
    },
    {
      text: 'Un laboratorio detecta una señal de seguridad relevante en uno de sus productos y decide difundir un comunicado preventivo a los profesionales de la salud, notificando a la ANMAT en forma simultánea al momento de su publicación.',
      correct: false,
      explanation: 'Falso. El TARC debe abstenerse de comunicar cuestiones de farmacovigilancia al público y profesionales sin haberlo comunicado previamente a la ANMAT con al menos 24 horas de antelación[cite: 316].'
    },
    {
      text: 'Una mujer embarazada es expuesta a una especialidad medicinal, pero el hecho no genera ningún tipo de evento adverso ni anomalía. El laboratorio decide no reportarlo por tratarse de un consumo sin consecuencias clínicas.',
      correct: false,
      explanation: 'Falso. Es obligatorio notificar al Departamento de Farmacovigilancia de la ANMAT cuando se detecte que una mujer embarazada es expuesta a un medicamento, aun cuando no se produzca un evento adverso[cite: 315].'
    },
    {
      text: 'Para un medicamento que lleva un año en el mercado argentino, el laboratorio presenta su Informe Periódico de Actualización de Seguridad (IPAS) con una frecuencia anual.',
      correct: false,
      explanation: 'Falso. La periodicidad estándar exige presentar los IPAS semestralmente durante los dos primeros años tras el inicio de la comercialización[cite: 320].'
    },
    {
      text: 'El Responsable de Farmacovigilancia (RFV) debidamente comunicado ante la autoridad sanitaria actúa como el único interlocutor válido en términos de farmacovigilancia ante el Departamento de Farmacovigilancia de la ANMAT[cite: 316].',
      correct: true,
      explanation: 'Correcto. El RFV es el único interlocutor válido ante la ANMAT y debe proporcionar su nombre, teléfonos y dirección electrónica de contacto[cite: 316].'
    },
    {
      text: 'Un ESAVI (Evento Supuestamente Atribuible a la Vacunación e Inmunización) provocado porque el vacunador aplicó la vacuna por una vía de administración diferente a la establecida se clasifica como un evento relacionado con un error programático (operativo del programa), el cual resulta prevenible[cite: 327].',
      correct: true,
      explanation: 'Correcto. Los errores en la preparación, manejo o administración (como usar una vía incorrecta o inyecciones no estériles) constituyen errores programáticos prevenibles[cite: 327].'
    },
    {
      text: 'Con respecto a la vigilancia de vacunas, el TARC debe enviar al Sistema Nacional de Farmacovigilancia de la ANMAT la información sobre eventos adversos serios dentro de las 72 horas desde su conocimiento[cite: 329].',
      correct: true,
      explanation: 'Correcto. Los eventos serios de vacunas deben ser enviados al Sistema Nacional de Farmacovigilancia en un plazo de 72 horas desde su conocimiento por parte del TARC[cite: 329].'
    },
    {
      text: 'El Plan de Gestión de Riesgo (PGR) se divide en dos partes: la Parte I, que incluye las especificaciones de seguridad y el plan de farmacovigilancia, y la Parte II, que evalúa la necesidad de actividades de minimización de riesgos[cite: 323].',
      correct: true,
      explanation: 'Correcto. La estructura del PGR formaliza en su Parte I las especificaciones de seguridad y el plan de farmacovigilancia, y en su Parte II la evaluación y planes de minimización de riesgos[cite: 323].'
    },
    {
      text: 'Para que una notificación de sospecha de reacción adversa sea aceptada como reporte válido con la mínima información indispensable, se requiere únicamente el nombre de la droga y el resultado final del paciente.',
      correct: false,
      explanation: 'Falso. La información mínima indispensable consiste en: fecha de comienzo del evento adverso, fecha de comienzo de administración de la medicación sospechosa, edad del paciente, descripción completa del evento y nombre de la droga (DCA y marca)[cite: 315].'
    },
    {
      text: 'Las notificaciones de reportes no serios de reacciones adversas deben ser remitidas por los laboratorios al Departamento de Farmacovigilancia de la ANMAT por vía electrónica de manera anual.',
      correct: false,
      explanation: 'Falso. Las notificaciones de reportes no serios deben enviarse por vía electrónica de manera bimestral utilizando el formulario correspondiente[cite: 315].'
    }
  ],
  legalRefs: [
    'Disp. ANMAT 5358/12 (Cap. 1): Responsabilidades del TARC, plazos de notificación (7 días para muertes, 15 días para serios), exposiciones en embarazos y prohibición de comunicación previa de 24 horas[cite: 315, 316].',
    'Disp. ANMAT 5358/12 (Cap. 1.2 y 1.3): Funciones del Responsable de Farmacovigilancia (RFV) como único interlocutor y organización del área[cite: 316, 317].',
    'Disp. ANMAT 5358/12 (Cap. 2): Informes Periódicos de Actualización de Seguridad (IPAS) y su periodicidad estándar semestral/anual/trianual[cite: 320].',
    'Disp. ANMAT 5358/12 (Cap. 3): Planes de Gestión de Riesgo (PGR), Partes I y II, y especificaciones de seguridad[cite: 323].',
    'Disp. ANMAT 5358/12 (Cap. 4): Farmacovigilancia en vacunas, clasificación de ESAVI (errores programáticos, eventos relacionados/coincidentes) y plazos de reporte serio (72 horas)[cite: 327, 328, 329].'
  ]
};

// ==========================================
// CONTROLADOR CENTRAL
// ==========================================

// ==========================================
// CONTROLADOR CENTRAL
// ==========================================
const unitsData = {
  1: unit1,
  2: unit2,
  3: unit3,
  4: unit4,
  5: unit5,
  6: unit6,
  7: unit7,
  8: unit8
};

let currentUnit = 1;
let answers = {};

// LÓGICA DEL MENÚ MÓVIL
const mobileNavToggle = document.getElementById('mobileNavToggle');
const unitIndexNav = document.getElementById('unitIndex');
const mobileNavCurrent = document.getElementById('mobileNavCurrent');

if (mobileNavToggle) {
  mobileNavToggle.addEventListener('click', function() {
    unitIndexNav.classList.toggle('show');
    const isExpanded = unitIndexNav.classList.contains('show');
    mobileNavToggle.setAttribute('aria-expanded', isExpanded);
  });
}

function renderSidebar(){
  const nav = document.getElementById('unitIndex');
  let html = '';
  for(let n = 1; n <= TOTAL_UNITS; n++){
    const activeClass = n === currentUnit ? 'active' : '';
    const label = String(n).padStart(2, '0');
    html += '<button data-unit="' + n + '" class="' + activeClass + '">'
          + '<span class="num">' + label + '</span> Unidad ' + n
          + '</button>';
  }
  nav.innerHTML = html;
  
  // Actualizar el texto del botón móvil con la unidad actual
  if (mobileNavCurrent) {
    mobileNavCurrent.innerText = 'Unidad ' + currentUnit;
  }

  nav.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(){
      currentUnit = Number(btn.dataset.unit);
      answers = {};
      
      // Cerrar menú móvil al seleccionar unidad
      if (unitIndexNav.classList.contains('show')) {
        unitIndexNav.classList.remove('show');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      }

      renderSidebar();
      renderContent();
    });
  });
}

function buildUnitHtml(unitNum){
  const unit = unitsData[unitNum];
  const total = unit.items.length;
  const answeredKeys = Object.keys(answers);
  const correctCount = answeredKeys.filter(function(idx){
    return answers[idx] === unit.items[idx].correct;
  }).length;

  const itemsHtml = unit.items.map(function(item, idx){
    const answered = Object.prototype.hasOwnProperty.call(answers, idx);
    const userVal = answers[idx];
    let resultHtml = '';
    if(answered){
      const isRight = userVal === item.correct;
      const stampClass = item.correct ? 'ok' : 'bad';
      const stampLabel = item.correct ? 'Ajustado a la normativa' : 'Infracción';
      const verdict = isRight ? 'Coincidiste con la normativa.' : 'No coincidiste: revisá el fundamento.';
      resultHtml = '<div class="item-result">'
        + '<span class="stamp ' + stampClass + '">' + stampLabel + '</span>'
        + '<p class="result-text"><span class="verdict">' + verdict + '</span>' + item.explanation + '</p>'
        + '</div>';
    }
    const trueSelected = answered && userVal === true ? 'selected-true' : '';
    const falseSelected = answered && userVal === false ? 'selected-false' : '';
    const disabledAttr = answered ? 'disabled' : '';
    return '<li class="item" data-idx="' + idx + '">'
      + '<div class="item-row">'
      + '<p class="item-text"><span class="item-num">' + (idx + 1) + '</span>' + item.text + '</p>'
      + '<div class="item-actions">'
      + '<button data-val="true" class="' + trueSelected + '" ' + disabledAttr + '>Cumple</button>'
      + '<button data-val="false" class="' + falseSelected + '" ' + disabledAttr + '>No cumple</button>'
      + '</div></div>' + resultHtml + '</li>';
  }).join('');

  const refsHtml = unit.legalRefs.map(function(r){ return '<li>' + r + '</li>'; }).join('');

  return '<p class="unit-label">Unidad ' + unitNum + '</p>'
    + '<h2 class="unit-title">' + unit.title + '</h2>'
    + '<p class="unit-intro">' + unit.intro + '</p>'
    + '<div class="score-bar" aria-live="polite">'
    + '<div class="stat"><strong>' + answeredKeys.length + '/' + total + '</strong><span>situaciones revisadas</span></div>'
    + '<div class="stat"><strong>' + correctCount + '</strong><span>coincidencias con la normativa</span></div>'
    + '</div>'
    + '<ul class="item-list">' + itemsHtml + '</ul>'
    + '<div class="legal-summary"><h3>Para repasar</h3><ul>' + refsHtml + '</ul></div>'
    + '<button class="reset-btn" id="resetBtn">Reiniciar ejercicio</button>';
}

function buildPlaceholderHtml(n){
  return '<p class="unit-label">Unidad ' + n + '</p>'
    + '<h2 class="unit-title">Contenido en preparación</h2>'
    + '<div class="placeholder">'
    + '<p>Todavía no se cargó el escenario de esta unidad.</p>'
    + '<p>Compartí el tema del programa que corresponde a la Unidad ' + n + ' y se puede armar un ejercicio con el mismo formato que la Unidad 1.</p>'
    + '</div>';
}

function attachUnitListeners(){
  document.querySelectorAll('.item-actions button').forEach(function(btn){
    btn.addEventListener('click', function(e){
      const li = e.target.closest('li.item');
      const idx = li.dataset.idx;
      answers[idx] = e.target.dataset.val === 'true';
      renderContent();
    });
  });
  const resetBtn = document.getElementById('resetBtn');
  if(resetBtn){
    resetBtn.addEventListener('click', function(){
      answers = {};
      renderContent();
    });
  }
}

function renderContent(){
  const content = document.getElementById('content');
  if(unitsData[currentUnit]){
    content.innerHTML = buildUnitHtml(currentUnit);
    attachUnitListeners();
  } else {
    content.innerHTML = buildPlaceholderHtml(currentUnit);
  }
}

renderSidebar();
renderContent();
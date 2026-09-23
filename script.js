const TOTAL_UNITS = 11;

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

const unitsData = {
  1: unit1,
  2: unit2
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
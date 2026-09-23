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

let currentUnit = 1;
let answers = {};

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
  nav.querySelectorAll('button').forEach(function(btn){
    btn.addEventListener('click', function(){
      currentUnit = Number(btn.dataset.unit);
      answers = {};
      renderSidebar();
      renderContent();
    });
  });
}

function buildUnit1Html(){
  const total = unit1.items.length;
  const answeredKeys = Object.keys(answers);
  const correctCount = answeredKeys.filter(function(idx){
    return answers[idx] === unit1.items[idx].correct;
  }).length;

  const itemsHtml = unit1.items.map(function(item, idx){
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

  const refsHtml = unit1.legalRefs.map(function(r){ return '<li>' + r + '</li>'; }).join('');

  return '<p class="unit-label">Unidad 1</p>'
    + '<h2 class="unit-title">' + unit1.title + '</h2>'
    + '<p class="unit-intro">' + unit1.intro + '</p>'
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

function attachUnit1Listeners(){
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
  if(currentUnit === 1){
    content.innerHTML = buildUnit1Html();
    attachUnit1Listeners();
  } else {
    content.innerHTML = buildPlaceholderHtml(currentUnit);
  }
}

renderSidebar();
renderContent();
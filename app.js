// https://calculator.swiftutors.com/ecpm-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const effectiveCostPerThousandRadio = document.getElementById('effectiveCostPerThousandRadio');
const totalViewsRadio = document.getElementById('totalViewsRadio');
const revenueGeneratedRadio = document.getElementById('revenueGeneratedRadio');

let effectiveCostPerThousand;
let totalViews = v1;
let revenueGenerated = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

effectiveCostPerThousandRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Views';
  variable2.textContent = 'Revenue Generated ($)';
  totalViews = v1;
  revenueGenerated = v2;
  result.textContent = '';
});

totalViewsRadio.addEventListener('click', function() {
  variable1.textContent = '(eCPM) Effective Cost Per Thousand ($)';
  variable2.textContent = 'Revenue Generated ($)';
  effectiveCostPerThousand = v1;
  revenueGenerated = v2;
  result.textContent = '';
});

revenueGeneratedRadio.addEventListener('click', function() {
  variable1.textContent = '(eCPM) Effective Cost Per Thousand ($)';
  variable2.textContent = 'Total Views';
  effectiveCostPerThousand = v1;
  totalViews = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(effectiveCostPerThousandRadio.checked)
    result.textContent = `Effective Cost Per Thousand = ${computeEffectiveCostPerThousand().toFixed(2)} $`;

  else if(totalViewsRadio.checked)
    result.textContent = `Total Views = ${computeTotalViews().toFixed(2)}`;

  else if(revenueGeneratedRadio.checked)
    result.textContent = `Revenue Generated = ${computeRevenueGenerated().toFixed(2)} $`;
})

// calculation

function computeEffectiveCostPerThousand() {
  return (Number(revenueGenerated.value) / Number(totalViews.value)) * 1000;
}

function computeRevenueGenerated() {
  return (Number(effectiveCostPerThousand.value) / 1000) * Number(totalViews.value);
}

function computeTotalViews() {
  return Number(revenueGenerated.value) / (Number(effectiveCostPerThousand.value) / 1000);
}
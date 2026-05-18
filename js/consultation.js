const cs = document.getElementById('customSelect');
const csSelected = document.getElementById('csSelected');
const csLabel = document.getElementById('csLabel');
const hiddenInput = document.getElementById('service');

csSelected.addEventListener('click', () => cs.classList.toggle('open'));

document.querySelectorAll('.cs-option').forEach(opt => {
  opt.addEventListener('click', () => {
    hiddenInput.value = opt.dataset.value;
    csLabel.textContent = opt.textContent;
    csSelected.classList.add('has-value');
    document.querySelectorAll('.cs-option').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
    cs.classList.remove('open');
  });
});

document.addEventListener('click', e => { if (!cs.contains(e.target)) cs.classList.remove('open'); });

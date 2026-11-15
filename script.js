const theme = document.querySelector('#theme');
try { document.body.classList.toggle('dark', localStorage.getItem('theme') === 'dark'); } catch {}
function themeLabel(){ theme.setAttribute('aria-label', document.body.classList.contains('dark') ? 'Switch to light theme' : 'Switch to dark theme'); }
themeLabel();
theme.addEventListener('click',()=>{document.body.classList.toggle('dark');themeLabel();try{localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light');}catch{}});
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}));
let year='all';const expanded=new Set(),search=document.querySelector('#pub-search');
function filterPublications(){let total=0;const q=search.value.trim().toLocaleLowerCase();document.querySelectorAll('.pub-group').forEach(group=>{const all=[...group.querySelectorAll('.pub')],matches=all.filter(p=>(year==='all'||p.dataset.year===year)&&(!q||p.textContent.toLocaleLowerCase().includes(q)));total+=matches.length;all.forEach(p=>p.hidden=true);const limit=expanded.has(group.dataset.group)?matches.length:6;matches.slice(0,limit).forEach(p=>p.hidden=false);group.hidden=!matches.length;group.querySelector('.count-badge').textContent=matches.length+' '+(matches.length===1?'entry':'entries');const more=group.querySelector('.group-more');more.hidden=matches.length<=6;more.textContent=expanded.has(group.dataset.group)?'Show fewer entries':'Show all '+matches.length+' entries';more.setAttribute('aria-expanded',String(expanded.has(group.dataset.group)));});document.querySelector('#results').textContent=total+' '+(total===1?'entry':'entries')+(year==='all'?' across all years':' in '+year);}
document.querySelectorAll('[data-year].active,button[data-year]').forEach(button=>{if(button.tagName!=='BUTTON')return;button.setAttribute('aria-pressed',String(button.dataset.year===year));button.addEventListener('click',()=>{year=button.dataset.year;expanded.clear();document.querySelectorAll('button[data-year]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});filterPublications();});});
search.addEventListener('input',()=>{expanded.clear();filterPublications();});
document.querySelectorAll('.group-more').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.expand;expanded.has(key)?expanded.delete(key):expanded.add(key);filterPublications();}));filterPublications();
const links=[...nav.querySelectorAll('a')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+entry.target.id));});},{rootMargin:'-15% 0px -65% 0px'});
links.forEach(a=>{const section=document.querySelector(a.hash);if(section)observer.observe(section);});

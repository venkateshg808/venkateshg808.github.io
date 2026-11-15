const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation')}));const theme=document.querySelector('#theme');function setTheme(dark){document.body.classList.toggle('dark',dark);theme.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');theme.setAttribute('aria-pressed',String(dark))}try{setTheme(localStorage.getItem('vg-theme')==='dark')}catch{}theme.addEventListener('click',()=>{const dark=!document.body.classList.contains('dark');setTheme(dark);try{localStorage.setItem('vg-theme',dark?'dark':'light')}catch{}});const papers=[...document.querySelectorAll('.pub')];
const filters=[...document.querySelectorAll('.filters button')];
const search=document.querySelector('#pub-search'),more=document.querySelector('#show-more');
let category='all',limit=8;
function updatePublications(){
 const query=search.value.trim().toLowerCase();
 const matched=papers.filter(p=>(category==='all'||p.dataset.category===category)&&p.textContent.toLowerCase().includes(query));
 const visible=new Set(matched.slice(0,limit));
 papers.forEach(p=>p.hidden=!visible.has(p));
 document.querySelector('#results').textContent=`Showing ${visible.size} of ${matched.length} ${matched.length===1?'entry':'entries'}`;
 more.hidden=matched.length<=limit;
 more.textContent=`Show more publications (${Math.min(8,matched.length-limit)} more)`;
}
filters.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.category;limit=8;filters.forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});updatePublications()}));
search.addEventListener('input',()=>{limit=8;updatePublications()});
more.addEventListener('click',()=>{limit+=8;updatePublications()});
updatePublications();

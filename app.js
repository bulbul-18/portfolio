(()=>{const ids=['intro','about','projects','skills','record','contact'],secs=ids.map(i=>document.getElementById(i)).filter(Boolean),nav=[...document.querySelectorAll('.side a')];
if(!secs.length)return;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)nav.forEach(a=>a.classList.toggle('on',a.hash==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});secs.forEach(x=>io.observe(x));
const dark=[document.getElementById('intro'),document.getElementById('contact')].filter(Boolean);
function tone(){const rs=dark.map(e=>e.getBoundingClientRect()),y=n=>rs.some(r=>r.top<=n&&r.bottom>n);document.body.classList.toggle('dk-n',y(innerHeight/2));document.body.classList.toggle('dk-t',y(40))}
addEventListener('scroll',tone,{passive:true});addEventListener('resize',tone);tone()})();

((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={
ka(d){return new B.ar(d,null)},
ar:function ar(d,e){this.c=d
this.a=e},
d7:function d7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=_.r=_.f=null},
eM:function eM(d){this.a=d},
eL:function eL(d){this.a=d},
bp:function bp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
mn(a9,b0,b1,b2,b3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=new B.hj(new B.dz(D.is(b1)*1e4+D.ir(b1)*100+D.iq(b1)>>>0)),a6=C.b.bg(b2,b0),a7=C.b.a0(b2,b0),a8=A.e([],y.W)
for(x=-2;x<=2;++x)for(w=a6+x,v=x===0,u=w<0,t=x*x,s=-2;s<=2;++s){if(s===0&&v)continue
r=a7+s
if(r<0||r>=b0||u)continue
q=b3.l(0,w*b0+r)
if(q!=null)C.a.k(a8,new A.P(q,s*s+t))}v=y.C
u=A.hx(v)
for(t=a8.length,p=0;p<a8.length;a8.length===t||(0,A.a0)(a8),++p){o=a8[p]
if(o.b<=2)u.k(0,o.a)}n=A.X(v,y.S)
for(v=new A.at(b3,b3.r,b3.e,A.h(b3).h("at<2>"));v.j();){t=v.d
o=n.l(0,t)
n.q(0,t,(o==null?0:o)+1)}v=A.be(a9,y.E)
for(t=v.length,m=t-1;m>0;--m){l=a5.$1(m+1)
t=v.length
if(!(m<t))return A.j(v,m)
k=v[m]
if(l>>>0!==l||l>=t)return A.j(v,l)
v[m]=v[l]
v[l]=k}for(o=y.a,p=0;p<v.length;v.length===t||(0,A.a0)(v),++p){j=v[p]
i=A.e([],o)
for(h=j.b,g=j.a,f=0;f<9;++f){e=h[f]
if(!u.W(0,new D.a8(g,e)))i.push(new D.a8(g,e))}if(i.length===0)continue
d=new B.hk(a8)
a0=A.e([],o)
for(v=i.length,a1=null,p=0;p<i.length;i.length===v||(0,A.a0)(i),++p){q=i[p]
u=n.l(0,q)
u=-(u==null?0:u)
t=d.$1(q)
a2=new A.P(u,t)
a3=!0
if(a1!=null){h=a1.a
if(u<=h){u=u===h&&t>a1.b
a3=u}}if(a3){a0=A.e([q],o)
a1=a2}else if(a2.C(0,a1))C.a.k(a0,q)}return C.a.l(a0,a5.$1(a0.length))}a4=C.a.gbI(a9)
return new D.a8(a4.a,C.a.l(a4.b,a5.$1(9)))},
cd:function cd(d,e){this.a=d
this.b=e},
hj:function hj(d){this.a=d},
hk:function hk(d){this.a=d},
dz:function dz(d){this.a=d}},E,D,F
A=c[0]
C=c[2]
B=a.updateHolder(c[3],B)
E=c[6]
D=c[5]
F=c[7]
B.ar.prototype={
bF(){return new B.d7(E.M)}}
B.d7.prototype={
b3(){var x=this
x.c8()
x.bt(!0)
x.r=A.hG(A.q(b.G.window),"resize",y.v.a(new B.eM(x)),!1,y.m)},
b2(){var x=this.r
if(x!=null)x.ar()
this.c7()},
bt(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=1000,g=b.G
this.f=A.Y(A.q(g.window).innerWidth)
x=A.B(A.q(g.document).querySelector(".garden"))
w=x==null?null:A.Y(x.clientWidth)
if(w==null)w=0
v=A.b3(A.q(A.q(g.window).matchMedia("(max-width: 560px)")).matches)
u=Math.max(6,C.b.bg(w,v?34:44))
t=u*(v?7:5)
s=new B.dz(7)
r=A.X(y.S,y.C)
q=A.e([],y.i)
for(g=t-1,x=y.y,p=0;p<t;++p)if(p===g)C.a.k(q,E.ae)
else if(s.aw()<0.72){o=$.jt()
n=864e8*p
m=C.b.a0(n,h)
l=C.b.aX(n-m,h)
k=o.b+m
j=C.b.a0(k,h)
o=D.k1(o.a+C.b.aX(k-j,h)+l,j,!0)
i=B.mn(A.e([$.jL()],x),u,new D.aE(o,j,!0),p,r)
r.q(0,p,i)
o=C.j.bK(s.aw()*6)
if(!(o>=0&&o<6))return A.j(F.h,o)
C.a.k(q,new B.bp(i,F.h[o],C.b.a0(p,u)*40+C.j.bQ(s.aw()*260),!1))}else C.a.k(q,E.af)
this.d=q
this.e=d},
G(d){var x,w,v,u,t,s,r,q,p,o,n,m=null,l=this.e?"garden planting":"garden",k=this.a.c==="vi"?F.q:F.r,j=y.N
k=A.ac(["role","img","aria-label",k.z],j,j)
x=y.V
w=A.e([],x)
for(v=this.d,u=v.length,t=0;t<v.length;v.length===u||(0,A.a0)(v),++t){s=v[t]
r=s.d?"day today":"day"
q=A.e([],x)
p=s.a
if(p!=null){o=p.a
n=p.b
q.push(new D.cN(D.hM(A.ac(["color","var(--"+s.b+")","--delay",""+s.c+"ms"],j,j)),A.ac(["aria-hidden","true"],j,j),A.e([new A.I("use",m,m,m,A.ac(["href","#"+(o+"-"+n)],j,j),m,m,m)],x),m))}w.push(new D.cM(r,m,m,q,m))}return D.hW(w,k,l,m)}}
B.bp.prototype={}
B.cd.prototype={}
B.dz.prototype={
aw(){var x=this.a=this.a+1831565813>>>0,w=((x^x>>>15)>>>0)*((x|1)>>>0)>>>0
w=w+(((w^w>>>7)>>>0)*((w|61)>>>0)>>>0)>>>0^w
return((w^w>>>14)>>>0)/4294967296}}
var z=a.updateTypes(["a(a8)"])
B.eM.prototype={
$1(d){var x=this.a
if(A.Y(A.q(b.G.window).innerWidth)!==x.f)x.bb(new B.eL(x))},
$S:3}
B.eL.prototype={
$0(){return this.a.bt(!1)},
$S:0}
B.hj.prototype={
$1(d){return C.b.cH(C.j.bK(this.a.aw()*d),0,d-1)},
$S:37}
B.hk.prototype={
$1(d){var x,w,v,u,t,s
for(x=this.a,w=x.length,v=9,u=0;u<w;++u){t=x[u]
s=t.b
if(t.a.C(0,d)&&s<v)v=s}return v},
$S:z+0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.ar,D.ao)
x(B.d7,D.a6)
w(A.am,[B.eM,B.hj,B.hk])
x(B.eL,A.aP)
w(A.k,[B.bp,B.cd,B.dz])})()
A.fz(b.typeUniverse,JSON.parse('{"ar":{"ao":[],"m":[]},"d7":{"a6":["ar"],"a6.T":"ar"}}'))
var y=(function rtii(){var x=A.C
return{C:x("a8"),a:x("n<a8>"),V:x("n<m>"),W:x("n<+(a8,a)>"),y:x("n<cd>"),i:x("n<bp>"),m:x("o"),E:x("cd"),N:x("b"),S:x("a"),v:x("~(o)?")}})();(function constants(){var x=a.makeConstList
E.M=x([],y.i)
E.N=x(["01","04","07","11","12","16","18","22","23"],A.C("n<b>"))
E.ae=new B.bp(null,"",0,!0)
E.af=new B.bp(null,"",0,!1)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"mB","jt",()=>D.k_(2025,3,1))
x($,"n5","jL",()=>new B.cd("meadow",E.N))})()};
(a=>{a["hme/acFi3kqqP+8Pj8jn44O2sSE="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map

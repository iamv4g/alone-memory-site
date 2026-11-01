((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,A={
k_(d,e,f){var x=A.kz(d,e,f,0,0,0,0,0,!0)
return new A.aE(x==null?new A.et(d,e,f,0,0,0,0,0).$0():x,0,!0)},
k1(d,e,f){var x="microsecond"
if(e>999)throw B.d(B.c8(e,0,999,x,null))
if(d<-864e13||d>864e13)throw B.d(B.c8(d,-864e13,864e13,"millisecondsSinceEpoch",null))
if(d===864e13&&e!==0)throw B.d(B.ho(e,x,"Time including microseconds is outside valid range"))
B.h_(!0,"isUtc",y.e)
return d},
k0(d){var x=Math.abs(d),w=d<0?"-":""
if(x>=1000)return""+d
if(x>=100)return w+"0"+x
if(x>=10)return w+"00"+x
return w+"000"+x},
ie(d){if(d>=100)return""+d
if(d>=10)return"0"+d
return"00"+d},
d2(d){if(d>=10)return""+d
return"0"+d},
et:function et(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aE:function aE(d,e,f){this.a=d
this.b=e
this.c=f},
d1:function d1(d,e,f,g,h,i){var _=this
_.z=d
_.at=e
_.ax=f
_.ay=g
_.ch=h
_.CW=i},
f3:function f3(){},
a8:function a8(d,e){this.a=d
this.b=e},
hW(d,e,f,g){return new A.cM(f,g,e,d,null)},
cM:function cM(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.f=f
_.w=g
_.a=h},
cN:function cN(d,e,f,g){var _=this
_.w=d
_.x=e
_.z=f
_.a=g},
ao:function ao(){},
a6:function a6(){},
dA:function dA(d,e,f,g){var _=this
_.ry=d
_.to=null
_.x1=!1
_.c=_.b=_.a=_.cy=null
_.d=e
_.e=null
_.f=f
_.w=_.r=null
_.x=g
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
O:function O(){},
dB:function dB(d,e,f){var _=this
_.c=_.b=_.a=_.cy=_.ry=null
_.d=d
_.e=null
_.f=e
_.w=_.r=null
_.x=f
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
kz(d,e,f,g,h,i,j,k,l){var x,w,v,u=e-1
if(d<100){d+=400
u-=4800}x=D.b.a0(k,1000)
w=Date.UTC(d,u,f,g,h,i,j+D.b.aX(k-x,1000))
v=!0
if(!isNaN(w))if(!(w<-864e13))if(!(w>864e13))v=w===864e13&&x!==0
if(v)return null
return w},
bj(d){if(d.date===void 0)d.date=new Date(d.a)
return d.date},
is(d){var x=A.bj(d).getUTCFullYear()+0
return x},
ir(d){var x=A.bj(d).getUTCMonth()+1
return x},
iq(d){var x=A.bj(d).getUTCDate()+0
return x},
kv(d){var x=A.bj(d).getUTCHours()+0
return x},
kx(d){var x=A.bj(d).getUTCMinutes()+0
return x},
ky(d){var x=A.bj(d).getUTCSeconds()+0
return x},
kw(d){var x=A.bj(d).getUTCMilliseconds()+0
return x},
ms(d,e){var x=null,w=y.w
return new A.cN(e,B.ac(["aria-hidden","true"],w,w),B.e([new B.I("use",x,x,x,B.ac(["href","#"+d],w,w),x,x,x)],y.F),x)},
hM(d){var x=null
return new B.cB(x,x,x,x,d)}},C
B=c[0]
D=c[2]
A=a.updateHolder(c[5],A)
C=c[7]
A.aE.prototype={
C(d,e){var x
if(e==null)return!1
x=!1
if(e instanceof A.aE)if(this.a===e.a)x=this.b===e.b
return x},
gA(d){return B.dp(this.a,this.b,D.d,D.d)},
P(d,e){var x
y.f.a(e)
x=D.b.P(this.a,e.a)
if(x!==0)return x
return D.b.P(this.b,e.b)},
i(d){var x=this,w=A.k0(A.is(x)),v=A.d2(A.ir(x)),u=A.d2(A.iq(x)),t=A.d2(A.kv(x)),s=A.d2(A.kx(x)),r=A.d2(A.ky(x)),q=A.ie(A.kw(x)),p=x.b,o=p===0?"":A.ie(p)
return w+"-"+v+"-"+u+" "+t+":"+s+":"+r+"."+q+o+"Z"},
$ia9:1}
A.d1.prototype={}
A.f3.prototype={}
A.a8.prototype={
C(d,e){if(e==null)return!1
return e instanceof A.a8&&e.a===this.a&&e.b===this.b},
gA(d){return B.dp(this.a,this.b,D.d,D.d)},
i(d){return"CollectionSprite("+(this.a+"/"+this.b)+")"}}
A.cM.prototype={
G(d){var x=this
return new B.I("div",null,x.d,x.e,x.f,null,x.w,null)}}
A.cN.prototype={
G(d){var x=null,w=y.w
w=B.X(w,w)
w.F(0,this.x)
return new B.I("svg",x,x,this.w,w,x,this.z,x)}}
A.ao.prototype={
R(){var x=this.bF(),w=($.J+1)%16777215
$.J=w
w=new A.dA(x,w,this,D.e)
x.c=w
x.sbp(this)
return w}}
A.a6.prototype={
b3(){},
bb(d){y.k.a(d).$0()
this.c.bP()},
b2(){},
sbp(d){this.a=B.h(this).h("a6.T?").a(d)}}
A.dA.prototype={
b_(){return this.ry.G(this)},
D(){var x=this
if(x.w.c)x.ry.toString
x.cn()
x.aF()},
cn(){try{this.ry.b3()}finally{}this.ry.toString},
a_(){var x=this
x.w.toString
if(x.x1){x.ry.toString
x.x1=!1}x.bd()},
a1(d){var x
y.g.a(d)
x=this.ry
x.toString
B.h(x).h("a6.T").a(d)
return!0},
K(d){y.g.a(d)
this.aJ(d)
this.ry.sbp(d)},
a6(d){var x
y.g.a(d)
try{x=this.ry
x.toString
B.h(x).h("a6.T").a(d)}finally{}this.aH(d)},
Y(){this.ry.toString
this.c2()},
ac(){var x=this
x.aI()
x.ry.b2()
x.ry=x.ry.c=null}}
A.O.prototype={
R(){var x=($.J+1)%16777215
$.J=x
return new A.dB(x,this,D.e)}}
A.dB.prototype={
gn(){return y.i.a(B.f.prototype.gn.call(this))},
D(){if(this.w.c)this.r.toString
this.aF()},
a1(d){y.i.a(B.f.prototype.gn.call(this))
return!0},
b_(){return y.i.a(B.f.prototype.gn.call(this)).G(this)},
a_(){this.w.toString
this.bd()}}
var z=a.updateTypes([])
A.et.prototype={
$0(){var x=this
return B.cO(B.bE("("+x.a+", "+x.b+", "+x.c+", "+x.d+", "+x.e+", "+x.f+", "+x.r+", "+x.w+")",null))},
$S:36};(function aliases(){var x=A.a6.prototype
x.c8=x.b3
x.c7=x.b2})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.et,B.aP)
w(B.k,[A.aE,A.d1,A.f3,A.a6])
x(A.a8,A.f3)
w(B.m,[A.O,A.ao])
w(A.O,[A.cM,A.cN])
w(B.b9,[A.dA,A.dB])})()
B.fz(b.typeUniverse,JSON.parse('{"aE":{"a9":["aE"]},"cM":{"O":[],"m":[]},"cN":{"O":[],"m":[]},"ao":{"m":[]},"dA":{"f":[],"L":[]},"O":{"m":[]},"dB":{"f":[],"L":[]}}'))
var y={f:B.C("aE"),F:B.C("n<m>"),j:B.C("n<+(b,b)>"),x:B.C("n<b>"),g:B.C("ao"),i:B.C("O"),w:B.C("b"),e:B.C("aJ"),k:B.C("~()")};(function constants(){var x=a.makeConstList
C.K=x(["B\xecnh y\xean","Vui","Bi\u1ebft \u01a1n","Nh\u1edb nh\xe0","M\u1ec7t","H\u01a1i bu\u1ed3n"],y.x)
C.S=new B.P("M\u1ed7i n\u0103m m\u1ed9t khu v\u01b0\u1eddn","B\xf4ng hoa, c\xe2y n\u1ea5m, ch\xfa \u1ed1c s\xean, ch\xfa ong, ch\xfa chim, m\u1ed7i k\xfd \u1ee9c m\u1ed9t tinh linh.")
C.T=new B.P("Kh\xf4ng chu\u1ed7i ng\xe0y, kh\xf4ng \u0111i\u1ec3m s\u1ed1","L\u1ee1 qu\xean ng\xe0y n\xe0o? D\xf9ng h\u1ea1t \u0111\u1ec3 gieo b\xf9.")
C.X=new B.P("Nh\u1eefng c\u1ed9t m\u1ed1c","Tr\xf2n m\u1ed7i 100 ng\xe0y v\xe0 m\u1ed7i n\u0103m, m\u1ed9t l\u1eddi ch\xfac nh\u1ecf \u0111\u1ec3 b\u1ea1n chia s\u1ebb.")
C.al=x([C.S,C.T,C.X],y.j)
C.ak=x(["H\xf4m nay: b\u1ed9 \u0111\u1ebfm ng\xe0y v\xe0 c\u1ed9t m\u1ed1c k\u1ebf ti\u1ebfp","V\u01b0\u1eddn k\xfd \u1ee9c n\u0103m th\u1ee9 2, g\u1ea7n k\xedn","Gieo m\u1ed9t k\xfd \u1ee9c k\xe8m t\xe2m tr\u1ea1ng","Chia s\u1ebb b\u1ed9 \u0111\u1ebfm th\xe0nh story"],y.x)
C.an=x(["Kh\xf4ng c\u1ea7n t\xe0i kho\u1ea3n","Kh\xf4ng qu\u1ea3ng c\xe1o","Kh\xf4ng c\u1ea7n m\u1ea1ng","Kho\xe1 b\u1eb1ng m\xe3 PIN 4 s\u1ed1"],y.x)
C.q=new A.d1("M\u1ed9t khu v\u01b0\u1eddn k\xfd \u1ee9c","Th\u1ee9 N\u0103m, 29/10 \xb7 ng\xe0y 705","Chi\u1ec1u \u0111i b\u1ed9 ven s\xf4ng","N\u1eafng nh\u1eb9, gi\xf3 m\xe1t. M\xecnh \u0111i ch\u1eadm, nghe l\u1ea1i m\u1ed9t b\xe0i h\xe1t c\u0169, v\xe0 th\u1ea5y l\xf2ng nh\u1eb9 h\u01a1n.","Ch\u1ecdn t\xe2m tr\u1ea1ng",C.K)
C.L=x(["Calm","Happy","Grateful","Homesick","Tired","A bit sad"],y.x)
C.U=new B.P("A new garden every year","Flowers, mushrooms, snails, bees and birds, one for each memory.")
C.W=new B.P("No streaks, no scores","Missed a day? Plant a memory for it later with seeds.")
C.V=new B.P("Milestones","Every 100 days and every year, a small celebration you can share.")
C.ao=x([C.U,C.W,C.V],y.j)
C.ap=x(["Today: the day counter and next milestone","Memory Garden in year 2, nearly full","Planting a memory with a mood","Sharing the counter as a story"],y.x)
C.am=x(["No account","No ads","No internet needed","Locked with a 4-digit PIN"],y.x)
C.r=new A.d1("A garden of memories","Thursday, 29/10 \xb7 day 705","An evening walk by the river","Soft light, a cool breeze. I walked slowly, listened to an old song, and felt lighter.","Pick a mood",C.L)
C.h=x(["calm","happy","grateful","homesick","tired","sad"],y.x)})()};
(a=>{a["oYQSHQAZb/4YTH3PZp84S1re4Gg="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_2.part.js.map

import React from 'react';
import schedulePushNotification from './noti'
var p='',p1,p2,p3,p4,p5,o1,o2,o3,o4,o5,D,d,h,m,s
 function clase() {
    function rel() {
        D = new Date();
        d=D.getDay()
        h=D.getHours()
        m=D.getMinutes()
        s=D.getSeconds()
    }
    rel()
    function orale(h,m) {
        hm=D
        var hm = new Date(hm);
        hm=hm.setHours(h)
        var hm = new Date(hm);
        hm.setMinutes(m)
        var hm = new Date(hm);
        hm.setSeconds(0)   
        var hm = new Date(hm);
       D=new Date()
        return hm
    }
    o()
    function o() {
        p1=orale(8,0)
        p2=orale(9,50)
        p3=orale(11,10)
        p4=orale(13,10)
        p5=orale(13,50)
        o5=orale(14,0)
        o1=orale(8,10)
        o2=orale(10,0)
        o3=orale(11,20)
        o4=orale(13,20)
    }
    setInterval(() => {
        rel()
        q()
        proximaClase()
    }, 1000);
    q()
    function q() {
        
        switch (d) {
            case 1:
                l()    
                break;
                case 2:    
                ma() 
                break;
                case 3:    
                mi()
                break;
                case 4:    
            j()
            break;
            case 5:    
            v()
            break;
            
            default:
                break;
            }
    }
        function l() {
            if (o1>D) {
                p="Quimica"
                
            } else if(o2>D) {
                p="Lenguage"
                
            }else if (o3>D) {
                p="Fisica" 
                
            }else if (o4>D) {
                p="Math"
                
            } else if(o5>D) {
                p="Biologia"
                
            }
        }
        function ma() {
            if (o1>D) {
                p="Fisica"
            } else if(o2>D) {
                p="Lenguage"
                
            }else if (o3>D) {
                p="Math" 
            }else if (o4>D) {
                p="Español"
        }else if (o5>D) {
            p="Quimica"
        }
    }
        function mi() {
            if (o1>D) {
                p="Orientacion vocacional"
                
            } else if(o2>D) {
                p="Lenguage"
                
        }else if (o3>D) {
            p="Math" 
            
        }else if (o4>D) {
            p="Español"
            
        } 
    }
    function j() {
        if (o1>D) {
            p="Historia"
            
        } else if(o2>D) {
            p="Lenguage"
            
        }else if (o3>D) {
            p="Biologia"
             
        }else if (o4>D) {
            p="Math"
            
        } 
    }
    function v() {
        
        if (o1>D) {
            p="Quimica"
            
        } else if(o2>D) {
            p="Lenguage"
            
        }else if (o3>D) {
            p="Fisica" 
            
        }else if (o4>D) {
            p="Español"
            
        } 
        
    }
proximaClase()
function proximaClase() {
    switch (true) {
        case D<=p1:
           remainTime=(p1-D+1000)/1000
           sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
           mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
           hf =  Math.floor(remainTime / 3600 % 24)
           re=`Vas a ${p} en ${hf} horas ${mf} minutos y ${sf} segundos` 
            break;
            case D<=p2:
               remainTime=(p2-D+1000)/1000
               sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
               mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
               hf =  Math.floor(remainTime / 3600 % 24)
               re=`Vas a ${p} en ${hf} horas ${mf} minutos y ${sf} segundos` 
               break;
               case D<=p3:
                   remainTime=(p3-D+1000)/1000
                   sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
                   mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
                   hf =  Math.floor(remainTime / 3600 % 24)
                   re=`Vas a ${p} en ${hf} horas ${mf} minutos y ${sf} segundos` 
                   break;
                   case D<=p4:
                       remainTime=(p4-D+1000)/1000
                       sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
                       mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
                       hf =  Math.floor(remainTime / 3600 % 24)
                       re=`Vas a ${p} en ${hf} horas ${mf} minutos y ${sf} segundos` 
                       break;
                       case D<=p5:
                           if (hayUltima()) {
                               remainTime=(p5-D+1000)/1000
                               sf = ('0' + Math.floor(remainTime % 60)).slice(-2),
                               mf = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
                               hf =  Math.floor(remainTime / 3600 % 24)
                               re=`Vas a ${p} en ${hf} horas ${mf} minutos y ${sf} segundos`    
                           } else {
                               re='No tienes clase'
                           }
                            
                           break;          
        default:
           re="No tienes clases"
            break;
    
       }
       return re
   }function hayUltima() {
       let dias =d==1||d==2
       return dias
   }
   
   return proximaClase()
 }
function Hacer() {
    ale(true)
}
function ale(btn) {
    var hacer =true
    setInterval(() => {
        que(p)
    }, 6000);
    if (btn) {
        hacer=true
    }
    function que(pa) {
        let p = pa
        if (d>0&&d<6) {
            if (p1<=D && D<o1) {
                alerta(p)
            } else if(p2<=D && D<o2) {
                alerta(p)
            }else if (p3<=D && D<o3) {
                alerta(p)
            }else if (p4<=D && D<o4) {
                alerta(p)
            } else if(p5<=D && D<o5) {
                
                if (d==1||d==2) {
                    alerta(p)
                }   
        } 
        }
    }
function alerta(p) {
    if (hacer) {
        schedulePushNotification(p)  
        hacer=false
    }
    
}   
}
export default {
    clase:clase,
    ale:ale,
    hacer:Hacer
}
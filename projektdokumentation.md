# Opgave: Dyrevelfærd
### Navn: Sonny Marco Gram
### Holdnummer: 1146522c308
### Applikation stack: JAM stack



admin credentials: <br/>
user admin. <br/>
password 1234. <br/>
URL: http://localhost:5173/


#### Vurdering af egen indsats:
Jeg syntes som udgangspunkt jeg gav det alt hvad jeg havde,<br/>
men jeg syntes samtidig ikke jeg nåede så meget som jeg havde forventet jeg kunne nå,<br/>
en af grundene til dette kunne være, at jeg normalt starter med at fixe al funktionallitet,<br/>
og derefter går igang med CSS, men jeg valgte at gøre det omvendt denne gang. <br/>
Og det tror jeg var en fejl, for jeg endte med at bruge alt for langtid på at få det til at side helt perfekt på<br/>
små, mellem og store mobiler, tablets, laptops og store desktops.<br/>
Jeg bør nok gøre op med mig selv kun at fokusere på store mobiler, tablets og 1024px laptops, til næste gang.<br/>
Jeg tror også jeg brugte for langtid på at hjælpe andre, hvilket jeg kunne mærke jeg stressede meget over til sidst.<br/>
Desuden har jeg for nyligt har stoppet med min medicin, og det syntes jeg har gjort at jeg har glemt en masse ting,<br/>
måske ikke glemt, men nærmest glemt vejen til informationen?<br/>
Og selvom jeg har mange noter skrevet ned, fandt jeg hurtigt ud af at i en presset/stresset<br/>
situation hvor jeg kan glemme helt basale ting, at mine noter ikke var fyldesgørende nok.<br/>
Så jeg ved lige præcis hvad jeg skal skrive noter omkring i den kommende uge, til fremtidige mentale break-downs.<br/>


### Argumentation for valg:
#### js-cookie: 
Jeg valgte at bruge js-cookies, da det er det vi har lært om i skolen, og det er dejligt nemt og have med at gøre, <br/>
Det er let og sette, gette og fjerne, og opsætte expiration dates osv.<br/>
Plus det er har over 8 millioner weekly downloads (lige pt), som gør mig mindre nærvøs omkring bugs, fejl og andre irreterende ting<br/>
der kan komme ved at bruge forskellige libraries.<br/>

#### react-icons:
Jeg har valgt og bruge react-icons, da det er nemt og ligetil at finde de ikoner man skal bruge </br>
og de er alle gratis at bruge.

#### vite:
Jeg valgte vite, da CRA(Create-react-app) er på vej ud, vite ligger sig meget op af CRA, <br/>
så det var nemt og switche til, og bruge istedet.

#### Regex:
Jeg valgte og bruge Regex til form validation, Regex kan være forvirrende at sætte op, <br/>
men da teknologien har været omkring så længe, kan man super nemt finde lige præcis det man vil checke efter, <br/>
hvilket efter min mening er 100 gange nemmere at sætte op med ".test()" istedet for at hente et helt bibliotek, <br/>
og følge deres syntax osv.<br/>
F.eks: <br/>
`` const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ `` <br/>
Kigger efter om der er bogstaver fra a-z og store bogstaver A-Z<br/>
Og at den indeholder et @ og minimum har 2 characters efter punktumet.<br/>
Også kan bruge følgende til at checke: <br/>
`` emailPattern.test(input) ``

#### dangerouslySetInnerHTML: 
Denne metode var det eneste jeg kunne finde der ville kunne lave "\n" om til `` <br/> `` fra den tekst vi fik fra api'et <br/>
Var lidt usikker på at bruge det, alene på grund af navnet, men det virkede som jeg ville have det. <br/>
Eksempel: <br/>
`` const sanitizeContent = (text) => { `` <br/>
``    const replacedText = text.replace(/\n/g, '<br>') `` <br/>
``    return <p dangerouslySetInnerHTML={{__html: replacedText}} /> `` <br/>
``} ``

#### Fejltagelser
##### 1
Af en eller anden årsag troede jeg at projektet skulle laves i en seperat repo, og fandt først ud af at det <br/>
skulle være i opgave repo'en<br/>
Men så ved jeg det til når det virkelig gælder.<br/>
##### 2
For nogle måneder siden bedte Git mig om brugernavn og email, hvilket jeg på daværende tidspunkt tænkte var noget fis at spørge om <br/>
Så jeg skrev "johndoe@example.com" som mail og "johndoe" som navn, <br/>
Det resulterede så i at mine pushes blev pushet af en anden bruger ved navn "Faten848", som åbenbart har den mail og brugernavn <br/>
Da jeg indså fejlen, var det heldigvis let og opdatere, men knap så nemt at "redo" på github.<br/>
Så igen godt at opdage til prøve eksamen, og ikke til den afgørende.<br/>
<br/>
Så alt i alt er jeg taknemmelig for vi havde en prøve eksamen før den afgørende eksamen.



#### test commit lav om på bruger upload 
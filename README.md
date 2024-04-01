1. Einleitung 

Zeit ist vielleicht die wichtigste Ressource, die wir Menschen haben. Deswegen liegt es nahe sich zu bemühen, diese, in seinem eigenen Ermessen, sinnvoll zu benutzen.  
Jedoch kann es hier schwierig werden einen Überblick zu behalten, wie viel Zeit man für was benutzt. Dadurch kann es zu Verlusten/"falschem" Benutzen seiner Zeit  
kommen. Die Zeiterfassungssoftware zielt darauf ab, seine Zeiten aufzunehmen und dann auswerten zu können, um seinen Tag optimieren zu können. Das kann vor allem 
für Arbeitgeber interessant sein, die somit einerseits die Aktivität der Mitarbeiter kontrollieren sowie Transparenz erschaffen können und andererseits  
Ressourcen und auch Prozesse optimieren können. 

1.1 Anforderungsübersicht 

Im Vordergrund der Zeiterfassungssoftware steht die Funktionalität des Startens, Stoppen sowie Speichern eines Timers durch wenige Knopfdrücke. Ausserdem soll es möglich  
sein, seine Daten nach gewissen Maßstäben einfach analysieren zu können. Dabei soll die Software möglichst intuitiv sein, um Arbeiten möglichst einfach und schnell erfassen  
zu können. Die Software muss ausserdem eine Benutzerverwaltung anbieten, um Daten zu organisieren und verwalten zu können. 

1.2 Qualitätsziele 

Um eine ordnungsgemäße Benutzung zu ermöglichen, müssen einerseits Zeiten möglichst genau erfasst werden, aber auch mögliche Fehler und Manipulationsquellen auszulöschen. 
Dafür muss die Software auch stabil laufen, um mögliche Verluste von Zeiten zu verhindern und eine stetige Erfassung zu ermöglichen.  

1.3 Stakeholder 

Das Programm zielt aktuell auf User ab, die dieses für die Zeiterfassung in der Freizeit benutzen möchten. Jedoch ist eine Erweiterung des Programmes auf die Unternehmensebene 
möglich und sinnvoll. Dabei ändern sich jedoch die Erwartungen, die die User an das Programm haben. Während es in der Unternehmenswelt kritisch ist, dass Zeiten zuverlässig und  
exakt aufgenommen werden, gelten diese hohen Anforderungen im privaten Bereich nicht. Meist muss ein Programm auch individuell für ein Unternehmen anpassbar sein.  

Externe Ressourcen  

Vite: 

Vite ist ein Build-Tool von Evan You, dem Ersteller des Vue.js-Frameworks. Vite bietet die Möglichkeit Webprojekte zu hosten und lässt sich sehr einfach mit JavaScript sowie Frameworks, wie React, 
kombinieren. Durch das Hot Module Replacement ist es ausserdem direkt möglich Funktionalitäten des Projekts bei Änderung des Codes zu beobachten und gegebenenfalls zu troubleshooten. 
Dadurch ist Vite eine einfache und effiziente Möglichkeit für die Entwicklung der Zeiterfassungswebanwendung und wurde deshalb gewählt.   

React:  

React ist eine, von Meta entwickelte, Open Source JavaScript-Bibliothek, welche hier vor allem für das Realisieren der Benutzeroberfläche seinen Einsatz findet. 
React benutzt hierfür eine komponentenbasierte Architektur, welche mit JSX und HTML ähnlichem Code verwendet werden kann.  
Ausserdem werden auch oft die von React bereitgestellten Hooks useState() und useEffect() benutzt. Dabei wird der useState benutzt um eine Set- sowie eine Get-Methode  
für eine Variable zu definieren und anzuwenden und die useEffect() Hook, um auf Änderungen bei bestimmten Variablen zu reagieren. 

React-router-dom: 

React-router-dom wird verwendet um zwischen den verschiedenen Routen, die vorher definiert wurden zu routen. Dafür werden bestimmte Elemente geladen, wenn man auf eine 
bestimmte URL zugreift: "<Route path="/" element={<Anmeldung />} />" Hier wird z.B. definiert, dass bei der URL "/" das Element (bzw. hier auch die Funktion) Anmeldung  
aufgerufen wird. Um nun auf diese verschiedenen URLs zu kommen, kann man entweder das native href benutzen oder die von React-router-dom bereitgestellten Elemente, wie  
z.B. "<Link> </Link>" oder auch "navigate".  

Material UI:  

Material UI (MUI) ist eine externe Bibliothek, welche Bedienelemente, wie z.B. Textfelder oder auch Buttons für die Benutzeroberfläche bereitstellt. 
Nach Import können diese Bedienelemente im Tag, wie z.B. "<Button class="Daten" variant="contained" href="/Daten/"> Daten </Button>" erstellt werden. 
MUI bietet auch direkt Möglichkeiten an zwischen verschiedenen Design Varianten der Bedienelemente über variant="" zu entscheiden. Weitere Style Möglichkeiten 
über CSS (Cascading Style Sheets) werden durch className="" auch ermöglicht. 
In dem Programmcode werden vor allem Textfelder, Buttons, Tabellen als auch ein Tortendiagramm von MUI benutzt. 

day.js   

Day.js ist eine JavaScript-Bibliothek, welche vor allem zur Manipulation und Formatierung von Datum und Zeit verwendet werden kann. Dabei stellt day.js 
diese Werte der Daten und Zeiten so zur Verfügung, dass diese durch andere Funktionen manipuliert werden können. Ausserdem unterstützt day.js Lokalisierung, wodurch  
die Zeit entsprechend an den Benutzer angepasst wird. Dies wird später beim Speichern der Daten in der Tabelle benutzt.  

uuidv4 

uuidv4 ist eine Funktion, die eine 128-Bit UserID generieren kann. Dafür werden zufällige Werte verwendet und aufgrund der großen Anzahl an möglichen UserIDs aufgrund der 128-Bit 
ist diese fast immer eindeutig. Anhand der UserID können dann die Daten, die auch nur dem richtigen User gehören, im localStorage gespeichert und wieder aufgerufen werden. 

Ablauf des Programmes:   

Die Zeiterfassungssoftware ist in verschiedene Routen aufgeteilt. App.jsx definiert diese Routen, die dann später zum Navigieren benutzt werden können. 
Dafür werden die Routen Tags von React-router-dom benutzt (siehe Externe Ressourcen). Einige Routen haben ausserdem vordefinierte Parameter, wie z.B.  
path="/Zeit_erfasst/:seconds/:aktuelleZeit". Diese speichern die Werte zu den angegebenen Variablen der aktuellen Route und können in einem folgenden Schritt dann wieder aus der URL geholt werden.  
Damit dient dies der Übergabe von Variablen zwischen den verschiedenen Routen. 

Das Programm startet für den Benutzer auf der Login Seite (Route "/"), da isLoggedIn noch auf false steht. Dadurch werden nur die Elemente der Login Seite angezeigt. 
Vorzufinden ist hier ein Button "Registrieren", welcher per <Link> auf die Funktion Registrierung() verweist. Dort gibt es dann zwei Textfelder, die beide onChange entweder 
Benutzername oder Passwort speichern. Beim Klick auf den Button Registrieren wird dann die Funktion handleRegister() aufgerufen. Diese erstellt eine UserID mit uuidv4() 
und speichert diese sowie Benutzername und Passwort in einem Array. Falls es bereits Benutzer im localStorage gibt, wird der neue Benutzer in dem Array mit den bereits existierenden Benutzern 
angehangen, ansonsten wird ein neuer erstellt und im localStorage mit dem key-value Paar "user" und dem Array mit den Benutzern gespeichert. Danach wird man wieder zur Login Seite geroutet. 
Dort gibt es ausserdem den zwei Textfelder Benutzername und Passwort, die von der Funktionalität gleich sind wie die von Registrierung und einen Button "Login", welcher die Funktion Einloggen() aufruft.  
Einloggen() prüft dann, ob es bereits User im localStorage mit genau diesen Anmeldedaten gibt. Sollte es diese geben, wird isLoggedIn auf true gesetzt und der Benutzer eingeloggt. 
Nun werden andere Elemente geladen, namentlich hier ein Button "Zeit erfassen" und "Logout". Beide routen als Hauptfunktionalität (Zeit erfassen routet zu "NachAnmeldung.jsx, Logout zurück zu "/"). 

NachAnmeldung selbst besitzt zwei Funktionen: aktuellerZeitpunkt und handleSave. Erstere von beiden wird aufgerufen, wenn der Button "Start" gedrückt wird und holt sich die aktuelleZeit und speichert 
diese als String in der const aktuelleZeit. Zweitere von beiden hingegen wird beim Klick von dem Button "Speichern" aufgerufen. Diese prüft, ob bereits ein Timer gestartet wird und routet in dem Fall dann  
zu "Zeit_erfasst" und übergibt seconds sowie aktuelleZeit. 
Die Variable seconds sowie die Funktionen startTimer und resetTimer werden beide aus der Funktion Seconds() extrahiert. startTimer findet seine Verwendung onClick beim Button "Start", während 
resetTimer onClick bei dem Button "Reset" verwendet wird.    

Seconds() hat dann die beiden Funktionen startTimer und resetTimer definiert. startTimer zählt in einem Intervall von 1000ms die seconds um 1 hoch und prüft ob bereits ein Timer gestartet wurde. 
resetTimer setzt dann sowohl seconds als auch das Intervall zurück. 
Diese beiden Funktionen und seconds werden dann von Seconds() zurückgegeben.  

Zeit_erfasst() holt sich dann seconds und aktuelleZeit wieder aus der URL mit useParams zurück. Zeit_erfasst hat nun mehrere Funktionen enthalten.  
Diese Funktionen sind alle in verschiedene Buttons/Textfelder integriert. Es gibt ein Textfeld, in dem man als User manuell eine Zeit in Sekunden eingeben kann, dessen Wert dann onChange in 
der Funktion handleZeiteingabeChange verarbeitet wird. 
Weiterhin gibt es vier Buttons: +1h (onClick Addiere1h), -1h (onClick Subtrahiere1h), Speichern (onClick handleSave) und Löschen (handleLoeschen). 
Ausserdem gibt es ein letztes Textfeld, welches die übergebenen seconds von NachAnmeldung übernimmt und nach Zeitformat() umgeformt wird.  
Als letztes gibt es noch ein Drop-Down Menü, in welchem man die Art auswählen kann, sobald man hier etwas ausgewählt hat, wird handleChange aufgerufen. 
handleZeiteingabeChange, handleChange, handleZeitChange sowie handleTextFieldChange funktionieren vom Grundprinzip her gleich. Diese speichern bei Eingabe die aktuell eingegebenen Werte in  
der entsprechenden Variable ab. Nur bei handleZeiteingabeChange wird vorher noch geprüft, ob die Eingabe eine Zahl ist, erst wenn dies der Fall ist, wird displayValue (entspricht den, in der URL übergebenen, seconds)  
dementsprechend angepasst. 
Weiterhin gibt es noch Addiere1h und Subtrahiere1h: Diese addieren bzw. subtrahieren dann 3600 Sekunden auf die displayValue. 
Um einen Timer zu Löschen gibt es den Button "Löschen" mit der Funktion handleLoeschen(), welche einfach nur zur vorherigen Seite zurückroutet.  
Als letztes gibt es noch handleSave, welche als erstes prüft, ob das Textfeld "Tätigkeiten" leer ist, falls nein, wird man zu Daten weitergeleitet und die Variablen taetigkeiten, displayValue, art, value und aktuelleZeit 
(aktuelleZeit stammt noch aus NachAnmeldung) werden in die URL übergeben.  

Zeitformat() ist eine Funktion, die Sekunden ab einer bestimmten Anzahl in Stunden, Minuten und Sekunden umrechnet und gibt dann dieses als secondsValue zurück.  

Daten() ist zuständig für die Darstellung aller wichtigen Daten in einer Tabelle und das Erstellen des Tortendiagramms zur Veranschaulichung der Zeit pro Art.  
Dazu gibt es in Daten drei useEffects: 
Der erste wird aufgerufen bei Änderung in mindestens einem der Werte der Variablen art, taetigkeiten, seconds, value und userID. Die ersten vier werden aus der URL geholt, während die userID aus dem, im localStorage gespeicherten 
Datensatz, geholt wird. Sollte eine Änderung hier auftreten, wird geprüft, ob es bereits Daten im localStorage gibt: 
Falls ja, wird der neue Datensatz an das bereits bestehende Array drangehangen und wieder im localStorage gespeichert. Falls nein, wird der neue Datensatz als erster im localStorage gespeichert.  
Hierbei wird die userID als Key benutzt, um Daten zu speichern, bzw. auch wieder aus dem localStorage zu laden, so wird sichergestellt, dass nur die richtigen Nutzer bestimmte Daten sehen.  
Im zweiten useEffect werden als erstes die gespeicherten Eingaben nach Anzahl der Arten durchgegangen und diese werden in ArtAnzahl und diagrammDaten gespeichert. Im letzten useEffect 
wird die Menge der Arten in ArtAnzahl dann noch auf die Sekunden pro Art angepasst und in diagrammDaten gespeichert.  
Ansonsten gibt es noch drei weitere Funktionen in Daten: 
handleDelete bekommt onClick vom Button "Löschen" in jeder Zeile der Tabelle den Index dieser Zeile übergeben und löscht dann das, dem Index entsprechende, Element aus dem Array gefilterteDaten.  
handleClearLocalStorage ist eigentlich primär für Testzwecke gedacht: Dieses löscht beim Klick von "Lösche alles" den gesamten Array zu dem Key der UserID aus dem localStorage. 
Als letztes gibt es noch berechneEndZeit: Diese Funktion wird für das Errechnen der Endzeit für die Darstellung der Daten genutzt. Diese nimmt die aktuelleZeit als String (Format: HH:MM:SS) und trennt diese nach dem ":" in drei Teile  
und speichert diese jeweils in Stunden, Minuten und Sekunden ab. Diese drei Werte werden dann in Sekunden umgerechnet und eintragZeit (displayValue) wird addiert. Es wird zudem dann geprüft, ob der Wert nun über  
86400 Sekunden liegt (entspricht 24h), um unrealistische Zeiten zu vermeiden. Als letztes werden die Sekunden wieder in HH:MM:SS Format umgerechnet. 
Es wird dann die Tabelle von MUI benutzt, um die Daten darzustellen. Dafür werden die Einträge der Datensätze jeweils über die entsprechende Spalte der Tabelle gemapped.  
Als letztes wird in Daten noch das Tortendiagramm erstellt und mit den diagrammDaten, die in den letzten beiden useEffects erstellt wurden, versorgt. Dort werden dann die Arten je nach Sekunden angezeigt. 

  

Als letztes gibt es noch die Funktion FilterDatum(). Diese erstellt das Array gefilterteDaten, welches z.B. für handleDelete gebraucht wird und auch auf die Tabelle gemapped wird. Hier wird das Array gespeicherteEingaben 
nach dem Datum durchgangen und nur die Daten, die dem Datum aus aktuellesDatum entsprechen, werden in gefilterteDaten gespeichert. Dadurch wird das Tage basierende Sortieren der Daten bei der Tabelle ermöglicht. 
naechsterTag und vorherigerTag addieren, bzw. subtrahieren dann einen Tag von aktuellesDatum. Dadurch das aktuellesDatum sowie gespeicherteEingaben in einem useEffect stehen, welcher dann filternNachDatum() aufruft,  
werden dann auch direkt wieder die Daten nach dem neuen Datum sortiert. 

  

Entwurfsentscheidungen: 

Eine wichtige Entscheidung beim Entwurf des Programmes war die Darstellung der bereits gespeicherten Daten sowie eine schnelle, einfache Möglichkeit auf einem Blick 
diese Daten analysieren zu können. Deswegen wurde sich bewusst für die Darstellung in einer Tabelle in Kombination mit einem Tortendiagramm entschieden, da dieses den 
Anforderungen am besten gerecht wird. In der Tabelle wird jede Zeit übersichtlich aufgelistet mit Datum, Start sowie Stoppzeit, Tätigkeit und Art. Das Tortendiagramm 
wird dann gefüllt mit den Daten der Sekunden pro Art. Damit lässt sich auf einem Blick direkt feststellen, welche Bereiche am meisten Zeit konsumieren und welche  
noch Potenzial haben.  

Durch die Verwendung mehrerer Routen und die Modularisierung dieser musste ein Weg implementiert werden, die Werte der Variablen von einer zur nächsten Route 
zu geben. Hier gab es zwei vorreitende Lösungsmöglichkeiten: Übergabe der Variablen in der URL oder die globale Definierung dieser Variablen. 
Hier wurde sich für das Übergeben der Variablen in der URL entschieden, da eine Globalisierung dieser Variablen einige negative Konsequenzen haben könnte:  
Einerseits könnten diese Variablen von jeder Route aus modifiziert werden, jedoch soll es nur durch Starten des Timers und durch Anpassung des Timers in Zeit_erfasst möglich sein 
auf z.B. seconds zuzugreifen. Ausserdem bietet react-router-dom mit useParams und dem Browserrouter eine direkte, einfach zu implementierende Möglichkeit die Übergabe  
in der URL zu ermöglichen.  

Mögliche Erweiterungen 

Das Programm ist in seiner Grundfunktionalität vollendet, jedoch gibt es noch einige Bereiche, in denen es Verbesserungspotenzial gibt. Ein großer Aspekt ist hier die  
Sicherheit des Programmes im Sinne von Datenschutz und Datensicherheit. Aktuell ist es noch möglich Benutzername + Passwort von allen Benutzern aus dem localStorage 
auszulesen. Dies stellt eine kritische Sicherheitslücke dar.  
Aber nicht nur in Sachen Sicherheit kann das Programm verbessert und erweitert werden, sondern es gibt noch viele Möglichkeiten sinnvolle Funktionen unterzubringen. 
Zum Beispiel wäre eine Möglichkeit das Programm speziell für die Arbeitswelt anzupassen, das heisst Arbeitsanfang, Arbeitsende sowie allgemein Arbeitszeit zu erfassen 
und verarbeiten zu können. Dafür könnte noch eine Rollenverwaltung, mit Rollen, wie z.B. Administrator, Personalangestellter und normaler User in Frage kommen.  
Ausserdem wäre vermutlich die Entwicklung einer Integration für ERP-Systeme, um dort die Daten auswerten zu können, von großem Wert. 

Ausstehende Bugfixes 

Es ist aktuell noch nicht möglich eingeloggt zu bleiben: Sobald man wieder auf die Homepage kommt, ist man wieder ausgeloggt. Hier müsste die isLoggedIn() Variable von  
Anmeldung.jsx global verwaltet und dann dementsprechend, ob man eingeloggt ist oder nicht, angepasst werden können.  

Verwendete Ressourcen: 

Vite: https://vitejs.dev 
React: https://react.dev 
React-router-dom: https://reactrouter.com/en/main 
Material UI: https://mui.com 
Day.js: https://day.js.org 
Uuidv4: https://www.npmjs.com/package/uuid 

 

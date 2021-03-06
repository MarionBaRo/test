//Ensemble des catégories :
var Acceuil = {nom : "Acceuil", href : "./index.html" , id : ""};
var Expertise = {nom : "Expertise", href : "./expertise.html" , id : ""};
var Contact = {nom : "Nous Contacter", href : "", id : "contact"};
var Rejoindre = {nom : "Nous Rejoindre", href : "./careers.html" , id : ""};

//Liste du footer
var Liste = [Acceuil, Expertise, Contact, Rejoindre];
//Boutons de l'header
var Bouton = [Expertise];

var Service = [{
    nom : "Security Zero Trust", href : "./zero-trust.html", cat : "security", type : "Cybersécurité" },{
    nom : "Entreprise Networking", href : "./entreprise-networking.html", cat : "network", type : "Réseau" },{
    nom : "Digital Workspace", href : "./digital-workspace.html", cat : "infrastructure-cloud", type : "Infrastructure" }
];

//Bouton déroulant :
var Bouton_d = [{
    nom : "Services managés", liste : Service, fin : "Pour un service sur mesure, contactez nos conseillers."}
];

var Adresse = [{
    lieu : "10 Rue de Penthièvre, 75008 Paris (France)", lien : "https://www.google.com/maps/place/20+Bd+Eug%C3%A8ne+Deruelle,+69003+Lyon/@45.762807,4.8530102,18z/data=!3m1!4b1!4m5!3m4!1s0x47f4eb49a0d39e27:0x8a254ce143a4d89f!8m2!3d45.762807!4d4.8538978" },{
    lieu : "20 Boulevard Eugène Deruelle, 69003 Lyon (France)", lien : "https://www.google.com/maps/place/20+Bd+Eug%C3%A8ne+Deruelle,+69003+Lyon/@45.762807,4.8530102,18z/data=!3m1!4b1!4m5!3m4!1s0x47f4eb49a0d39e27:0x8a254ce143a4d89f!8m2!3d45.762807!4d4.8538978" },{
    lieu : "445 Rue Lavoisier, 38330 Montbonnot-Saint-Martin (France)", lien : "https://www.google.com/maps/place/445+Rue+Lavoisier,+38330+Montbonnot-Saint-Martin/data=!4m2!3m1!1s0x478a5f45485db821:0x18a1f2312e8d685c?sa=X&ved=2ahUKEwi8mdGe2Jr0AhUHxoUKHYJ1AMEQ8gF6BAgTEAE" }
];

//Variable du Menu déroulant
/*
var Liste_d = [{
    id:0,name:"-- Quel est votre enjeu ? --",url:"#"
  },{
    id:1,name:"Améliorer la cybersécurité",url:"./zero-trust.html"
  },{
    id:2,name:"Bénéficier d'un réseau performant et sécurisé",url:"./entreprise-networking.html"
  },{
    id:3,name:"Intégrer des services collaboratifs",url:"./digital-workspace.html"
  },{
    id:4,name:"Test",url:"./test.html"
  }];

function Liste_d_Onclick (i){
    var x = document.getElementById(i);
    var y = document.getElementById(liste_dbtn);
    y.href = x.url;
};*/

function Header(){
    document.write('<header class="z-40 relative bg-white" \
    x-data="Components.popover({ open: false, focus: true })" \
    x-init="init()" \
    @keydown.escape="onEscape" \
    @close-popover-group.window="onClosePopoverGroup">');

        //Desktop menu
        document.write('<div class="max-w-7xl mx-auto px-4 sm:px-6"> \
            <div class="flex justify-between items-center border-b border-gray-200 py-6">');
                //Logo Altanna 
                document.write('<div class="flex justify-start"> \
                    <a  href="', Acceuil.href ,'"> \
                        <img  height="40" width="130" \
                            src="logo-with-text.svg"  alt="Altanna logo Altanna" title="Bienvenue sur Altanna"/> \
                    </a>\
                </div> \
                <div class="hidden md:flex items-center justify-end" \
                    <nav class="flex ml-auto items-center" x-data="Components.popoverGroup()" x-init="init()">');
                        //Boutons simple
                        for (var i=0; i < Bouton.length; i++){
                            document.write(`<a class="hidden sm:block btn btn-transparent" \
                            href="`, Bouton[i].href,`">`, Bouton[i].nom,`</a> `);
                        }      

                        // Bouton déroulant
                        for (var i=0; i < Bouton_d.length; i++){
                            document.write(`<div class = "relative hidden sm:inline-block text-left deroulant"> \
                                <div> \
                                    <a class="outline-none inline-flex justify-center items-center w-full btn btn-transparent">`, Bouton_d[i].nom,`  \
                                        <svg aria-hidden="true" class="-mr-1 ml-1 h-5 w-5">\
                                            <path clip-rule="evenodd" \
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" \
                                            fill-rule="evenodd"></path> \
                                        </svg> \
                                    </a> \
                                </div> \
                                <div class ="sous origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"> \
                                    <div class="py-1" role="none">`);
                                        for (var j=0; j < Bouton_d[i].liste.length; j++){
                                            document.write(`<a class="block px-4 py-2 text-sm text-gray-700" href="`,Bouton_d[i].liste[j].href,`"> \
                                                <span class="flex items-center relative"> \
                                                    <span class="h-3 w-3 bg-gradient-to-t relative flex items-center relative" data-category="`, Bouton_d[i].liste[j].cat,`"> \</span> \
                                                    <span class="text-xs block text-gray-400 ml-1">`, Bouton_d[i].liste[j].type,`</span> \
                                                </span> \
                                                <span class="block leading-4">`, Bouton_d[i].liste[j].nom,`</span> \
                                            </a></li>`);
                                        }
                                        document.write(`<span class="block leading-4 px-4 py-2 text-sm text-gray-400 border-t"> `, Bouton_d[i].fin,`\
                                        </span> \
                                    </div> \
                                </div> \
                            </div>`);
                        } 
                    document.write(`</nav>`);

                    //Bouton Nous rejoindre - Nous contacter
                    document.write(`<a class="hidden sm:block btn btn-transparent border" \
                        href="`, Rejoindre.href,`">`, Rejoindre.nom,`</a> \
                    <div class="flex-grow" @keydown.window.escape="openContactModal = false"> \
                        <!-- Modal trigger--> \
                        <button onclick="document.getElementById('`, Contact.id,`').style.display='block'" \
                            class="btn btn-primary inline-flex" \
                            type="button"> \
                            `, Contact.nom,` \
                        </button> \
                    </div> \
                </div> \
            </div> \
        </div> \ 
    </header> `);
};

function Footer (){
    document.write(`<footer aria-labelledby="footer-heading" class="w-full relative bg-gray-100 border-t border-gray-200"> \
    <div class="absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2 h-16 w-16 border border-gray-200 bg-gray-900 flex items-center justify-center"> \
        <img src="logo-white.svg"  height="25" width="25" alt="Altanna - Logo" title="Logo d'altanna"/> \
    </div> \
    <h2 class="sr-only" id="footer-heading">Footer</h2> \
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"> \
        <div class="xl:grid xl:grid-cols-4 xl:gap-8"> \
            <div class="grid grid-cols-3 gap-8 col-span-2">`);
        
            //Première Liste :
                document.write(`<div class="mb-12 md:mt-0"> \
                    <h3 class="text-base font-semibold text-gray-800"> \
                        Altanna \
                    </h3> \
                    <ul class="mt-4 space-y-4" role="list"> `);

                    for(var i = 0; i < Liste.length; i++){
                        document.write(`<li> \
                        <a class="text-base text-gray-500 hover:text-gray-900"`);
                        if (Liste[i].href == "") {
                            document.write(`onclick="document.getElementById('`, Liste[i].id,`').style.display='block'"`);
                        }else {
                            document.write(`href="`, Liste[i].href);   
                        } 
                        document.write(`">`, Liste[i].nom, `</a> \
                            </li> \
                            <li> `);             
                    }
                    document.write(`</ul> \
                </div> `);

            // Deuxième Liste : Liste de service
                document.write(`<div class="mb-12 md:mt-0 col-span-2"> \
                    <h3 class="text-base font-semibold text-gray-800"> \
                        Nos offres de services managés \
                    </h3> \
                    <ul class="mt-4 space-y-4" role="list"> `);

                    for (var i = 0; i < Service.length; i++){
                        document.write(`<li> \
                            <a class="text-base text-gray-500 hover:text-gray-900 flex items-center" href="`, Service[i].href,`"> \
                                <span class="h-3 w-3 bg-gradient-to-t  mr-2" data-category="`, Service[i].cat, `"></span>`);
                        document.write(Service[i].type, ` > `, Service[i].nom, `</a> \
                        </li>`);
                    }

                    document.write(`</ul> \
                </div> \
            </div> `); 
                
            //Carte de France :
            document.write(`<div class="mt-8 xl:mt-0 col-span-2" > \
                <div class="flex"> \
                    <div class="flex-shrink-0 mr-8" style="width:150px;"> \
                        <img height="200" width="200" src="map/map.svg" alt="Altanna - Carte de France des sites et ahences d'Altanna" title="Altanna est présent partout en France"/> \
                    </div> \
                    <div class="flex-1 flex flex-col space-y-4 mt-1"> \
                        <h3 class="text-base font-semibold text-gray-800"> \
                            Altanna transforme et facilite l’accès, la maîtrise et le contrôle du SI de votre entreprise, partout en France. \
                        </h3> \
                        <p class="text-xs font-semibold uppercase text-gray-500 ">Nous sommes présent à: </p> \
                        <p class="text-base text-gray-500">Paris • Lyon • Grenoble</p> \
                    </div> \
                </div> \
            </div> \
        </div>`);

        //LinkdIn :
        document.write(`<div class="mt-8 border-t border-gray-200 pt-8 gap-12 md:flex md:items-center md:justify-center"> \
            <div class="flex space-x-3"> \
                <p class="text-gray-500">Nous suivre sur : </p> \
                <a class="underline text-gray-600 hover:text-gray-500" \
                    href="https://www.linkedin.com/company/altanna/about/"> \
                    LinkedIn \
                </a> \
            </div> `);
        
            document.write(`<div class="flex space-x-3"> \
                <p class="text-gray-500">© 2022 Altanna</p> \
            </div> \
            <div class="flex space-x-3"> _
                <p>`);

                //Adresse :
                for(i = 0 ; i < Adresse.length; i++){
                    document.write(`<a class="underline text-gray-600 hover:text-gray-500" target="_blank" rel="noreferrer" href="`, Adresse[i].lien,`"> \
                                        `, Adresse[i].lieu,` </a><br>`);
                }

                document.write(`</p> \
            </div> \
        </div> \
    </div> \
</footer>`);
};

function Modal () {
    document.write(`<div id = "`, Contact.id,`" class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title" \
    aria-modal="true" \
    style="display:none;" \
    x-ref="dialog"> \
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" style="display:block;" > \
            <div onclick=document.getElementById('`, Contact.id,`').style.display='none' \
                aria-hidden="true" \
                style="display:block;" \
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" \
                x-description="Background overlay, show/hide based on modal state." \
                x-show="openContactModal" \
                x-transition:enter="ease-out duration-300" \
                x-transition:enter-end="opacity-100" \
                x-transition:enter-start="opacity-0" \
                x-transition:leave="ease-in duration-200" \
                x-transition:leave-end="opacity-0" \
                x-transition:leave-start="opacity-100"> \
            </div>
            <span aria-hidden="true" \
                class="hidden sm:inline-block sm:align-middle sm:h-screen"> \
            </span> \
            <div class="inline-block align-bottom bg-gradient-to-b to-gray-800 from-gray-900 pt-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full" \
                x-description="Modal panel, show/hide based on modal state." \
                x-show="openContactModal" \
                x-transition:enter="ease-out duration-300" \
                x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" \
                x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" \
                x-transition:leave="ease-in duration-200" \
                x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" \
                x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"> \
                <div> \
                    <div class="sm:block absolute top-0 right-0 pt-4 pr-4"> \
                        <button type="button" class="text-gray-50 hover:text-white focus:outline-none" onclick=document.getElementById('`, Contact.id,`').style.display='none'> \
                            <span class="sr-only">Fermer</span> \
                            <svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> \
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> \
                            </svg> \
                        </button> \
                    </div> \
                    <div class="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-gray-800"> \
                        <img class="h12 w-12"  height="25" width="25" src="logo-white.svg"> \
                    </div> \
                    <div class="mt-3 sm:mt-5"> \
                        <h3 class="text-2xl leading-6 font-bold text-gray-100 text-center" \
                            id="modal-title"> \
                            Contacter un expert Altanna \
                        </h3> \
                        <div class="mt-2"> \
                            <p class="text-sm text-gray-400 text-center"> \
                                Nous répondons aux demandes de contact sous 48h. \
                            </p> \
                        </div> \
                        <form class="space-y-8" action="send.php" method="post" data-ajaxform data-container="formResult"> \
                            <input type="hidden" name="actionform" value="contact" /> \
                            <div class="pt-8 p-9 "> \
                                <div class="mt-6 grid grid-cols-1 gap-y-2 gap-x-4 sm:grid-cols-12"> \
                                    <div class="sm:col-span-6"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="first-name" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="first-name"> \
                                                Votre prénom \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helpers> \
                                                La saisie d'un prénom est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-6"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="last-name" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="last-name"> \
                                                Votre nom \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helpers> \
                                                La saisie d'un nom est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-6"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="email" placeholder=" " type="email"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="email"> \
                                                Votre email \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helper> \
                                                La saisie d'un email est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-6"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="phone" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="phone"> \
                                                Votre téléphone \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helper> \
                                                La saisie d'un numéro téléphone est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-12"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="address" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="address"> \
                                                Votre adresse \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helper> \
                                                La saisie d'un numéro d'une adresse est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-8"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="city" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="city"> \
                                                Ville \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helper> \
                                                La saisie d'une ville est obligatoire \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-4"> \
                                        <div class="relative z-0 w-full mb-5"> \
                                            <input class="floating" name="postal-code" placeholder=" " type="text"> \
                                            <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500" for="postal-code"> \
                                                Code postal \
                                            </label> \
                                            <span class="text-sm text-red-600 hidden" data-form-helper> \
                                                La saisie d'un code postal est obligatoire. \
                                            </span> \
                                        </div> \
                                    </div> \
                                    <div class="sm:col-span-12"> \
                                        <label class="mt-1 block text-base text-gray-500" for="contexte"> \
                                            Votre projet, votre entreprise \
                                        </label> \
                                        <div class="mt-2"> \
                                            <textarea class="max-w-lg shadow-sm block w-full text-gray-50  sm:text-sm border bg-gray-800 border-gray-700" \
                                                id="contexte" name="contexte" \
                                                rows="8"></textarea> \
                                        </div> \
                                        <span class="mt-1 block text-xs text-gray-500">Décrivez les éléments clés qui nous permettrons de préparer au mieux notre future rencontre.</span> \
                                    </div> \
                                    <!-- Resultat du formulaire --> \
                                    <div class="sm:col-span-12" id="formResult"></div> \
                                </div> \
                            </div> \
                            <div class="mt-8 p-9"> \
                                <button class="inline-flex justify-center w-full btn btn-white" data-confetti id="submit_form" type="submit"> \
                                    Envoyer \
                                </button> \
                            </div> \
                        </form> \
                    </div> 
                </div> \
            </div> \
        </div> \
    </div>`);
};

//Fonction pour le menu déroulant de l'index mais ne fonctionne pas
/*
function Hero () {
    //Titre
    document.write('<section class="mt-9 sm:mt-16 px-4"> \
        <div class="container text-center"> \
            <h1 class="sm:max-w-7xl mx-auto text-3xl sm:text-7xl lg:text-8xl tracking-tight font-extrabold text-gray-900"> \
                <span class="block xl:inline">Experts en solutions d’infrastructures IT complexes</span> \
            </h1>');

        // Menu déroulant
        document.write('<div class="sm:max-w-2xl mt-8 sm:max-w-2xl mx-auto text-center "> \
                <div class="mt-3 flex flex-col md:flex-row gap-y-4 md:gap-y-0"  \
                    <div class="relative min-w-0 flex-grow"> \
                        <select name="Hero">');

                        for (var i=0; i < Liste_d.length; i++){
                            document.write('<option value = "liste"> \
                                <div class="outline-none btn btn-white w-full flex" \
                                    @click="Liste_d_Onclick(', Liste_d[i].id,')" \
                                    @click.outside="open = false" \
                                    @keydown.arrow-down.stop.prevent="onButtonClick()" \
                                    @keydown.arrow-up.stop.prevent="onButtonClick()" \
                                    <span class="block truncate" \
                                        ',Liste_d[i].name ,'\
                                    </span> \
                                </div> \
                            </option>');
                        }
                        document.write('</select>');

                        /*</div>
                        </div><div>
                            <button :aria-expanded="open"
                                    @click="onButtonClick()"
                                    @click.outside="open = false"
                                    @keydown.arrow-down.stop.prevent="onButtonClick()"
                                    @keydown.arrow-up.stop.prevent="onButtonClick()"
                                    aria-haspopup="listbox"
                                    aria-labelledby="listbox-label"
                                    class="outline-none btn btn-white w-full flex"
                                    type="button"
                                    x-ref="button">
                                <span class="block truncate"
                                    x-text="selected.name">
                                    -- Quels sont votre enjeux et votre besoin --
                                </span>
                                <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <svg aria-hidden="true"
                                        class="h-5 w-5 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        x-description="Heroicon name: solid/selector"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                            </button>
                            <ul
                                    :aria-activedescendant="activeDescendant"
                                    @keydown.arrow-down.prevent="onArrowDown()"
                                    @keydown.arrow-up.prevent="onArrowUp()"
                                    @keydown.enter.stop.prevent="onOptionSelect()"
                                    @keydown.escape="onEscape()"
                                    @keydown.space.stop.prevent="onOptionSelect()"
                                    aria-activedescendant=""
                                    aria-labelledby="listbox-label"
                                    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                    role="listbox"
                                    style="display:none;"
                                    tabindex="-1"
                                    x-description="Select popover, show/hide based on select state."
                                    x-max="1"
                                    x-ref="listbox"
                                    x-show="open"
                                    x-transition:leave="transition ease-in duration-100"
                                    x-transition:leave-end="opacity-0"
                                    x-transition:leave-start="opacity-100">
                                <template : key="id" x-for="[id, value] in Object.entries($store.listboxData.items)">
                                    <li :class="{ 'text-white bg-gray-800': activeIndex === id, 'text-gray-900': !(activeIndex === id) }"
                                        :id="'listbox-option-' + id"
                                        @click="choose(id)"
                                        @mouseenter="activeIndex = id"
                                        @mouseleave="activeIndex = null"
                                        class="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-900"
                                        id=""
                                        role="option"
                                        x-description="Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation."
                                        x-state:off="Not Highlighted"
                                        x-state:on="Highlighted">
                                        <span :class="{ 'font-semibold': selectedIndex === id, 'font-normal': !(selectedIndex === id) }"
                                            class="font-normal block truncate"
                                            x-state:off="Not Selected"
                                            x-state:on="Selected"
                                            x-text="value.name">
                                        </span>
                                        <span :class="{ 'text-white': activeIndex === id, 'text-indigo-600': !(activeIndex === id) }"
                                            class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
                                            style="display: none;"
                                            x-description="Checkmark, only display for selected option."
                                            x-show="selectedIndex === id"
                                            x-state:off="Not Highlighted"
                                            x-state:on="Highlighted">
                                            <svg aria-hidden="true"
                                                class="h-5 w-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                x-description="Heroicon name: solid/check"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path clip-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    fill-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                    </li>
                                </template>
                            </ul>
                        </div> 
                    document.write(`</div> \
                    <a id = "liste_dbtn" href = ./index.html class="btn btn-primary"> Découvrir l'offre </a> \
                </div> \
            </div> \
        </div> \
    </section>`);
};*/

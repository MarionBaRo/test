var Acceuil = {nom : "Acceuil", href : "index.html"};
var Expertise = {nom : "Expertise", href : "expertise.html"};
var Contact = {nom : "Nous Contacter", href : ""};
var Rejoindre = {nom : "Nous Rejoindre", href : "./careers.html"};

var Bouton = [Expertise];
var Liste = [Acceuil, Expertise, Contact, Rejoindre];
var Service = [{
    nom : "Security Zero Trust", href : "./zero-trust.html", cat : "security", type : "Cybersécurité" },{
    nom : "Digital Workspace", href : "./digital-workspace.html", cat : "infrastructure-cloud", type : "Infrastructure" },{
    nom : "Entreprise Networking", href : "./entreprise-networking.html", cat : "network", type : "Réseau" }
];

var Adresse = [{
    lieu : "10 Rue de Penthièvre, 75008 Paris (France)", lien : "https://www.google.com/maps/place/20+Bd+Eug%C3%A8ne+Deruelle,+69003+Lyon/@45.762807,4.8530102,18z/data=!3m1!4b1!4m5!3m4!1s0x47f4eb49a0d39e27:0x8a254ce143a4d89f!8m2!3d45.762807!4d4.8538978" },{
    lieu : "20 Boulevard Eugène Deruelle, 69003 Lyon (France)", lien : "https://www.google.com/maps/place/20+Bd+Eug%C3%A8ne+Deruelle,+69003+Lyon/@45.762807,4.8530102,18z/data=!3m1!4b1!4m5!3m4!1s0x47f4eb49a0d39e27:0x8a254ce143a4d89f!8m2!3d45.762807!4d4.8538978" },{
    lieu : "445 Rue Lavoisier, 38330 Montbonnot-Saint-Martin (France)", lien : "https://www.google.com/maps/place/445+Rue+Lavoisier,+38330+Montbonnot-Saint-Martin/data=!4m2!3m1!1s0x478a5f45485db821:0x18a1f2312e8d685c?sa=X&ved=2ahUKEwi8mdGe2Jr0AhUHxoUKHYJ1AMEQ8gF6BAgTEAE" }
];

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
        document.write('<div class="flex justify-start "> \
                <a  href="', Acceuil.href ,'"> \
                    <img  height="40" width="130" \
                        src="logo-with-text.svg"  alt="Altanna logo Altanna" title="Bienvenue sur Altanna"/> \
                </a>\
            </div> ');

        //A quoi ça sert ?
        document.write('<div class="-mr-2 -my-2 md:hidden"> \
                <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 \
                hover:text-gray-500 hover:bg-gray-100 focus:outline-none \
                " @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">\
                    <span class="sr-only">Open menu</span> \
                    <svg class="h-6 w-6" x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" \
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> \
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> \
                    </svg> \
                </button> \
            </div> ');
        
        //Boutons du menu
        document.write(`<div class="hidden md:flex items-center justify-end"> \
                <nav class="flex ml-auto items-center" x-data="Components.popoverGroup()" x-init="init()"> `);

                //Boutons simple
                for (var i=0; i < Bouton.length; i++){
                    document.write(`<a class="hidden sm:block btn btn-transparent" \
                       href="`, Bouton[i].href,`">`, Bouton[i].nom,`</a> `);
                }       

                // Bouton déroulant
                    document.write(`<div @click.away="onClickAway($event)" \
                         @keydown.escape.stop="open = false; focusButton()" \
                         class="relative hidden sm:inline-block text-left" \
                         x-data="Components.dropdown({ open: false })" \
                         x-init="init()"> \
                        <div> \
                            <button @click="onButtonClick()" \
                                    @keydown.arrow-down.prevent="onArrowDown()" \
                                    @keydown.arrow-up.prevent="onArrowUp()" \
                                    @keydown.enter.prevent="onButtonEnter()" \
                                    @keyup.space.prevent="onButtonEnter()" \
                                    aria-expanded="false" \
                                    aria-haspopup="true" \
                                    class="outline-none inline-flex justify-center items-center w-full btn btn-transparent" \
                                    id="dropdown-button" type="button" \
                                    x-bind:aria-expanded="open.toString()" \
                                    x-ref="button"> \
                                Services managés \
                                <svg aria-hidden="true" class="-mr-1 ml-1 h-5 w-5" \
                                     fill="currentColor" viewBox="0 0 20 20" \
                                     x-description="Heroicon name: solid/chevron-down" \
                                     xmlns="http://www.w3.org/2000/svg"> \
                                    <path clip-rule="evenodd" \
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" \
                                          fill-rule="evenodd"></path> \
                                </svg> \
                            </button> \
                        </div>`);
                        
                    //Liste des Services :
                        document.write(`<div @keydown.arrow-down.prevent="onArrowDown()" \
                             @keydown.arrow-up.prevent="onArrowUp()" \
                             @keydown.enter.prevent="open = false; focusButton()" \
                             @keydown.tab="open = false" \
                             @keyup.space.prevent="open = false; focusButton()" \
                             aria-labelledby="dropdown-button" \
                             aria-orientation="vertical" \
                             class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" \
                             role="menu" \
                             style="display: none;" \
                             tabindex="-1" \
                             x-bind:aria-activedescendant="activeDescendant" \
                             x-description="Dropdown menu, show/hide based on menu state." \
                             x-ref="dropdown-items" \
                             x-show="open" \
                             x-transition:enter="transition ease-out duration-100" \
                             x-transition:enter-end="transform opacity-100 scale-100" \
                             x-transition:enter-start="transform opacity-0 scale-95" \
                             x-transition:leave="transition ease-in duration-75" \
                             x-transition:leave-end="transform opacity-0 scale-95" \
                             x-transition:leave-start="transform opacity-100 scale-100"> \
                            <div class="py-1" role="none">`);
                            
                            for (i=0; i < Service.length; i++){ 
                            document.write(`<a :class="{ 'bg-gray-100 text-gray-900': activeIndex === `, i,`, 'text-gray-700': !(activeIndex === 0) }" \
                                   @click="open = false; focusButton()" \
                                   @mouseenter="activeIndex = `, i,`" \
                                   @mouseleave="activeIndex = null" \
                                   class="block px-4 py-2 text-sm text-gray-700" \
                                   href="`, Service[i].href,`" \
                                   id="dropdown-item-`, i,`" \
                                   role="menuitem" \
                                   tabindex="-1" \
                                   x-state:off="Not Active" x-state:on="Active"> \
                                <span class="flex items-center relative"> \
                                    <span class="h-3 w-3 bg-gradient-to-t relative flex items-center relative" data-category="`, Service[i].cat,`"> \
                                    </span> \
                                    <span class="text-xs block text-gray-400 ml-1">`, Service[i].type,`</span> \
                                </span> \
                                    <span class="block leading-4">`, Service[i].nom,`</span> \
                                </a>`);
                            }
                                
                            document.write(`<span class="block leading-4 px-4 py-2 text-sm text-gray-400 border-t"> \
                               Pour un service sur mesure, contactez nos conseillers. \
                                </span> \
                            </div> \
                        </div> \
                    </div> \
                </nav>`);

                //Bouton Nous rejoindre - Nous contacter
                document.write(`<a class="hidden sm:block btn btn-transparent border" \
                   href="careers.html">Nous rejoindre</a> \
                <div class="flex-grow" @keydown.window.escape="openContactModal = false"> \
                    <!-- Modal trigger--> \
                    <button @click="openContactModal = true" \
                            class="btn btn-primary inline-flex" \
                            type="button"> \
                        Nous contacter \
                    </button> \
                </div> \
            </div> \
        </div> \
    </div>');' \ 
</header> `);
};

/*
<!--Mobile menu--> \
    <div x-show="open" \
         x-transition:enter="duration-200 ease-out" \
         x-transition:enter-start="opacity-0 scale-95" \
         x-transition:enter-end="opacity-100 scale-100" \
         x-transition:leave="duration-100 ease-in" \
         x-transition:leave-start="opacity-100 scale-100" \
         x-transition:leave-end="opacity-0 scale-95" \
         x-description="Mobile menu, show/hide based on mobile menu state." \
         class="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden" \
         x-ref="panel" \
         @click.away="open = false" \
         style="display: none;"> \
        <div class="rounded-lg shadow-lg bg-white"> \
            <div class="px-5"> \
                <div class="flex items-center justify-between"> \
                    <div> \
                        <img  alt="logo Altanna" src="logo-with-text.svg"/> \
                    </div> \
                    <div class="-mr-2"> \
                        <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none" @click="toggle"> \
                            <span class="sr-only">Close menu</span> \
                            <svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> \
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> \
                            </svg> \
                        </button> \
                    </div> \
                </div> \
                <div class="mt-6"> \
                    <nav class="grid gap-y-1"> \
                        <a href="./index.html" class="-mx-3 p-3 py-2 flex items-center  hover:bg-gray-50"> \
                            Accueil \
                        </a> \
                        <a href="./expertise.html" class="-mx-3 p-3 py-2 flex items-center  hover:bg-gray-50"> \
                           Notre expertise \
                        </a> \
                    </nav> \
                </div> \
                <div class="mt-4"> \
                    <p class="text-xs font-medium uppercase text-gray-500 tracking-wid">Nos services managés</p> \
                    <div class="grid gap-y-1 ml-4"> \
                        <a class="-ml-4 p-3 py-2 text-base bg-gray-100 text-gray-700 hover:bg-gray-200" \
                           href="./zero-trust-by-altanna.html"> \
                        <span class="flex items-center relative"> \
                            <span class="h-3 w-3 bg-gradient-to-t relative flex items-center relative" data-category="security"> \
                            </span> \
                            <span class="text-xs block text-gray-400 ml-1">CyberSécurité</span> \
                        </span> \
                            <span class="block leading-4">Sécurity Zero trust by Altanna</span> \
                        </a> \
                        <a class="-ml-4 p-3 py-2 text-base bg-gray-100 text-gray-700 hover:bg-gray-200" \
                           href="./entreprise-networking-by-altanna.html"> \
                                 <span class="flex items-center relative"> \
                                    <span class="h-3 w-3 bg-gradient-to-t relative flex items-center relative" data-category="network"> \
                                    </span> \
                                    <span class="text-xs block text-gray-400 ml-1">Réseaux</span> \
                                </span> \
                            <span class="block leading-4">Entreprise Networking by Altanna</span> \
                        </a> \
                        <a class="-ml-4 p-3 py-2 text-base bg-gray-100 text-gray-700 hover:bg-gray-200" \
                           href="./digital-workspace-by-altanna.html"> \
                        <span class="flex items-center relative"> \
                            <span class="h-3 w-3 bg-gradient-to-t relative flex items-center relative" data-category="infrastructure-cloud"> \
                            </span> \
                            <span class="text-xs block text-gray-400 ml-1">Infrastrucure</span> \
                        </span> \
                            <span class="block leading-4">Digital workspace by Altanna</span> \
                        </a> \
                    </div> \
                </div> \
                <div class="grid gap-y-4 pb-4 mt-4"> \
                    <button @click="open = false; openContactModal = true" \
                            class="btn btn-primary block w-full text-center" \
                            type="button"> \
                        Nous contacter \
                    </button> \
                    <a class="btn btn-white block w-full text-center" \
                       href="./careers.html" \
                    > \
                        Nous rejoindre \
                    </a> \
                </div> \
            </div> \
        </div> \
    </div> \
     */


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
                            document.write(`@click="openContactModal = true"`);
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
                </div> `); 
                
            //Carte de France :
            document.write(`</div> \
            <div class="mt-8 xl:mt-0 col-span-2" > \
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
        <p class="text-gray-500">© 2022 Altanna</p>`);

        //Adresse :
        for(i = 0 ; i < Adresse.length; i++){
            document.write(`<a class="underline text-gray-600 hover:text-gray-500" target="_blank" rel="noreferrer" href="`, Adresse[i].lien,`"> \
                                `, Adresse[i].lieu,` </a>`);
        }

        document.write(`</div> \
        </div> \
    </div> \
</footer>`);
};
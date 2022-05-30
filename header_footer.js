var Acceuil = {nom : "Acceuil", href : "index.html"};
var Expertise = {nom : "Expertise", href : "expertise.html"};
var Contact = {nom : "Nous Contacter", href : ""};
var Rejoindre = {nom : "Nous Rejoindre", href : "./careers.html"};

var Liste = [Acceuil, Expertise, Contact, Rejoindre];
var Bouton = [Expertise];

var Service = [{
    nom : "Security Zero Trust", href : "./zero-trust.html", cat : "security", type : "Cybersécurité" },{
    nom : "Digital Workspace", href : "./digital-workspace.html", cat : "infrastructure-cloud", type : "Infrastructure" },{
    nom : "Entreprise Networking", href : "./entreprise-networking.html", cat : "network", type : "Réseau" }
];
var Bouton_d = [{
    nom : "Services Managés", liste : Service}
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
    document.write('<div class="bandeau">');

            //Logo Altanna 
            document.write('<div class="flex justify-start "> \
                <a  href="', Acceuil.href ,'"> \
                    <img  height="40" width="130" \
                        src="logo-with-text.svg"  alt="Altanna logo Altanna" title="Bienvenue sur Altanna"/> \
                </a>\
            </div> ');

            //A quoi ça sert ?
            /*document.write('<div class="-mr-2 -my-2 md:hidden"> \
                    <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 \
                    hover:text-gray-500 hover:bg-gray-100 focus:outline-none \
                    " @click="toggle" @mousedown="if (open) $event.preventDefault()" aria-expanded="false" :aria-expanded="open.toString()">\
                        <span class="sr-only">Open menu</span> \
                        <svg class="h-6 w-6" x-description="Heroicon name: outline/menu" xmlns="http://www.w3.org/2000/svg" \
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"> \
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> \
                        </svg> \
                    </button> \
                </div> '); */
            
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
</header> `);
};

function Footer (){
    document.write(`<footer aria-labelledby="footer-heading"> \
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
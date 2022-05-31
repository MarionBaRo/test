
    //Boutons du menu
            document.write(`<div class="hidden md:flex items-center justify-end"> \
                <nav class="flex ml-auto items-center" x-data="Components.popoverGroup()" x-init="init()"> `);

                //Boutons simple
                for (var i=0; i < Bouton.length; i++){
                    document.write(`<div><a class="hidden sm:block btn btn-transparent" \
                        href="`, Bouton[i].href,`">`, Bouton[i].nom,`</a></div> `);
                }       

                // Bouton déroulant
                for (var i=0; i < Bouton_d.length; i++){
                    document.write(`<div class = "outline-none inline-flex justify-center items-center w-full btn btn-transparent deroulant"> <a>`, Bouton_d[i].nom,` </a>
                        <ul class ="sous">`);
                            for (var j=0; j < Bouton_d[i].liste.length; j++){
                                document.write(`<li><a class="block px-4 py-2 text-sm text-gray-700" id="dropdown-item-`, j,`" href="`,Bouton_d[i].liste[j].href,`">`,Bouton_d[i].liste[j].nom,`</a></li>`);
                            }
                        
                        document.write(`</ul>
                    </div>`);
                }
                
                document.write(`</nav>`);




// Ancien Menu

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
</div> `);


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

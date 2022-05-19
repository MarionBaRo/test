//Liste des partenaires :
var Cybersecurite_Securite = [{
    cat : "security", nom : "Cybersécurité", title : "Altanna - Cybersécurité", alt : "Altanna - Objet 3d, coffre cadenas illustrant les services de cybersécurité", src : "categories/security.png"}, {
    cat : "security", nom : "Fortinet", title : "Altanna, partenaire de Fortinet", alt : "Altanna - Logo de Fortinet", src : "partners/fortinet.svg"},{
    cat : "security", nom : "F5", title : "Altanna, partenaire de F5", alt : "Altanna - Logo de F5", src : "partners/F5Networks.svg"},{
    cat : "security", nom : "Imperva", title : "Altanna, partenaire de Imperva", alt : "Altanna - Logo de Imperva", src : "partners/Imperva.svg"}];

var Cybersecurite_Reseau = [{
    cat : "network",nom : "Réseaux",title : "Altanna - Services réseau",alt : "Altanna - Objet 3d illsutrant les services réseau",src : "categories/network.png"},{
    cat : "network",nom : "Cisco",title : "Altanna, partenaire de Cisco",alt : "Altanna - Logo de Cisco",src : "partners/Cisco.svg"},{
    cat : "network",nom : "PaloAltoNetworks",title : "Altanna, partenaire de PaloAltoNetworks",alt : "Altanna - Logo de PaloAltoNetworks",src : "partners/PaloAltoNetworks.svg"},{
    cat : "network",nom : "HewlettPackardEnterprise",title : "Altanna, partenaire de HewlettPackardEnterprise",alt : "Altanna - Logo de HewlettPackardEnterprise",src : "partners/HewlettPackardEnterprise.svg"}];

var Stockage_et_sauvegardex = [{
    cat : "data-management",nom : "Data management",title : "Altanna - Services de data-management",alt : "Altanna - Objet 3d, coffre-fort illustrant les services de data-management",src : "categories/data-management.png"},{
    cat : "data-management",nom : "Commvault",title : "Altanna, partenaire de Commvault",alt : "Altanna - Logo de Commvault",src : "partners/Commvault.svg"},{
    cat : "data-management",nom : "PureStorage",title : "Altanna, partenaire de PureStorage",alt : "Altanna - Logo de PureStorage",src : "partners/PureStorage.svg"},{
    cat : "data-management",nom : "Netapp",title : "Altanna, partenaire de Netapp",alt : "Altanna - Logo de Netapp",src : "partners/Netapp.svg"},{
    cat : "data-management",nom : "Veeam",title : "Altanna, partenaire de Veeam",alt : "Altanna - Logo de Veeam",src : "partners/Veeam.svg"},{
    cat : "data-management",nom : "Ansible",title : "Altanna, partenaire de Ansible",alt : "Altanna - Logo de Ansible",src : "partners/Ansible.svg"}];

var Serveurs = [{
    cat : "infrastructure-cloud",nom : "Infrastructure DC & Cloud",title : "Altanna - Services d'infrastrutures data-center et cloud",alt : "Altanna - Objet 3d, nuages illustrant les services d'infrastrutures data-center et cloud",src : "categories/infrastructure-cloud.png"},{
    cat : "infrastructure-cloud",nom : "Windows",title : "Altanna, partenaire de Windows",alt : "Altanna - Logo de Windows",src : "partners/Windows.svg"},{
    cat : "infrastructure-cloud",nom : "Citrix",title : "Altanna, partenaire de Citrix",alt : "Altanna - Logo de Citrix",src : "partners/Citrix.svg"},{
    cat : "infrastructure-cloud",nom : "Debian",title : "Altanna, partenaire de Debian",alt : "Altanna - Logo de Debian",src : "partners/Debian.svg"},{
    cat : "infrastructure-cloud",nom : "Vmware",title : "Altanna, partenaire de Vmware",alt : "Altanna - Logo de Vmware",src : "partners/Vmware.svg"},{
    cat : "infrastructure-cloud",nom : "Splunk",title : "Altanna, partenaire de Splunk",alt : "Altanna - Logo de Splunk",src : "partners/Splunk.svg"}];

var Supervision = [{
    cat : "supervision-production",nom : "Supervision & production",title : "Altanna - Services de supervision et production",alt : "Altanna - Objet 3d, support d'écriture avec fiche de soins illustrant les services de supervision et production",src : "categories/supervision-production.png"},{
    cat : "supervision-production",nom : "Solarwinds",title : "Altanna, partenaire de Solarwinds",alt : "Altanna - Logo de Solarwinds",src : "partners/Solarwinds.svg"},{
    cat : "supervision-production",nom : "DataDog",title : "Altanna, partenaire de DataDog",alt : "Altanna - Logo de DataDog",src : "partners/DataDog.svg"},{
    cat : "supervision-production",nom : "Dockers",title : "Altanna, partenaire de Dockers",alt : "Altanna - Logo de Dockers",src : "partners/Dockers.svg"},{
    cat : "supervision-production",nom : "Kubernetes",title : "Altanna, partenaire de Kubernetes",alt : "Altanna - Logo de Kubernetes",src : "partners/Kubernetes.svg"},{
    cat : "supervision-production",nom : "Ansible",title : "Altanna, partenaire de Ansible",alt : "Altanna - Logo de Ansible",src : "partners/Ansible.svg"}];

var patner = [Cybersecurite_Securite, Cybersecurite_Reseau, Stockage_et_sauvegardex, Serveurs, Supervision];

//Affichage des partenaires en animation
document.write('<section class="mt-9 sm:mt-16 py-8 overflow-hidden"> \n');
document.write('<div class="gallery-wrapper flex gap-10 py-8"> \n');
document.write('<div class="gallery flex gap-10 overflow-y-visible">\n');
document.write('</div>\n');

for (i=0;i<patner.length;i++){
    document.write('<div class="gallery-grid grid grid-cols-', (patner[i].length)/2, '-gallery gap-10">\n');
    //Image illustrant la catégorie :
    document.write('<div class="gallery-grid-column">\n');
    document.write('<div class="gallery-grid-item h-40 w-40 bg-gradient-to-t relative flex items-center relative" data-category="',patner[i][0].cat,'">\n');
    document.write('<div class="gallery-img-wrapper relative h-full w-full px-5 flex justify-center">\n');
    document.write('<img class="object-cover absolute top-0 left-0 h-full w-full opacity-60" width="200" height="200" src="',patner[i][0].src,'" alt="',patner[i][0].alt,'" title="',patner[i][0].title,'">\n');
    document.write('<div class="block text-white text-center text-sm self-end mt-2 leading-4 mb-2 font-bold	">',patner[i][0].nom,'</div>\n');
    document.write('</div>\n');
    document.write('<div class="absolute -top-5 -right-5 h-10 w-10 bg-gray-900 z-10 flex items-center justify-center">\n');
    document.write(`<img src="logo-white.svg" loading="lazy"  class="h-6 w-6" width="50" height="50" alt="Altanna - Logo décoratif" title="Logo d'Altanna"/>\n`);
    document.write('</div>\n');
    document.write('</div>\n');
    document.write('</div>\n');

    //Partenaire
    for (j=1;j<patner[i].length;j++){
        document.write('<div class="gallery-grid-column">\n');
        document.write('<div class="gallery-grid-item h-40 w-40 bg-gradient-to-t from-gray-100 to-gray-50 border border-gray-100 relative flex items-center">\n');
        document.write('<div class="gallery-img-wrapper w-full p-5">\n');
        document.write('<img class="max-h-16 mx-auto" loading="lazy" width="200" height="200" src="', patner[i][j].src,'" alt="', patner[i][j].alt,'" title="', patner[i][j].title,'"/>\n');
        document.write('<div class="sr-only">',patner[i][j].nom ,'</div>\n');
        document.write('</div>\n');
        document.write('<div class="absolute -bottom-3 -left-3 h-6 w-6 bg-gradient-to-t z-10"\n');
        document.write('</div>\n');
        document.write('</div>\n')
        document.write('</div>\n')
    }
    document.write('</div>\n');
};
document.write('</div>\n');
document.write('<div class="gallery flex gap-10 overflow-y-visible">\n');
document.write('</div>\n');
document.write('<p class="-mt-3 text-center text-gray-400 italic">Nos partenaires IT les plus reconnus dans leurs domaines.</p>\n');
document.write('</section>\n');
//FUTURE: Create modal with hero icons to replace hero selection dropdown menu
//FUTURE: Create modal with aspect icons to replace aspect selection dropdown menu
//FUTURE: Let players cycle through a chosen aspect images
//FUTURE: Make it easier to see separation between heroes and villain

//FUTURE: Add a delay to random buttons, so it can't be spammed

//FIXME: Fix the addition of hero to picklist when their icon has been deselected

//REGION: On Load
var heroes = [];
var villains = [];
var encounters = [];
var aspects = [];

var aspectVariants = [];

var heroPicklist = [];
var villainPicklist = [];
var encounterPicklist = [];

var currentHero01, currentHero02, currentAspect01, currentAspect02, currentVillain, currentEncounter;
var currentHero03, currentAspect03, currentHero04, currentAspect04;

var currentSpiWoAspect01, currentSpiWoAspect02;

var numberOfPlayers = 2; //default

$(function(){

//    console.log(MCLCG_DATA);
    
    placeDataIntoArrays();
    createDropdownMenuItems();
    createPicklists();
    
    addFooter();
    
    setPlayers(numberOfPlayers);
    
});

function placeDataIntoArrays(){
    
//    console.log("Placing data into arrays...");
    
    for (var i in MCLCG_DATA.heroes){
        heroes.push(MCLCG_DATA.heroes[i]);
    }
    
    for (var i in MCLCG_DATA.aspects){
        aspects.push(MCLCG_DATA.aspects[i]);
    }
    
    for (var i in MCLCG_DATA.villains){
        villains.push(MCLCG_DATA.villains[i]);
    }
    
    for (var i in MCLCG_DATA.encounter_sets){
        encounters.push(MCLCG_DATA.encounter_sets[i]);
    }
    
    heroes.sort(compareNames);
    villains.sort(compareNames);
    encounters.sort(compareNames);
}

function createDropdownMenuItems(){
//    console.log("Placing items into dropdown menus...");
    
    var herolist1 = $("#heroSelect01List");
    var herolist2 = $("#heroSelect02List");
    var herolist3 = $("#heroSelect03List");
    var herolist4 = $("#heroSelect04List");
    
    var aspectList1 = $("#aspectSelect01List");
    var aspectList2 = $("#aspectSelect02List");
    var aspectList3 = $("#aspectSelect03List");
    var aspectList4 = $("#aspectSelect04List");
    
    var villainList = $("#villainSelectList");
    var encounterList = $("#encounterSelectList");
    
    var heroListItems1 = "";
    var heroListItems2 = "";
    var heroListItems3 = "";
    var heroListItems4 = "";
    
    var aspectListItems1 = "";
    var aspectListItems2 = "";
    var aspectListItems3 = "";
    var aspectListItems4 = "";
    
    var villainListItems = "";
    var encounterListItems = "";
    
    //HERO-ASPECT 01
    for (var i in heroes){
        if(heroes[i].active == true){
            heroListItems1 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectHero01(\'';
            heroListItems1 += heroes[i].id;
            heroListItems1 += '\', \'';            
            heroListItems1 += heroes[i].name;
            heroListItems1 += '\', \'';
            heroListItems1 += heroes[i].image;
            heroListItems1 += '\')">' + heroes[i].name + '</a>';
            
        }

    }
    
    for (var i in aspects){
        aspectListItems1 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectAspect01(\'';
        aspectListItems1 += aspects[i].name;
        aspectListItems1 += '\', \'';
        aspectListItems1 += aspects[i].image;
        aspectListItems1 += '\')">' + aspects[i].name + '</a>';
    }
    
    //HERO-ASPECT 02
    for (var i in heroes){
        if(heroes[i].active == true){
            heroListItems2 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectHero02(\'';
            heroListItems2 += heroes[i].id;
            heroListItems2 += '\', \'';            
            heroListItems2 += heroes[i].name;
            heroListItems2 += '\', \'';
            heroListItems2 += heroes[i].image;
            heroListItems2 += '\')">' + heroes[i].name + '</a>';
        }
    }
    
    for (var i in aspects){
        aspectListItems2 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectAspect02(\'';
        aspectListItems2 += aspects[i].name;
        aspectListItems2 += '\', \'';
        aspectListItems2 += aspects[i].image;
        aspectListItems2 += '\')">' + aspects[i].name + '</a>';
    }
    
    //HERO-ASPECT 03
    for (var i in heroes){
        if(heroes[i].active == true){
            heroListItems3 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectHero03(\'';
            heroListItems3 += heroes[i].id;
            heroListItems3 += '\', \'';            
            heroListItems3 += heroes[i].name;
            heroListItems3 += '\', \'';
            heroListItems3 += heroes[i].image;
            heroListItems3 += '\')">' + heroes[i].name + '</a>';
        }
    }
    
    for (var i in aspects){
        aspectListItems3 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectAspect03(\'';
        aspectListItems3 += aspects[i].name;
        aspectListItems3 += '\', \'';
        aspectListItems3 += aspects[i].image;
        aspectListItems3 += '\')">' + aspects[i].name + '</a>';
    }
    
    //HERO-ASPECT 04
    for (var i in heroes){
        if(heroes[i].active == true){
            heroListItems4 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectHero04(\'';
            heroListItems4 += heroes[i].id;
            heroListItems4 += '\', \'';            
            heroListItems4 += heroes[i].name;
            heroListItems4 += '\', \'';
            heroListItems4 += heroes[i].image;
            heroListItems4 += '\')">' + heroes[i].name + '</a>';
        }
    }
    
    for (var i in aspects){
        aspectListItems4 += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectAspect04(\'';
        aspectListItems4 += aspects[i].name;
        aspectListItems4 += '\', \'';
        aspectListItems4 += aspects[i].image;
        aspectListItems4 += '\')">' + aspects[i].name + '</a>';
    }
    
    //VILLAIN
    for (var i in villains){
        if(villains[i].active == true){
            villainListItems += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectVillain(\'';
            villainListItems += villains[i].id;
            villainListItems += '\', \'';            
            villainListItems += villains[i].name;
            villainListItems += '\', \'';
            villainListItems += villains[i].image;
            villainListItems += '\')">' + villains[i].name + '</a>';
        }
    }
    
    //ENCOUNTERS
    for (var i in encounters){
        if(encounters[i].active == true){
            encounterListItems += '<a class="dropdown-item" href="javascript:void(0);" onclick="selectEncounter(\'';
            encounterListItems += encounters[i].id;
            encounterListItems += '\', \'';            
            encounterListItems += encounters[i].name;
            encounterListItems += '\', \'';
            encounterListItems += encounters[i].image;
            encounterListItems += '\')">' + encounters[i].name + '</a>';
        }
    }
    
    herolist1.html(heroListItems1);
    aspectList1.html(aspectListItems1);
    herolist2.html(heroListItems2);
    aspectList2.html(aspectListItems2);
    herolist3.html(heroListItems3);
    aspectList3.html(aspectListItems3);
    herolist4.html(heroListItems4);
    aspectList4.html(aspectListItems4);
    
    villainList.html(villainListItems);
    encounterList.html(encounterListItems);
    
}

//REGION: Create Picklists

function createPicklists(){
    
//    console.log('Creating hero picklist...');
    
    for (var i in heroes){
        if(heroes[i].active == true){
            heroPicklist.push(heroes[i]);
        }
    }
    
//    console.log(heroPicklist);
    
//    console.log('Creating villain picklist...');
    
    for (var i in villains){
        if(villains[i].active == true){
            villainPicklist.push(villains[i]);
        }
    }
    
//    console.log(villainPicklist);
    
//    console.log('Creating encounter picklist...');
    
    for (var i in encounters){
        if(encounters[i].active == true){
            encounterPicklist.push(encounters[i]);
        }
    }
    
    heroes.sort(compareIDs);
    villains.sort(compareIDs);
    encounters.sort(compareIDs);
    
//    console.log(encounterPicklist);
    
    var heroPicklistDiv = $("#heroIcons");
    var heroOutput = "";
    
    for (var i in heroes){
        if(heroes[i].active == true){
            heroOutput += '<img class="picklistIcon" src="images/heroes/icons/';
            heroOutput += heroes[i].image;
            heroOutput += '" ';
            heroOutput += 'onclick="setHeroInPicklist(this,\'' + heroes[i].name + '\', ' + heroes[i].id + ', \''+heroes[i].image+'\')"'
            heroOutput +='>';    
        } else {
            heroOutput += '<img class="picklistIcon" src="images/heroes/icons/bw_';
            heroOutput += heroes[i].image;
            heroOutput += '" ';
            heroOutput +='>';  
        }  
    }
    
    heroPicklistDiv.html(heroOutput);
    
    var villainPicklistDiv = $("#villainIcons");
    var villainOutput = "";
    
    for (var i in villains){
        if(villains[i].active == true){
            villainOutput += '<img class="picklistIcon" src="images/villains/icons/';
            villainOutput += villains[i].image;
            villainOutput += '" ';
            villainOutput += 'onclick="setVillainInPicklist(this,\'' + villains[i].name + '\', ' + villains[i].id + ', \''+villains[i].image+'\')"'
            villainOutput +='>';    
        } else {
            villainOutput += '<img class="picklistIcon" src="images/villains/icons/bw_';
            villainOutput += villains[i].image;
            villainOutput += '" ';
            villainOutput +='>';  
        } 
    }
    
    villainPicklistDiv.html(villainOutput);
    
    var encounterPicklistDiv = $("#encounterIcons");
    var encounterOutput = "";
    
    for (var i in encounters){
        if(encounters[i].active == true){
//            encounterOutput += '<button type="button" class="btn btn-encounter btn-warning full"';
            encounterOutput += getButtonType(encounters[i].release);
            encounterOutput += '" ';
            encounterOutput += 'onclick="setEncounterInPicklist(this,\'' + encounters[i].name + '\', ' + encounters[i].id + ')"';
            encounterOutput +='>';
            encounterOutput += encounters[i].name;
            encounterOutput +='</button>';  

        } else {
            encounterOutput += '<button type="button" class="btn btn-encounter btn-secondary faded">';
            encounterOutput += encounters[i].name;
            encounterOutput +='</button>';  
        } 
    }
    
    encounterPicklistDiv.html(encounterOutput);
    
}

function getButtonType(release){
    
    var output; 
    
    switch(release){
        case "Core Set":
            output = '<button type="button" class="btn btn-encounter btn-warning full"';
            break;
        case "The Green Goblin":
            output = '<button type="button" class="btn btn-encounter btn-green-goblin full"';
            break;
        case "The Rise of Red Skull":
            output = '<button type="button" class="btn btn-encounter btn-red-skull full"';
            break;
        case "The Once and Future Kang":
            output = '<button type="button" class="btn btn-encounter btn-kang full"';
            break;
        default:
            output = '<button type="button" class="btn btn-encounter btn-warning full"';
            break;
    }
    
    return output;
}

//REGION: Individual picklist functions

function setEncounterInPicklist(button, encName, encID){
//    console.log(heroName + " clicked...");
    
    for (var i in encounters){
        
        var currentEnc = encounters[i];
        
        if(encID == currentEnc.id){
            currentEnc.active = !currentEnc.active;
            
//            console.log(currentHero.name + ": " + currentHero.active);
            
            if(currentEnc.active == true){
                //switch image to color
                
//                $(button).removeClass("btn-secondary faded").addClass("btn-warning full");
                $(button).removeClass("faded").addClass("full");
                
                if(currentEnc != currentEncounter){
                    encounterPicklist.push(currentEnc);
                    console.log("Adding to picklist...");
                    console.log(encounterPicklist);   
                }

            } else {
                //switch image to BW
                
                
               if (encounterPicklist.length > 1){
                   
//                   $(button).removeClass("btn-warning full").addClass("btn-secondary faded");
                   $(button).removeClass("full").addClass("faded");
                   
                    for(var i in encounterPicklist){
 
                        if(currentEnc.id == encounterPicklist[i].id){

                            var index = encounterPicklist.indexOf(encounterPicklist[i]);
                            if (index > -1) {
                              encounterPicklist.splice(index, 1);
                            }

                            console.log("Removing from picklist...");
                            console.log(encounterPicklist);
                            break;
                        }   
                    }

                } else {
                    currentEnc.active = true;
                }
            }          
            break;
        }        
        
    }
    
}

function setVillainInPicklist(element, vilName, vilID, imageName){
//    console.log(heroName + " clicked...");
    
    for (var i in villains){
        
        var currentVil = villains[i];
        
        if(vilID == currentVil.id){
            currentVil.active = !currentVil.active;
            
//            console.log(currentHero.name + ": " + currentHero.active);
            
            if(currentVil.active == true){
                //switch image to color
                $(element).attr("src","images/villains/icons/" + imageName);
                
                if(currentVil != currentVillain){
                    villainPicklist.push(currentVil);
                    console.log("Adding to picklist...");
                    console.log(villainPicklist);   
                }

            } else {
                //switch image to BW
                
                
               if (villainPicklist.length > 1){
                   
                   $(element).attr("src","images/villains/icons/bw_" + imageName);
                   
                    for(var i in villainPicklist){
 
                        if(currentVil.id == villainPicklist[i].id){

                            var index = villainPicklist.indexOf(villainPicklist[i]);
                            if (index > -1) {
                              villainPicklist.splice(index, 1);
                            }

                            console.log("Removing from picklist...");
                            console.log(villainPicklist);
                            break;
                        }   
                    }

                } else {
                    currentVil.active = true;
                }
            }          
            break;
        }        
        
    }
    
}

function setHeroInPicklist(element, heroName, heroID, imageName){

//    console.log(heroName + " clicked...");
    
    for (var i in heroes){
        
        var currentHero = heroes[i];

         if(heroID == currentHero.id){
            currentHero.active = !currentHero.active;

//            console.log(currentHero.name + ": " + currentHero.active);

            if(currentHero.active == true){
                //switch image to color
                $(element).attr("src","images/heroes/icons/" + imageName);

                if(currentHero != currentHero01 && currentHero != currentHero02 && currentHero != currentHero03 && currentHero != currentHero04){
                    heroPicklist.push(currentHero);
                    console.log("Adding to picklist...");
                    console.log(heroPicklist);   
                }

            } else {
                //switch image to BW


               if (heroPicklist.length > numberOfPlayers){

                   $(element).attr("src","images/heroes/icons/bw_" + imageName);

                    for(var i in heroPicklist){

                        if(currentHero.id == heroPicklist[i].id){

                            var index = heroPicklist.indexOf(heroPicklist[i]);
                            if (index > -1) {
                              heroPicklist.splice(index, 1);
                            }

                            console.log("Removing from picklist...");
                            console.log(heroPicklist);
                            break;
                        }   
                    }

                } else {
                    currentHero.active = true;
                }
            }          
            break;
        }    
              
        
    }
    
}

//REGION: Individual select functions

function selectVillain(villainID, villainName, villainImage){
    
    var imgOutput = document.getElementById("imgVillain");
    var txtOutput = $("#txtVillain");
    
    var villainImgDiv = $("#villainImgDiv"); 
    var villainTxtDiv  = $("#villainTxtDiv");
    var encounterTxtDiv = $("#encounterTxtDiv");

    $(villainImgDiv).hide();
    imgOutput.innerHTML = '<img src="images/villains/' + villainImage + '">';
    $(villainImgDiv).show("fade", 1000);
        
//    console.log(heroName);        
    
    $(villainTxtDiv).hide();
    $(encounterTxtDiv).hide();

    txtOutput.html(villainName);
    $(villainTxtDiv).show("fade", 1000);
    
    $(encounterTxtDiv).show("fade", 1000);
    
    for(var i in villainPicklist){
        if(villainPicklist[i].id == villainID){

            addToPicklist(villainPicklist, currentVillain);

            console.log(villainPicklist[i].name + " selected. Removing from villainPicklist...");
            console.log("Current Villain Picklist: ");

            currentVillain = villainPicklist[i];
            removeFromPicklist(villainPicklist, i);

            console.log(villainPicklist);

            break;
        }
    }
    
    //disable encounter button for wrecking crew
    //id 3006
    
    var encBtn = $("#btnEncounterSelect");
    var encRandBtn = $("#btnRandomEncounter")
    var vilImg = $("#imgVillain img");
    
    if(villainID == 3006){
//        console.log("Wrecking Crew selected...");
        
        //disable encounter button
        
        encBtn.addClass('disabled');
        encRandBtn.hide();
        
        //change css to rounded all around
        
        vilImg.css("border-radius", "15px 15px 15px 15px");
        
        //remove encounter
        
        clearEncounter();
        
    } else {
        
        //enable encounter button
        
        encBtn.removeClass('disabled');
        encRandBtn.show();
        
        //change css to rounded on left side
        
        vilImg.css("border-radius", "15px 0px 0px 15px");
        
    }
}

function selectEncounter(encounterID, encounterName, encounterImage){
        
    var imgOutput = document.getElementById("imgEncounter");
    var txtOutput = $("#txtEncounter");
    
    var villainImgDiv = $("#villainImgDiv"); 
    var villainTxtDiv  = $("#villainTxtDiv");
    var enounterTxtDiv = $("#encounterTxtDiv");

    $(villainImgDiv).hide();
    imgOutput.innerHTML = '<img src="images/encounters/' + encounterImage + '">';
    $(villainImgDiv).show("fade", 1000);
    
//    console.log(heroName);        
    
    $(enounterTxtDiv).hide();
    $(villainTxtDiv).hide();

    txtOutput.html(encounterName);
    $(enounterTxtDiv).show("fade", 1000);
    $(villainTxtDiv).show("fade", 1000);
    
    for(var i in encounterPicklist){
        if(encounterPicklist[i].id == encounterID){

            addToPicklist(encounterPicklist, currentEncounter);

            console.log(encounterPicklist[i].name + " selected. Removing from encounterPicklist...");
            console.log("Current Encounter Picklist: ");

            currentEncounter = encounterPicklist[i];
            removeFromPicklist(encounterPicklist, i);

            console.log(encounterPicklist);

            break;
        }
    }
}

//TODO: Consolidate Select hero functions and select aspect functions

//NOTE: WIP select hero aspect functions

function selectHero(heroNumber, heroID, heroName, heroImage){
    
    var currentPlayerHero = null;
    var imgOutput = "";
    var txtOutput = "";
    var heroContainer = null;
    
    switch(heroNumber){
        case 1:
            break;
        default:
            break;
    }
    
    if(currentHero01 == null || heroID != currentHero01.id){
        var imgOutput = document.getElementById("imgHero1");
        var txtOutput = $("#txtHero1");
        var fadeThis = $("#hero01info");

        $(fadeThis).hide();
        imgOutput.innerHTML = '<img src="images/heroes/' + heroImage + '">';
        txtOutput.html(heroName);
        $(fadeThis).show("fade", 1000);

        for(var i in heroPicklist){
            if(heroPicklist[i].id == heroID){

                addToPicklist(heroPicklist, currentHero01);

                console.log(heroPicklist[i].name + " selected. Removing from heroPicklist...");
                console.log("Current Hero Picklist: ");

                currentHero01 = heroPicklist[i];
                removeFromPicklist(heroPicklist, i);

                console.log(heroPicklist);

                break;
            }
        }
    }
}

function selectAspect(aspectName, aspectImage){
    
    var fadeThis = $("#hero01info");
    var output = document.getElementById("aspect1");
    $(fadeThis).hide();
    output.innerHTML = '<img src="images/aspects/' + aspectImage + '">';
    $(fadeThis).show("slide", {direction: "left"});
//    output.innerHTML = aspectName;   
}


//REGION: Original select hero and aspect functions

function selectHero01(heroID, heroName, heroImage){
    
    //spider-woman id: 1013
    
    if(currentHero01 == null || heroID != currentHero01.id){
        var imgOutput = document.getElementById("imgHero1");
        var txtOutput = $("#txtHero1");
        var fadeThis = $("#hero01info");

        $(fadeThis).hide();
        imgOutput.innerHTML = '<img src="images/heroes/' + heroImage + '">';
        txtOutput.html(heroName);
        $(fadeThis).show("fade", 1000);

        for(var i in heroPicklist){
            if(heroPicklist[i].id == heroID){

                addToPicklist(heroPicklist, currentHero01);

                console.log(heroPicklist[i].name + " selected. Removing from heroPicklist...");
                console.log("Current Hero Picklist: ");

                currentHero01 = heroPicklist[i];
                removeFromPicklist(heroPicklist, i);

                console.log(heroPicklist);

                break;
            }
        }
        //Spider-Woman aspect background
        if(heroID == '1013'){
            var outputImg = document.getElementById("aspect1");
            outputImg.innerHTML = '';
        }
    }
}

//TODO: Select two aspects for when Spider-Woman is the selected hero
//TODO: Place Spider-Woman Aspect criteria into all selctAspect functions

function selectAspect01(aspectName, aspectImage){
    
    var fadeThis = $("#hero01info");
    var outputImg = document.getElementById("aspect1");
    var outputTxt = document.getElementById("txtAspect1");
    $(fadeThis).hide();
    outputImg.innerHTML = '<img src="images/aspects/' + aspectImage + '">';
    outputTxt.innerHTML = aspectName;
    $(fadeThis).show("fade", 1000);
//    output.innerHTML = aspectName;   
}

function selectHero02(heroID, heroName, heroImage){
    
    if(currentHero02 == null || heroID != currentHero02.id){
        var imgOutput = document.getElementById("imgHero2");
        var txtOutput = $("#txtHero2");
        var fadeThis = $("#hero02info");

        $(fadeThis).hide();
        imgOutput.innerHTML = '<img src="images/heroes/' + heroImage + '">';
        txtOutput.html(heroName);
        $(fadeThis).show("fade", 1000);

            for(var i in heroPicklist){
            if(heroPicklist[i].id == heroID){

                addToPicklist(heroPicklist, currentHero02);

                console.log(heroPicklist[i].name + " selected. Removing from heroPicklist...");
                console.log("Current Hero Picklist: ");

                currentHero02 = heroPicklist[i];
                removeFromPicklist(heroPicklist, i);

                console.log(heroPicklist);

                break;
            }
        }   
    }
}

function selectAspect02(aspectName, aspectImage){
    
    var fadeThis = $("#hero02info");    
    var outputImg = document.getElementById("aspect2");
    var outputTxt = document.getElementById("txtAspect2");
    $(fadeThis).hide();
    outputImg.innerHTML = '<img src="images/aspects/' + aspectImage + '">';
    outputTxt.innerHTML = aspectName;
    $(fadeThis).show("fade", 1000);
}

function selectHero03(heroID, heroName, heroImage){
    
    if(currentHero03 == null || heroID != currentHero03.id){
        var imgOutput = document.getElementById("imgHero3");
        var txtOutput = $("#txtHero3");
        var fadeThis = $("#hero03info");

        $(fadeThis).hide();
        imgOutput.innerHTML = '<img src="images/heroes/' + heroImage + '">';
        txtOutput.html(heroName);
        $(fadeThis).show("fade", 1000);

            for(var i in heroPicklist){
            if(heroPicklist[i].id == heroID){

                addToPicklist(heroPicklist, currentHero03);

                console.log(heroPicklist[i].name + " selected. Removing from heroPicklist...");
                console.log("Current Hero Picklist: ");

                currentHero03 = heroPicklist[i];
                removeFromPicklist(heroPicklist, i);

                console.log(heroPicklist);

                break;
            }
        }   
    }
}

function selectAspect03(aspectName, aspectImage){
    
    var fadeThis = $("#hero03info");
    var outputImg = document.getElementById("aspect3");
    var outputTxt = document.getElementById("txtAspect3");
    $(fadeThis).hide();
    outputImg.innerHTML = '<img src="images/aspects/' + aspectImage + '">';
    outputTxt.innerHTML = aspectName;
    $(fadeThis).show("fade", 1000);
}

function selectHero04(heroID, heroName, heroImage){
    
    if(currentHero04 == null || heroID != currentHero04.id){
        var imgOutput = document.getElementById("imgHero4");
        var txtOutput = $("#txtHero4");
        var fadeThis = $("#hero04info");

        $(fadeThis).hide();
        imgOutput.innerHTML = '<img src="images/heroes/' + heroImage + '">';
        txtOutput.html(heroName);
        $(fadeThis).show("fade", 1000);

            for(var i in heroPicklist){
            if(heroPicklist[i].id == heroID){

                addToPicklist(heroPicklist, currentHero04);

                console.log(heroPicklist[i].name + " selected. Removing from heroPicklist...");
                console.log("Current Hero Picklist: ");

                currentHero04 = heroPicklist[i];
                removeFromPicklist(heroPicklist, i);

                console.log(heroPicklist);

                break;
            }
        }   
    }
}

function selectAspect04(aspectName, aspectImage){
    
    var fadeThis = $("#hero04info");    
    var outputImg = document.getElementById("aspect4");
    var outputTxt = document.getElementById("txtAspect4");
    $(fadeThis).hide();
    outputImg.innerHTML = '<img src="images/aspects/' + aspectImage + '">';
    outputTxt.innerHTML = aspectName;
    $(fadeThis).show("fade", 1000);
}

//Dual aspect selection

function selectDualAspects(element, aspect1, aspect2) {
//    console.log(element);
    console.log(aspect1);
    console.log(aspect2);
}

//REGION: Randomize

function randomize(type){
    
    // 0: Hero 01
    // 1: Hero 02
    // 2: Aspect 01
    // 3: Aspect 02
    // 4: Villain
    // 5: Encounter
    // 6: Hero 03
    // 7: Aspect 03
    // 8: Hero 04
    // 9: Aspect 04
    //10: Spider-Woman Aspects
    
    //Changes aspect type to Spider-Woman aspect type if she is currently selected
//    if(type == 2 && currentHero01 != null && currentHero01.id == '1013'){
//            type = 10;
//    }
//    if(type == 3 && currentHero02 != null && currentHero02.id == '1013'){
//            type = 10;
//    }
//    if(type == 7 && currentHero03 != null && currentHero03.id == '1013'){
//            type = 10;
//    }
//    if(type == 9 && currentHero04 != null && currentHero04.id == '1013'){
//            type = 10;
//    }
    
    var array = [];
    var current;
    var current2;
    
    switch(type){
        case 0:
            array = heroPicklist;
            current = currentHero01;
            break;
        case 1:
            array = heroPicklist;
            current = currentHero02;
            break;
        case 2:
            array = aspects;
            current = currentAspect01;
            break;
        case 3:
            array = aspects;
            current = currentAspect02;
            break;
        case 4:
            array = villainPicklist;
            current = currentVillain;
            break;
        case 5:
            array = encounterPicklist;
            current = currentEncounter;
            break;
        case 6:
            array = heroPicklist;
            current = currentHero03;
            break;        
        case 7:
            array = aspects;
            current = currentAspect03;
            break;        
        case 8:
            array = heroPicklist;
            current = currentHero04;
            break;        
        case 9:
            array = aspects;
            current = currentAspect04;
            break;
        case 10:
            array = aspects;
            current = currentSpiWoAspect01;
            current2 = currentSpiWoAspect02;
        default:
            break;
    }
        
    var random = Math.floor(Math.random() * array.length);
    
    var selected = array[random];
    
    current = selected;
    
    //For a second random
    
    if(type == 10){
        var random2;

        do{
            random2 = Math.floor(Math.random() * array.length);    
        } while (random2 == random);


        var selected2 = array[random2];

        current2 = selected2; 
    }
    
    switch(type){
        case 0:     //Hero 01
            selectHero01(selected.id, selected.name, selected.image);
            currentHero01 = current;
            break;
        case 1:     //Hero 02
            selectHero02(selected.id, selected.name, selected.image);
            currentHero02 = current;
            break;
        case 2:     //Aspect 01
            var image = getRandomAspectVariant(selected);
            selectAspect01(selected.name, image);
            currentAspect01 = current;
            break;
        case 3:     //Aspect 02
            var image = getRandomAspectVariant(selected);
            selectAspect02(selected.name, image);
            currentAspect02 = current;
            break;
        case 4:     //Villain
            selectVillain(selected.id, selected.name, selected.image);
            currentVillain = current;
            break;
        case 5:     //Encounter
            selectEncounter(selected.id, selected.name, selected.image);
            currentEncounter = current;
            break;
        case 6:     //Hero 03
            selectHero03(selected.id, selected.name, selected.image);
            currentHero03 = current;
            break;
        case 7:     //Aspect 03
            var image = getRandomAspectVariant(selected);
            selectAspect03(selected.name, image);
            currentAspect03 = current;
            break;
        case 8:     //Hero 04
            selectHero04(selected.id, selected.name, selected.image);
            currentHero04 = current;
            break;
        case 9:     //Aspect 04
            var image = getRandomAspectVariant(selected);
            selectAspect04(selected.name, image);
            currentAspect04 = current;
            break;
        case 10:    //Spider-Woman
            currentSpiWoAspect01 = current;
            currentSpiWoAspect02 = current2;
            getRandomDualAspectVariants(selected, selected2);
            break;
        default:
            break;
            
    }
}

function getRandomAspectVariant(selected){
 
    var variants = selected.variants;
    var rando = Math.floor(Math.random() * variants.length);
    var choice = variants[rando];
    var image =  selected.name.toLowerCase() + "_" + choice + ".png";
    
    return image;
    
}

function getRandomDualAspectVariants(aspect1, aspect2){
    
    //2001      aggression     (red)
    //2002      justice        (yellow)
    //2003      leadership     (blue)
    //2004      protection     (green)
    
    console.log("Aspect IDs");
    console.log(aspect1.id);
    console.log(aspect2.id);
    
    var gradient1, gradient2;
    
    switch(aspect1.id){
        case "2001":
            gradient1 = "rgba(255, 0, 0, 0.35)";
            break;
        case "2002":
            gradient1 = "rgba(255, 246, 0, 0.35) ";
            break;
        case "2003":
            gradient1 = "rgba(0, 252, 255, 0.35) ";
            break;
        case "2004":
            gradient1 = "rgba(0, 255, 6, 0.35)";
            break;
        default:
            break;
    }
    
    switch(aspect2.id){
        case "2001":
            gradient2 = "rgba(255, 0, 0, 0.35)";
            break;
        case "2002":
            gradient2 = "rgba(255, 246, 0, 0.35)";
            break;
        case "2003":
            gradient2 = "rgba(0, 252, 255, 0.35)";
            break;
        case "2004":
            gradient2 = "rgba(0, 255, 6, 0.35)";
            break;
        default:
            break;
    }
    
//    var newCSS = 'linear-gradient(' + gradient1 + gradient2 + ', url(images/aspects/spider-woman.png)';
//    var newCSS = '-webkit-gradient(linear, left top, left bottom, from(' + gradient1 + '), to(' + gradient2 + '))';
//    console.log(newCSS);
    
//    $("#spider-woman").css({background: newCSS});
    
    $('#spider-woman').css({
        background: "-webkit-gradient(linear, left top, left bottom, from(" + gradient1 + "), to(" + gradient2 + ")), url(images/aspects/spider-woman.png)" 
    });
    
    var variant1 = aspect1.variants;
    var rando1 = Math.floor(Math.random() * variant1.length);
    var choice1 = variant1[rando1];
    var image1 = choice1 + ".png";
    
    var variant2 = aspect2.variants;
    var rando2 = Math.floor(Math.random() * variant2.length);
    var choice2 = variant2[rando2];
    var image2 = choice2 + ".png";

}

function compareNames(a, b) {
  // Use toUpperCase() to ignore character casing
    
    var nameA, nameB;
       
    if(a.hasOwnProperty("sorting_name")) {
        nameA = a.sorting_name.toUpperCase();
    } else {
        nameA = a.name.toUpperCase();
    }

   if(b.hasOwnProperty("sorting_name")) {
        nameB = b.sorting_name.toUpperCase();
    } else {
        nameB = b.name.toUpperCase();
    } 
            
    let comparison = 0;
    
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

function compareIDs(a, b) {
  // Use toUpperCase() to ignore character casing
    
    var nameA, nameB;

    nameA = parseInt(a.id);
    nameB = parseInt(b.id);

    let comparison = 0;
    
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    }
    return comparison;
}

function removeFromPicklist(picklist, index){
    if (index > -1) {
        picklist.splice(index, 1);
    }
}

function addToPicklist(picklist, object){
    if(object != null){
        picklist.push(object);
    }
}

function clearEncounter(){
        
    var imgOutput = document.getElementById("imgEncounter");
    var txtOutput = $("#txtEncounter");
    
    var villainImgDiv = $("#villainImgDiv"); 
    var villainTxtDiv  = $("#villainTxtDiv");
    var enounterTxtDiv = $("#encounterTxtDiv");

//    $(villainImgDiv).hide();
    imgOutput.innerHTML = '';
//    $(villainImgDiv).show("fade", 1000);
    
//    console.log(heroName);        
    
//    $(enounterTxtDiv).hide();
//    $(villainTxtDiv).hide();

    txtOutput.html('');
//    $(enounterTxtDiv).show("fade", 1000);
//    $(villainTxtDiv).show("fade", 1000);
    
    //add current encounter to picklist
    addToPicklist(encounterPicklist, currentEncounter);
    
    //make curren encounter null
    currentEncounter = null;
    
}

//REGION: Number of players functions

function setPlayers(numPlayers){
    
    $("#playerSelect").children("button").removeClass("btn-primary").addClass("btn-secondary");
    
    switch(numPlayers){
        case 1:
            numberOfPlayers = 1;
            clearHeroAspect(2);
            clearHeroAspect(3);
            clearHeroAspect(4);
            var button = $("#playerSelect").children("button")[0];
            $(button).removeClass("btn-secondary").addClass("btn-primary");
            break;
        case 2:
            numberOfPlayers = 2;
            showHeroAspect(2);
            clearHeroAspect(3);
            clearHeroAspect(4);
            var button = $("#playerSelect").children("button")[1];
            $(button).removeClass("btn-secondary").addClass("btn-primary");
            break;
        case 3:
            numberOfPlayers = 3;
            showHeroAspect(2);
            showHeroAspect(3);
            clearHeroAspect(4);
            var button = $("#playerSelect").children("button")[2];
            $(button).removeClass("btn-secondary").addClass("btn-primary");
            break;
        case 4:
            showHeroAspect(2);
            showHeroAspect(3);
            showHeroAspect(4);
            numberOfPlayers = 4;
            var button = $("#playerSelect").children("button")[3];
            $(button).removeClass("btn-secondary").addClass("btn-primary");
            break;
        default:
            break;
    }
    
    console.log(heroPicklist);
}

function clearHeroAspect(hero){
    
    var currentPlayer = null;
    var heroTxt = null;
    var heroImg = null;
    var aspectTxt = null;
    var aspectImg = null;
    var heroOutput = "";
    var aspectOutput = "";
    
    switch(hero){
        case 1:
            $("#hero01container").hide();
            currentPlayer = currentHero01;
            currentHero01 = null;
            currentAspect01 = null;
            heroTxt = $("#txtHero1");
            heroImg = $("#imgHero1");
            aspectImg = $("#aspect1");
            aspectTxt = $("#txtAspect1");
            heroOutput = "Hero #1";
            break;
        case 2:
            $("#hero02container").hide();
            currentPlayer = currentHero02;
            currentHero02 = null;
            currentAspect02 = null;
            heroTxt = $("#txtHero2");
            heroImg = $("#imgHero2");
            aspectImg = $("#aspect2");
            aspectTxt = $("#txtAspect2");
            heroOutput = "Hero #2";
            break;
        case 3:
            $("#hero03container").hide();
            currentPlayer = currentHero03;
            currentHero03 = null;
            currentAspect03 = null;
            heroTxt = $("#txtHero3");
            heroImg = $("#imgHero3");
            aspectImg = $("#aspect3");
            aspectTxt = $("#txtAspect3");
            heroOutput = "Hero #3";
            break;
        case 4:
            $("#hero04container").hide();
            currentPlayer = currentHero04;
            currentHero04 = null;
            currentAspect04 = null;
            heroTxt = $("#txtHero4");
            heroImg = $("#imgHero4");
            aspectImg = $("#aspect4");
            aspectTxt = $("#txtAspect4");
            heroOutput = "Hero #4";
            break;
        default:
            break;
    }
    
    addToPicklist(heroPicklist, currentPlayer);
    
    heroTxt.html(heroOutput);
    heroImg.html("");
    aspectImg.html("");
    aspectTxt.html(aspectOutput);
    
}

function showHeroAspect(hero){
    
    switch(hero){
        case 1:
            $("#hero01container").show();
            break;
        case 2:
            $("#hero02container").show();
            break;
        case 3:
            $("#hero03container").show();
            break;
        case 4:
            $("#hero04container").show();
            break;
        default:
            break;
    } 
}

function addFooter(){
    
    var footerOutput = "<small>";
    footerOutput += "Latest Release: ";
    footerOutput += MCLCG_DATA.latest_release;
    footerOutput += " | ";
    footerOutput += MCLCG_DATA.latest_release_date;
    footerOutput += "</small>";

    
    $("#footer").html(footerOutput);
}
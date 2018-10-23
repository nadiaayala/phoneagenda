$(function(){
    const $btnAdd = $('#add');
    const $contacts = $('#contacts');
    var $inputName = $('#name');
    var $inputPhone = $('#phone');
    var $textEnteredName;
    var $textEnteredPhone;
    var $divAlert;
    const $letterA = $('#letterA');
    const $letterB = $('#letterB');
    const $letterC = $('#letterC');
    const $letterD = $('#letterD');
    const $letterE = $('#letterE');
    const $letterF = $('#letterF');
    const $letterG = $('#letterG');
    const $letterH = $('#letterH');     

    $($inputName).on('keyup', function(){
        $textEnteredName= $('#name').val();
    });

    $($inputPhone).on('keyup', function(){
        $textEnteredPhone= $('#phone').val();
    });

    $btnAdd.on('click', function(){ 
        if($textEnteredName!='' && $textEnteredName!=undefined)
        {            
            if($.isNumeric($textEnteredPhone)){
                var $newContact = $('<div class="d-flex justify-content-around" id="newContact">');
                var $newList = $('<div class="d-flex flex-row bg-light border border-primary w-75 justify-content-around mt-1"></div>')
                var $newName = $('<div>' + $textEnteredName+' </div>');
                var $newPhone = $('<div>'+ $textEnteredPhone+ ' </div>');
                $newList.prepend($newName);
                $newList.append($newPhone);
                $newContact.append($newList);
                var $first = $textEnteredName.charAt(0);
                if( $first=='a'){
                    $letterA.append($newContact);                          
                }
                else if ($first=='b'){
                    $letterB.append($newContact);
                }
                else if ($first=='c'){
                    $letterC.append($newContact);
                }           
                else if ($first=='d'){
                    $letterD.append($newContact);
                }
                else if ($first=='e'){
                    $letterE.append($newContact);
                }
                else if ($first=='f'){
                    $letterF.append($newContact);
                }
                else if ($first=='g'){
                    $letterG.append($newContact);
                }
                else if ($first=='h'){
                    $letterH.append($newContact);
                }
                $inputName.val('');
                $inputPhone.val('');
                
            }
            else
            {
             $divAlert = $('<div class="alert alert-warning alert-dismissible"> Please, insert a valid phone number!</div>');
             var $alertBtn = $('<button id="$closeBtn" class="close" data-dismiss="alert"> &times; </button>') 
             $divAlert.append($alertBtn);
             $contacts.prepend($divAlert);
             $divAlert.on('click', function(){
                 $(this).remove();
            });
            };
        }
                
    });







});
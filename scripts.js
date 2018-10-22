$(function(){
    const $btnAdd = $('#add');
    const $contacts = $('#contacts');
    var $textEnteredName;
    var $textEnteredPhone;

    $('#name').on('keyup', function(){
        $textEnteredName= $('#name').val();
    });

    $('#phone').on('keyup', function(){
        $textEnteredPhone= $('#phone').val();
    });

    $btnAdd.on('click', function(){ 
        if($textEnteredName!='' && $textEnteredName!=undefined){
            var $newContact = $('<div class="d-flex justify-content-around">');
            var $newList = $('<div class="d-flex flex-row bg-light border border-dark w-75 justify-content-around mt-1"></div>')
            var $newName = $('<div>' + $textEnteredName+' </div>');
            var $newPhone = $('<div>'+ $textEnteredPhone+ ' </div>');
            $newList.prepend($newName);
            $newList.append($newPhone);
            $newContact.append($newList);
            $contacts.append($newContact);                      
        }
                
    });







});
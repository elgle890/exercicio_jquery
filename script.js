$(`form`).on(`submit`, function(e) {
    e.preventDefault();
    const valor_input = $(`input`).val();
    if(valor_input == ``) {
        alert(`erro! campo vazio!`);
    } else {
        
        const input_tarefa = $(`<li style="display: flex;"> ${valor_input} </li>`);
        
        input_tarefa.appendTo($(`ul`));
        $(`ul`).slideDown();
        
        $('ul').on('click', 'li', function() {
            $(this).css('text-decoration', 'line-through');
        });
        
        
        
    }
    
    
})


const listElement = document.getElementById('list');

for (let i = 1; i <= 100; i++){
    const a = i % 3;
    const b = i % 5;

    if ((a == 0) && (b == 0)) { 
       console.log('FizzBuzz');   
       const liElement =  document.createElement('li');
       liElement.classList.add('box', 'bg-danger', 'd-flex', 'justify-content-center', 'align-items-center');
       liElement.append('FizzBuzz');
       listElement.append(liElement);
    }
    else if (a == 0) { 
        console.log('Fizz');
        const liElement =  document.createElement('li');
        liElement.classList.add('box', 'bg-success', 'd-flex', 'justify-content-center', 'align-items-center');
        liElement.append('Fizz');
        listElement.append(liElement);
    }
    else if (b == 0) {
        console.log('Buzz');
        let colMarkup = `<li class="box bg-warning d-flex justify-content-center align-items-center">Buzz</li>`;
        listElement.insertAdjacentHTML('beforeend', colMarkup);    
    }
    else {
        console.log(i);
        let colMarkup = `<li class="box bg-primary d-flex justify-content-center align-items-center"> ${i} </li>`;
        listElement.insertAdjacentHTML('beforeend', colMarkup);      
    }

}
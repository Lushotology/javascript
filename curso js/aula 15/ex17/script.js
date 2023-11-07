//alert('Olá, bem-vindos')

function tabuada (){
        let num = document.getElementById('txtn')
        let tab = document.getElementById('seltab')

        if (num.value.length == 0) {
            alert('Por favor, digite um número.')
            res.innerHTML = 'Erro'


        } else {
            let n = Number(num.value)
            let c = 1
            tab.innerHTML = ''
            while (c <=10){
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++



            }
            /*
            for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
             tab.appendChild(item);
            
            }
            */


        }

        let t = Number(tab.value)

    






}






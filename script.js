( () => {

    let evaluatePasswd = (password) => {
        let score = 0;
        score = password.length;
        
        score = (password.match( /[!]/gmi)) ? score + (password.match(/[!]/gmi).length * 3) : score;  
        score = (password.match( /[@]/gmi)) ? score + (password.match(/[@]/gmi).length * 3) : score;
        score = (password.match( /[$]/gmi)) ? score + (password.match(/[$]/gmi).length * 4) : score;
        score = (password.match( /[a-z]/gm)) ? score + 2 : score;
        score = (password.match( /[A-Z]/gm)) ? score + 3 : score;  
        score = (password.match( /[0-9]/gmi)) ? score + 4 : score; 
        return score;
    };

    let scoreToData = (score) => {
        if(score >= 25){
            return {
                width: '100%',
                color: '#26de81',
                label: 'Strong',
            };
        }
        else if ( score >= 15 ) {  
            return {  
             width: '66%',  
             color: '#fd9644',  
             label: 'Medium',  
            };  
        } 
        else {  
            return {  
             width: '33%',  
             color: '#fc5c65',  
             label: 'Weak',  
            };  
        }
    };

    window.addEventListener('DOMContentLoaded', () => {
        let pass = document.querySelector('.js--password');  
        let bar = document.querySelector('.js--password-bar');  
        let txt = document.querySelector('.js--password-text');

        pass.addEventListener('input', () => {
            let data = scoreToData(evaluatePasswd(pass.value));
            bar.style.width = data.width;
            bar.style.background = data.color;
            txt.innerText = data.label;
        });

    });

})();